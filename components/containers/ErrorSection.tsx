import Link from "next/link";

const ErrorSection = () => {
  return (
    <section className="section error">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center mb-0">
              <h2 className="title title-animation mt-12">
                Oops! Page Not Found
              </h2>
              <div className="section__cta">
                <Link href="/" className="btn btn--primary">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
