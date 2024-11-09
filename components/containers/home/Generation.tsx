import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/tools-thumb-two.png";

const Generation = () => {
  return (
    <section className="section gen pb-0" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-5 col-xxl-5">
            <div className="section__content">
              <h2 className="title title-animation">
                AI-Powered Custom Smart Contract Generator
              </h2>
              <p>
                RalphBuilder simplifies smart contract creation and correction on Alephium using advanced AI.
                Generate precise RALPH contracts effortlessly, with built-in error detection and correction.
                Tailored for developers and businesses, RalphBuilder ensures seamless, efficient blockchain integration.
              </p>
              <div className="section__content-cta">
                <Link href="/contract" className="btn btn--primary">
                  Try our POC now!
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-6 offset-xxl-1">
            <div className="gen__thumb">
              <div className="reveal-img parallax-img">
                <Image src={Thumb} alt="Image" className="unset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Generation;
