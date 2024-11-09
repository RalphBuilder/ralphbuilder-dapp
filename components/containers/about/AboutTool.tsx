"use client";
import { useState } from "react";
import Image from "next/image";
import one from "@/public/images/overview/one.png";
import two from "@/public/images/overview/two.png";
import three from "@/public/images/overview/three.png";
import four from "@/public/images/overview/four.png";

const AboutTool = () => {
  const [isHover, setIsHover] = useState(0);
  return (
    <section className="section overview lilu-view">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">AI $BUILD</span>
              <h2 className="title title-animation">
                RalphBuilder Solution
              </h2>
              <p>
                We have devoted considerable effort to solving WEB3&apos;s development problems, 
                ensuring that anyone with basic knowledge can deploy their project intuitively, cost-effectively and securely.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1 fade-wrapper">
            <div className="row gaper">
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 0 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(0)}
                >
                  <div className="overview__thumb">
                    <Image src={one} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>User-Friendly Interface</h4>
                    <p className="tertiary-text">
                      Our primary objective is to create an intuitive and easy-to-use interface, 
                      ensuring that both novice and experienced developers can build sophisticated smart contracts with ease.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 1 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(1)}
                >
                  <div className="overview__thumb">
                    <Image src={two} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Cost Efficiency</h4>
                    <p className="tertiary-text">
                      RalphBuilder offers a cost-effective solution with free default prompts and a credit system supported by its native token, 
                      $BUILD. Users can buy additional credits with $BUILD, fostering a self-sustaining economy. 
                      This system supports transactions and incentivizes the platform&apos;s ongoing use and development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 2 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(2)}
                >
                  <div className="overview__thumb">
                    <Image src={three} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Security Focus</h4>
                    <p className="tertiary-text">
                      Our smart contracts are meticulously designed to prevent security vulnerabilities, 
                      ensuring the highest quality and robustness
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 fade-top">
                <div
                  className={
                    "overview__single" +
                    (isHover === 3 ? " overview__single-active" : " ")
                  }
                  onMouseEnter={() => setIsHover(3)}
                >
                  <div className="overview__thumb">
                    <Image src={four} alt="Image" priority />
                  </div>
                  <div className="overview__content">
                    <h4>Simplified Deployment</h4>
                    <p className="tertiary-text">
                      In the future, RalphBuilder will integrate advanced features to directly deploy your smart contracts on the Alephium blockchain, 
                      making the process even smoother and more secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTool;
