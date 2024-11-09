import Image from "next/image";
import Link from "next/link";
import mail from "@/public/images/contact/mail.png";
import location from "@/public/images/contact/location.png";

const ContactSection = () => {
  return (
    <section className="section m-contact fade-wrapper">
      <div className="container">
        <div className="row gaper section pt-0">
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <Link href="mailto:contact@ralphbuilder.org">
                    contact@ralphbuilder.org
                  </Link>
                </p>
                <p>
                  <Link href="mailto:business@ralphbuilder.org">
                    business@ralphbuilder.org
                  </Link>
                </p>
                <p>
                  <Link href="mailto:support@ralphbuilder.org">
                    support@ralphbuilder.org
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="m-contact__single fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" priority />
              </div>
              <div className="content">
                <h3>Telegram</h3>
                <p>
                  <Link href="https://t.me/RalphBuilder" target="_blank">
                    t.me/RalphBuilder
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
