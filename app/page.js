"use client";

import Link from "next/link";
import "./Home.css";
import ContactUs from "@components/ContactUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="main-header">
        <div className="overlay"></div>
        <div className="bg-container">
          <h6>DON’T LOOK FURTHER, HERE IS THE KEY</h6>
          <h1>Welcome to Alphaden Energy</h1>
          <p>
            We provide Engineering, Procurement & Contractual Support,
            Construction, Installation (EPCI), Oilfield Services, Upstream
            Support Services, Asset Integrity Solutions, Quality Control, NDT
            And Inspection Services, Systems Integration, Process Control &
            Automation, Marine Support Services, as well as Midstream
            development services.
          </p>
          <Link href="/about-us">
            Learn more{" "}
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
            </svg>
          </Link>
        </div>
      </header>
      <section className="container">
        <div className="values-ctn">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
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
                  <h3>Mission Statement</h3>
                  <p>
                    Constantly adopting efficiency dynamics in empowering people
                    to deliver excellence with innovation in the pursuit of
                    perfection.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
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
                  <h3>Our Vision</h3>
                  <p>
                    To be the dominant EPCI service provider from Africa,
                    delivering capital projects globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
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
                  <h3>Strategy</h3>
                  <p>
                    Our Strategy seeks to maintain us as one of the global
                    leaders in the oil and gas industry with a focus….
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
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
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                </div>
                <div className="value-content">
                  <h3>Core Values</h3>
                  <p>P-eople First, I-ntegrity, I-nnovation and E-fficiency</p>
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
      <section className="project-ctn">
        <div className="container">
          <div className="title-ctn">
            <h1>Latest Finished Projects</h1>
            <p>
              We provide the best of services while considering the eco-system
            </p>
          </div>
          <div className="row">
            <div className="col-md-8  col-12">
              <div className="project project-one"></div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-two"></div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-three"></div>
            </div>
            <div className="col-md-8  col-12">
              <div className="project project-four"></div>
            </div>
            <div className="col-md-8  col-12">
              <div className="project project-five"></div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-six"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={"partnerCtn"}>
          <div className="title-ctn">
            <h1>CLIENTS</h1>
            <p>OUR OFFICIAL CLIENTS WHO ARE PLEASED WITH OUR SERVICES</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_1.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_2.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_3.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_4.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_5.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_6.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_7.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 m-0 p-0">
              <div className={"partner"}>
                <Image
                  src="/assets/images/logo_8.png"
                  width={150}
                  height={150}
                  alt="Alphaden group"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}
