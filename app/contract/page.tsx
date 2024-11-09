import Header from "@/components/layout/header/Header";
import SmartContractGenerator from "@/components/containers/contract/SmartContractGenerator";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";
import Partner from "@/components/containers/home/Partner";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <SmartContractGenerator />
        <Partner />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
