"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Coins, X, Palette, Wallpaper, Loader, Check, Copy } from 'lucide-react';
import Groq from "groq-sdk";
import './SmartContractGenerator.scss';

type TemplateId = 'token' | 'nft' | 'nft_collection';

interface Template {
  id: TemplateId;
  name: string;
  description: string;
  icon: React.ElementType;
}

interface PredefinedPrompts {
  token: string[];
  nft_collection: string[];
  nft: string[];
}

const useTypewriter = (text: string, speed: number = 10, reset: boolean = false) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (reset) {
      setDisplayedText('');
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, reset]);

  return displayedText;
};

const SmartContractGenerator: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateId | null>('token');
  const [customization, setCustomization] = useState<string>('');
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [showPredefinedPrompts, setShowPredefinedPrompts] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const codeRef = useRef<HTMLPreElement>(null);
  const [resetTypewriter, setResetTypewriter] = useState(false);

  const formattedCode = generatedContract || '';
  const displayedCode = useTypewriter(formattedCode, 5, resetTypewriter);

  const scrollToBottom = useCallback(() => {
    if (codeRef.current) {
      codeRef.current.scrollTop = codeRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [displayedCode, scrollToBottom]);

  const resetGenerator = () => {
    setStep(1);
    setGeneratedContract(null);
    setCustomization('');
    setResetTypewriter(true);
    setTimeout(() => setResetTypewriter(false), 100);
  };

  const templates: Template[] = [
    { id: 'token', name: 'Token', description: 'Create a token contract', icon: Coins },
    { id: 'nft_collection', name: 'NFT Collection', description: 'Create a NFT Collection contract', icon: Wallpaper },
    { id: 'nft', name: 'NFT', description: 'Create a NFT contract', icon: Palette },

  ];

  const predefinedPrompts: PredefinedPrompts = {
    token: [
      "Create a token with name MyToken, symbol MTK, decimal 18 and a total supply of 12,000,000.",
      "Create a token with name MyToken, symbol MTK, decimal 18 and a total supply of 12,000,000 and make a function for lock token.",
      "Create a token with name MyToken, symbol MTK, decimal 18 and a total supply of 12,000,000 and make a function to burn token.",
    ],
    nft_collection: [
      "Create a collection with token uri, base uri, max supply and mint price editable",
    ],
    nft: [
      "Create a NFT with collectionId and nftIndex non editable and token URI editable.",
      "Create a NFT with on-chain metadata, i also want to be able to edit the tokenUri.",
    ],
  };

  const contractPrompts = {
    token: {
      system: ""
    },
    nft_collection: {
      system: ""
    },
    nft: {
      system: ""
    },
  };

  const groq = new Groq({ apiKey: "", dangerouslyAllowBrowser: true });

  const generateContract = async () => {
    if (!selectedTemplate || !customization.trim()) return;

    setIsLoading(true);
    setStep(2);

    const prompt = contractPrompts[selectedTemplate] || {
      system: ""
    };

    try {
      const result = await groq.chat.completions.create({
        messages: [
          {role: "system", content: prompt.system},
          {role: "user", content: `${customization}`}
        ],
        model: "llama-3.2-90b-text-preview",
      });
      setGeneratedContract(result.choices[0]?.message?.content || "No content generated");
      setStep(3);
    } catch (error) {
      console.error("Error generating contract:", error);
      setGeneratedContract("An error occurred while generating the contract, please try again.");
      setStep(3);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTemplateSelect = (templateId: TemplateId) => {
    setSelectedTemplate(templateId);
  };

  const handleCustomizationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomization(e.target.value);
  };

  const handlePredefinedPromptSelect = (prompt: string) => {
    setCustomization(prompt);
    setShowPredefinedPrompts(false);
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const getPlaceholderText = (templateId: TemplateId | null): string => {
    switch (templateId) {
      case 'token':
        return "i.e. Create a token with name 'MyToken', symbol 'MTK', decimal 18 and a total supply of 12,000,000";
      case 'nft_collection':
        return "i.e. Create a NFT collection with max supply of 10,000, mint price of 10 ALPH, and base URI 'ipfs://...'";
      case 'nft':
        return "i.e. Create a NFT with editable token URI and on-chain metadata";
      default:
        return "Please describe your smart contract requirements with as much detail as possible...";
    }
  };

  const renderStep1 = () => (
    <>
      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-button ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <template.icon size={24} />
            <span className="template-name">{template.name}</span>
            <span className="template-description">{template.description}</span>
          </button>
        ))}
      </div>

      <div className="customization-section">
        <h2>Describe Customisation</h2>
        <p>Choose customisation to add into your smart contract project</p>
        <textarea
          value={customization}
          onChange={handleCustomizationChange}
          placeholder={getPlaceholderText(selectedTemplate)}
        />
      </div>

      <div className="action-buttons">
        <button
          className="generate-button"
          onClick={generateContract}
          disabled={!selectedTemplate || !customization.trim() || isLoading}
        >
          {isLoading ? 'Generating...' : 'Generate Smart Contract'}
        </button>
        <button
          className="predefined-prompts-button"
          onClick={() => setShowPredefinedPrompts(true)}
        >
          Predefined Prompts
        </button>
      </div>

      {showPredefinedPrompts && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Predefined Prompts</h2>
              <button onClick={() => setShowPredefinedPrompts(false)}>
                <X size={24} />
              </button>
            </div>
            {selectedTemplate && predefinedPrompts[selectedTemplate].map((prompt, index) => (
              <button
                key={index}
                className="prompt-button"
                onClick={() => handlePredefinedPromptSelect(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );

  const renderStep2 = () => (
    <div className="loading-container">
      <Loader className="loading-spinner" />
      <p>Generating your smart contract...</p>
    </div>
  );

  const renderStep3 = () => {
    return (
      <div className="result-container">
        <h2>Generated Smart Contract</h2>
        <div className="code-container">
          <pre className="generated-contract-pre" ref={codeRef}>
            <code className="language-ralph">
              {displayedCode}
            </code>
          </pre>
          <button 
            className="copy-button" 
            onClick={() => copyToClipboard(formattedCode)}
            title={copied ? "Copied!" : "Copy to clipboard"}
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>
          <div className="warning-content">
            <span className="warning-icon">⚠️</span>
            <p>The generated code may contain errors. Don&apos;t hesitate to generate multiple times and report bugs on{' '}
              <a href="https://t.me/ralphbuildercommunity" target="_blank" rel="noopener noreferrer">Telegram</a>{' '}or{' '}
              <a href="https://twitter.com/ralphbuilder" target="_blank" rel="noopener noreferrer">Twitter</a>.
            </p>
          </div>
        <button
          className="generate-button"
          onClick={resetGenerator}
        >
          Generate Another Contract
        </button>
      </div>
    );
  };

  return (
    
    <section className="section overview-two fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="smart-contract-generator">
            <div className="header">
              <div>
                <h1>Smart Contract Generator</h1>
                <p>Create custom smart contracts for your project</p>
              </div>
              <a href="https://docs.ralphbuilder.org/proof-of-concept-poc/ralphbuilder-poc" target="_blank" rel="noopener noreferrer" className="explore-docs-button">Explore Docs</a>
            </div>
              {step === 1 && renderStep1()}
              {step === 2 && renderStep2()}
              {step === 3 && renderStep3()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartContractGenerator;
