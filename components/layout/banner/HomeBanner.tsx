import Image from "next/image";
import Link from "next/link";
import bannerThumb from "@/public/images/banner/banner-two-thumb.png";

const HomeBanner = () => {
  return (
    <section className="banner-two">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="banner-two__content">
              <h1 className="title-animation">
                Create your <span>smart contract</span> on <span>Alephium</span>
              </h1>
              <p className="primary-text">
                Discover RalphBuilder: the AI that simplifies the creation and correction of smart contracts on Alephium.
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
      <div className="banner-two__thumb">
        <Image src={bannerThumb} alt="Image" priority />
      </div>
    </section>
  );
};

export default HomeBanner;
