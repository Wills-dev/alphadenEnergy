import "./Services.css";
import "../Home.css";
import Link from "next/link";
import ContactUs from "@components/ContactUs";

const page = () => {
  return (
    <div>
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Services</h1>
            <h5>
              <Link href="/">Home</Link>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>{" "}
              Services
            </h5>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="values-ctn">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="value-wrapper">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Maintenance</h3>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="value-wrapper">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Residental Service</h3>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="value-wrapper">
                <div className="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Commercial Service</h3>
                  <p>
                    inappropriate behavior is often laughed off as “boys will be
                    boys,” women face higher conduct standards especially in the
                    workplace. That’s why.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-ctn">
        <div className="container">
          <div className="service-wrapper">
            <div className="title-ctn">
              <h1>Our Offered Services to you</h1>
              <p>
                We provide the best of services while considering the eco-system
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-two">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Automotive Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-one">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Industrial Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-three">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Automotive Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-four">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Construction & Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-five">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Automotive Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-six">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Construction & Engineering</h1>
                    <p>
                      inappropriate behavior is often laughed off as “boys will
                      be boys,” women face higher conduct women face higher
                      conduct.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default page;
