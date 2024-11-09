import Header from "@/components/layout/header/Header";
import HomeBanner from "@/components/layout/banner/HomeBanner";
import TextSliderLarge from "@/components/containers/home/TextSliderLarge";
import CounterOne from "@/components/containers/home/CounterOne";
import Generation from "@/components/containers/home/Generation";
import Easy from "@/components/containers/home/Easy";
import Overview from "@/components/containers/home/Overview";
import EasyThree from "@/components/containers/home/EasyThree";
import Footer from "@/components/layout/footer/Footer";
import Partner from "@/components/containers/home/Partner";
import Animations from "@/components/layout/Animations";
import InitCustomCursor from "@/components/layout/InitCustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div className="my-app">
      <Header />
      <main>
        <HomeBanner />
        <TextSliderLarge />
        <CounterOne />
        <Generation />
        <Partner />
        <Easy />
        <Overview />
        <EasyThree />
      </main>
      <Footer />
      <InitCustomCursor />
      <ScrollProgressButton />
      <Animations />
    </div>
  );
};

export default page;
