import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container">
        <div className="contact-ctn">
          <div className="title-ctn">
            <p>HAVE QUESTION?</p>
            <h1>CONTACT US</h1>
          </div>
          <div className="contactWrapperForm">
            <div className="row">
              <div className="col-md-5 col-sm-4 col-12">
                <div className="addressCtn">
                  <div>
                    <h5>Address:</h5>
                    <p>184 Main Collins Street</p>
                  </div>
                  <div>
                    <h5>Phone:</h5>
                    <p>(226) 446 9371</p>
                  </div>
                  <div>
                    <h5>Email:</h5>
                    <p>confer@gmail.com</p>
                  </div>
                  <div>
                    <h5>Website:</h5>
                    <p>www.confer.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-8 col-12">
                <form className="contactFormCtn">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 col-12">
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <input type="email" placeholder="E-Mail" />
                    </div>
                    <div className="col-md-6 col-12">
                      <input type="number" placeholder="Your Number" />
                    </div>
                  </div>
                  <div className="row">
                    <div className=" col-12">
                      <textarea
                        type="text"
                        placeholder="Your Message"
                        rows={2}
                      />
                    </div>
                  </div>

                  <button type="submit">
                    SEND MESSAGE{" "}
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
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-wrap">
        <div className="container">
          <div className="footerWrap">
            <div className="row">
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4>About us</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore dolore magna
                    aliqua.
                  </p>
                  <p>
                    +234(0)700 257 4233 <br /> +234(0)700 ALPHADEN
                  </p>
                  <p>
                    {" "}
                    Copyright © 2023 Alphaden Energy and Oilfield Limited. All
                    rights reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4> Office</h4>
                  <p>
                    #302, 42, Geojejungang-ro,15-Gil, Geoje-si,
                    Kyeongsangnam-do, Republic of Korea
                  </p>

                  <p>info@alphadenenergy.com</p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4>Follow Us</h4>
                  <p>Let us be social</p>
                  <div className="footerSocial">
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/linkedin.svg"
                        width={20}
                        height={12}
                        alt="alphaden linkedin"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/instagram.svg"
                        width={20}
                        height={12}
                        alt="alphaden intagram"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/twitter.svg"
                        width={20}
                        height={12}
                        alt="Alphaden twitter"
                      />
                    </Link>
                    <Link href="twitter.com/">
                      <Image
                        src="/assets/icons/facebook.svg"
                        width={20}
                        height={12}
                        alt="Alphaden facebook"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
