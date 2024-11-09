import Header from "@/components/layout/header/Header";
import CommonBanner from "@/components/layout/banner/CommonBanner";
import ErrorSection from "@/components/containers/ErrorSection";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const Error = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <CommonBanner title="Error" />
        <ErrorSection />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default Error;
