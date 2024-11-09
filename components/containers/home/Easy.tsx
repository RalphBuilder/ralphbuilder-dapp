import Image from "next/image";
import Link from "next/link";
import Thumb from "@/public/images/easy-thumb.png";

const Easy = () => {
  return (
    <section className="section easy pb-0 position-relative">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="easy__thumb dir-rtl reveal-img d-block parallax-img">
              <Image src={Thumb} alt="Image" className="unset" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-2">
            <div className="section__content">
              <h2 className="title title-animation">
                Smart Contract Coder
              </h2>
              <p>
                The Smart Contract Coder leverages the capabilities of our AI to produce
                high-quality smart contracts based on user input. 
                With a selection of default prompts available,
                users only need to describe their requirements,
                and RalphBuilder will generate the smart contract accordingly.
                This intuitive process eliminates the need for in-depth programming knowledge,
                allowing users to focus on their project goals rather than the complexities of coding.
              </p>
              <div className="section__content-cta">
                <Link href="/contract" className="btn btn--primary">
                  Try our POC now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Easy;
