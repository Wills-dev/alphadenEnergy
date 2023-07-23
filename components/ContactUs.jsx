import "./Footer.css";

const ContactUs = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default ContactUs;
