"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Alphaga from "@/public/images/partner/alphaga.png";
import Alphpad from "@/public/images/partner/alphpad.png";
import AlephiumNameDomain from "@/public/images/partner/ans.png";
import Vitalblock from "@/public/images/partner/vitalblock.png";
import Doh from "@/public/images/partner/doh.png";
import Memeverse from "@/public/images/partner/memeverse.png";
import Moonshot from "@/public/images/partner/moonshot.png";
import Link from "next/link";

const Partner = () => {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/index";

  return (
    <div className={"partner section" + (isHomeRoute ? " pb-0" : " ")}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="section__header text-center">
              <h2 className="title sub-title-two mt-0 title-animation">
                Our Partner&apos;s
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView="auto"
              spaceBetween={24}
              speed={2000}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              className="partner__slider"
            >
              <SwiperSlide>
                <Link href="https://app.alphpad.com/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Alphpad} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://moonshotboxes.com/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Moonshot} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://vitalblock.org/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Vitalblock} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://alphaga.app/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Alphaga} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://alephium.domains/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={AlephiumNameDomain} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://doh.money/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Doh} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://memefun.cc/" target="_blank" rel="noopener noreferrer">
                  <div className="partner__slider-single">
                    <Image src={Memeverse} alt="Image" priority />
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
