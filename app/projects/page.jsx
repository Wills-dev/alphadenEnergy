import "../Home.css";
import Link from "next/link";
import ContactUs from "@components/ContactUs";

const page = () => {
  return (
    <div>
      <section className="main-title-ctn">
        <div className="container">
          <div className="main-title">
            <h1>Projects</h1>
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
              Projects
            </h5>
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
              <div className="project project-one">
                <div className="overlay-project"></div>
                <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-two">
                <div className="overlay-project"></div> <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-three">
                <div className="overlay-project"></div> <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
              </div>
            </div>
            <div className="col-md-8  col-12">
              <div className="project project-four">
                <div className="overlay-project"></div> <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
              </div>
            </div>
            <div className="col-md-8  col-12">
              <div className="project project-five">
                <div className="overlay-project"></div> <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="project project-six">
                <div className="overlay-project"></div> <h1>Kwali Project</h1>
                <p>Built 13,000 KVA grip madi </p>
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
