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
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women, our
                  behavior on the job is beyond reproach. inappropriate behavior
                  is often laughed.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod temp or incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="about-main-img"></div>
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
