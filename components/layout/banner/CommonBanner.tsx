"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CommonBanner = ({ title }: any) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const deviceWidth = window.innerWidth;

    if (deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cmn-banner",
          start: "top top",
          end: "+=20%",
          scrub: 1,
          pin: false,
        },
      });

      tl.to(".cmn-banner .thumb-left img", {
        y: "190px",
        duration: 2,
      });
    }
  }, []);

  return (
    <section className="cmn-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xxl-8">
            <div className="cmn-banner__content text-center">
              <h2 className="light-title fw-7 text-white title-animation">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
