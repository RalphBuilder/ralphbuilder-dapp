import Header from "@/components/layout/header/Header";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import AboutTextSlider from "@/components/containers/about/AboutTextSlider";
import AboutCraft from "@/components/containers/about/AboutCraft";
import AboutTool from "@/components/containers/about/AboutTool";
import Footer from "@/components/layout/footer/Footer";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import Animations from "@/components/layout/Animations";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <AboutBanner />
        <AboutTextSlider />
        <AboutCraft />
        <AboutTool />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
