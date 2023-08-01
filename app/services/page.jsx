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
                    <h1>EPCI</h1>
                    <ul>
                      <li>ENGINEERING</li>
                      <li>PROCUREMENT</li>
                      <li>CONSTRUCTION</li>
                      <li>INSTALLATION AND COMMISSIONING</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-one">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Upstream</h1>
                    <ul>
                      <li>OILFIELD SERVICES</li>
                      <li> WELL CONSTRUCTION</li>
                      <li> PRODUCTION AND OPTIMIZATION</li>
                      <li>DRILLING SERVICES</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-three">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Marine Services</h1>
                    <ul>
                      <li> SUBSEA SUPPORT</li>
                      <li>MARINE EQUIPMENT SUPPLY</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="service-content">
                  <div className="service-img-ctn img-four">
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <h1>Midstream</h1>
                    <ul>
                      <li>GAS INFRASTRUCTURE, CONSTRUCTION AND MAINTENANCE</li>
                      <li>POWER GENERATION AND DISTRIBUTION</li>
                    </ul>
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
