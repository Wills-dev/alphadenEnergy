"use client";

import "./about-us.css";
import "../Home.css";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import ContactUs from "@components/ContactUs";

const page = () => {
  return (
    <div>
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>About Us</h1>
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
              About Us
            </h5>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h1>About Us Our History Mission & Vision</h1>
                <p>
                  The ‘ALPHA’S DEN’ is a hub of professional and well
                  experienced Alpha’s, championing their fields while
                  collectively making up a provider of fit-for-purpose services
                  to clients across various industries.
                </p>
                <p>
                  An Indigenous company, founded over 2 decades ago yet quite
                  modern as we continue to show that People, Innovation,
                  Integrity & Efficiency values are key towards the success of
                  every project.
                </p>
                <p>
                  We have an unquenchable desire to contribute positively to the
                  development of our natural environment & have stayed true to
                  our name due to our excellence and strategic contrivance in
                  successfully delivering various projects.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-img"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="about-us-main-ctn">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="about-main-imgg"></div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-content">
                <h1>What We Do</h1>
                <p>
                  In the Energy sector, We have carved out a niche for ourselves
                  in providing Engineering, Procurement & Contractual Support,
                  Construction, Installation (EPCI), Oilfield Services, Upstream
                  Support Services, Asset Integrity Solutions, Quality Control,
                  NDT And Inspection Services, Systems Integration, Process
                  Control & Automation, Marine Support Services, as well as
                  Midstream development services.
                </p>
                <p>
                  As an ISO (9001:2008) certified organization, we have taken a
                  unique approach to our Products & Services by oﬀering clients
                  a wide range of options and ensuring projects are delivered on
                  schedule, Within budget and of globally acceptable standards.
                  We design and estimate projects, gaining a detailed
                  understanding of the work scope and critical path. As part of
                  quality planning, speciﬁc inspection and test plans are
                  established, and detailed hazard analysis assessments are
                  completed to maximize safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-ctn">
        <div className="container">
          <div className="title-ctn">
            <h1>Meet Our Expert Members</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img-ctn team-1">
                  <div className="overlay-team"></div>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/facebook.svg"
                      width={20}
                      height={12}
                      alt="Alphaden facebook"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={20}
                      height={12}
                      alt="Alphaden twitter"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={12}
                      alt="alphaden linkedin"
                    />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>Ethel Davis</h5>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img-ctn team-2">
                  <div className="overlay-team"></div>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/facebook.svg"
                      width={20}
                      height={12}
                      alt="Alphaden facebook"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={20}
                      height={12}
                      alt="Alphaden twitter"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={12}
                      alt="alphaden linkedin"
                    />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>Ethel Davis</h5>
                  <p>Managing Director (Sales)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img-ctn team-3">
                  <div className="overlay-team"></div>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/facebook.svg"
                      width={20}
                      height={12}
                      alt="Alphaden facebook"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={20}
                      height={12}
                      alt="Alphaden twitter"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={12}
                      alt="alphaden linkedin"
                    />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>Ethel Davis</h5>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="team-wrapper">
                <div className="team-img-ctn team-4">
                  <div className="overlay-team"></div>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/facebook.svg"
                      width={20}
                      height={12}
                      alt="Alphaden facebook"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/twitter.svg"
                      width={20}
                      height={12}
                      alt="Alphaden twitter"
                    />
                  </Link>
                  <Link className="team-link" href="twitter.com/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={12}
                      alt="alphaden linkedin"
                    />
                  </Link>
                </div>
                <div className="team-content">
                  <h5>Ethel Davis</h5>
                  <p>Managing Director (Sales)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="count-ctn">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-content">
                <div className="count">
                  <div>
                    <h2>
                      {" "}
                      <CountUp
                        end={320}
                        start={0}
                        duration={4}
                        enableScrollSpy={true}
                      />
                      k
                    </h2>
                  </div>
                </div>
                <h6>Project completed</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-content">
                <div className="count">
                  <div>
                    <h2>
                      {" "}
                      <CountUp
                        end={70}
                        start={0}
                        duration={4}
                        enableScrollSpy={true}
                      />
                      k
                    </h2>
                  </div>
                </div>
                <h6>Total Employees</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-content">
                <div className="count">
                  <div>
                    <h2>
                      {" "}
                      <CountUp
                        end={120}
                        start={0}
                        duration={4}
                        enableScrollSpy={true}
                      />
                      k
                    </h2>
                  </div>
                </div>
                <h6>Happy Clients</h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="count-content">
                <div className="count">
                  <div>
                    <h2>
                      {" "}
                      <CountUp
                        end={260}
                        start={0}
                        duration={4}
                        enableScrollSpy={true}
                      />
                      k
                    </h2>
                  </div>
                </div>
                <h6>Tickets Submited</h6>
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
