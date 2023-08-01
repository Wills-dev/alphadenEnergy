import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-wrap">
        <div className="container">
          <div className="footerWrap">
            <div className="row">
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4>Corporate Office</h4>
                  <p>
                    Plot 23 Furo Ezimora Street, Off Adewunmi Adebimpe Drive,
                    Off Marwa Roundabout, Lekki Phase 1, Lagos State, Nigeria.
                  </p>
                  <p>
                    +234(0)700 257 4233 <br /> +234(0)700 ALPHADEN
                  </p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4> Operations</h4>
                  <p>
                    No 36 Trans Amadi Layout, Port Harcourt, Rivers State,
                    Nigeria.
                  </p>

                  <p>info@alphadenenergy.com</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4> South Korea Office</h4>
                  <p>
                    #302, 42, Geojejungang-ro,15-Gil, Geoje-si,
                    Kyeongsangnam-do, Republic of Korea
                  </p>

                  <p>info@alphadenenergy.com</p>
                </div>
              </div>
              <div className=" col-md-4 col-sm-6 col-12">
                <div className="footerCtn">
                  <h4>USA Office</h4>
                  <p>5048 Nicollet Avenue, Minneapolis Mn. 55419, USA</p>

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
                  <p className="mt-4">
                    {" "}
                    Copyright © 2023 Alphaden Energy and Oilfield Limited. All
                    rights reserved.
                  </p>
                  <span className="privacy-ctn">
                    <Link href="/privacy">Privacy policy</Link>
                  </span>
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
