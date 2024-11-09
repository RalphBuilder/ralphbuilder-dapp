"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import JoinUs from "@/components/containers/JoinUs";
import Logo from "public/images/logo.png";

const Footer = () => {
  const pathname = usePathname();
  const isAboutUsOrServicesRoute =
    pathname === "/about-us" || pathname === "/services";

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`footer-cmn ${isAboutUsOrServicesRoute ? " lilu-foot" : ""}`}
    >
      <div className="container">
        <JoinUs />
        <div className="row">
          <div className="col-12">
            <div className="footer-cmn__inner section ">
              <div className="row  gaper">
                <div className="col-12 col-lg-7 col-xl-8">
                  <div className="footer-cmn__left text-center text-lg-start">
                    <Link href="/" className="logo">
                      <Image src={Logo} alt="Image" width={250} height={125} priority />
                    </Link>
                    <div className="footer__nav-list">
                      <ul className="justify-content-center justify-content-lg-start">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-content text-center text-lg-start">
                <p>
                  Copyright &copy; <span id="copyrightYear">{currentYear}</span>{" "}
                  <Link href="/">RalphBuilder</Link>. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-social justify-content-center justify-content-lg-end">
                <p className="tertiary-text d-none d-lg-block">Follow Us :</p>
                <div className="social">
                  <Link
                    href="https://www.x.com/RalphBuilder"
                    target="_blank"
                    aria-label="share us on twitter"
                    title="twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link
                    href="https://t.me/RalphBuilder"
                    target="_blank"
                    aria-label="look our announcements"
                    title="telegram"
                  >
                    <i className="bi bi-telegram"></i>
                  </Link>
                  <Link
                    href="https://t.me/ralphbuildercommunity"
                    target="_blank"
                    aria-label="speak with the community"
                    title="telegram"
                  >
                    <i className="bi bi-telegram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
