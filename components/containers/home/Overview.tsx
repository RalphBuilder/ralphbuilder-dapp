import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/o-one.png";
import Two from "@/public/images/o-two.png";
import Three from "@/public/images/o-three.png";

const Overview = () => {
  return (
    <section className="section overview-two fade-wrapper pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-center gaper">
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={One} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="#">SIMPLICITY</Link>
                </h4>
                <p className="tertiary-text">
                  Using RalphBuilder, anyone without technical skills can create their own smart contract in just a few minutes, 
                  thanks to the service user-friendly interface.
                </p>
                <div className="section__content-cta">
                  <Link href="#">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="/">SECURITY</Link>
                </h4>
                <p className="tertiary-text">
                  RalphBuilder offers users a secure, ready-to-use solution. Every contract designed with RalphBuilder has successfully 
                  passed the most rigorous audits.
                </p>
                <div className="section__content-cta">
                  <Link href="/">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-9 col-md-6 col-xl-4">
            <div className="overview-two__single text-center fade-top">
              <div className="thumb">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="content">
                <h4>
                  <Link href="/">LOW COST</Link>
                </h4>
                <p className="tertiary-text">
                  By automating the smart contract creation process, you can save on costly blockchain developer services.
                </p>
                <div className="section__content-cta">
                  <Link href="/">
                    <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
