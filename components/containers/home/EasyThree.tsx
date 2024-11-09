import Image from "next/image";
import Bot from "@/public/images/bot-three.png";
import One from "@/public/images/r-d.png";
import Two from "@/public/images/wave.png";
import Three from "@/public/images/r-d-t.png";

const EasyThree = () => {
  return (
    <section className="section easy easy--secondary position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
              <Image src={Bot} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 offset-xl-1">
            <div className="section__content">
              <span className="sub-title-two">RALPHBUILDER USE CASES</span>
              <h2 className="title title-animation">
                Your Access to WEB3 Solutions with Various Modules to Build on Alephium
              </h2>
              <p>
                Our AI will subsequently offer future modules to further enhance the development of your projects.
                These modules will be specifically designed for DEFI, NFT, TOKENIZATION, and GAME DEFI.
              </p>
              <div className="section__content-cta">
                <div className="easy__cta">
                  <div className="easy__cta-single">
                    <div className="content">
                      <h4>NFT Collection Builder</h4>
                      <p>Available soon</p>
                    </div>
                  </div>
                  <div className="easy__cta-single easy__cta-single-alt">
                    <div className="content">
                      <h4>More things</h4>
                      <p>Available soon</p>
                    </div>
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

export default EasyThree;
