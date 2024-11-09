import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const AboutCraft = () => {
  return (
    <section className="section pb-0 craft">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Our vision is simple:</span>
              <h2 className="title title-animation">
                make development on Alephium easy by offering a powerful and intuitive tool.
              </h2>
              <p>
                For more detailed information about RalphBuilder, including our features, tokenomics, 
                and future plans, please refer to our comprehensive documentation available here.
              </p>
              <div className="section__content-cta">
                <Link href="https://docs.ralphbuilder.org/" className="btn btn--primary">
                  RalphBuilder Docs here
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default AboutCraft;
