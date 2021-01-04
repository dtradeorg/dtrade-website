import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Job.css";
const Job = ({ jobTitle, type, location }) => {
  return (
    <div className="wrapper">
      <section className="job-details">
        <div className="container">
          <Row>
            <Col sm={12}>
              <div className="top-cont">
                <h1 className="bt">{jobTitle}</h1>
                <span className="loc">{type}</span>
                <p>
                  We're seeking a Backend Developer having proficiency in
                  Node.js to join our team. We encourage people who can dive
                  headlong into situations to get things done, set their own
                  direction and feel pride about what they create.
                </p>
                <p>
                  Your primary focus will be the development of all server-side
                  logic, definition and maintenance of the central database, and
                  ensuring high performance and responsiveness to requests from
                  the frontend.
                </p>
              </div>
              <div className="job-ds">
                <h2 className="st">Desired Skills & Experience</h2>
                <ul>
                  <li>2+ years of professional backend experience</li>
                  <li>
                    Proficiency with JavaScript and in-depth knowledge of
                    Node.js and its Express framework
                  </li>
                  <li>
                    Understanding the nature of asynchronous programming and its
                    quirks and workarounds
                  </li>
                  <li>
                    Good understanding of server-side templating languages such
                    as Jade and EJS
                  </li>
                  <li>Good understanding of server-side CSS preprocessors</li>
                  <li>
                    Basic understanding of front-end technologies, such as
                    HTML5, and CSS3
                  </li>
                  <li>
                    User authentication and authorization between multiple
                    systems, servers, and environments
                  </li>
                  <li>
                    Understanding fundamental design principles behind a
                    scalable application
                  </li>
                  <li>
                    Understanding differences between multiple delivery
                    platforms, such as mobile vs. desktop, and optimizing output
                    to match the specific platform
                  </li>
                  <li>
                    Creating database schemas that represent and support
                    business processes
                  </li>
                  <li>
                    Proficient understanding of code versioning tools, such as
                    Git
                  </li>
                  <li>
                    Excellent oral and written communication will be a plus
                  </li>
                  <li>Must be a team player!</li>
                </ul>
                <h2 className="st">Benefits & Perks</h2>
                <ul>
                  <li>Competitive Base Salary + Stock Options + Equity</li>
                  <li>Comprehensive healthcare benefits</li>
                </ul>
                <h2 className="st">Submit Your Application</h2>
                <form>
                  <div className="form-group">
                    <label for="name">
                      Full name<span className="rd">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      Email<span className="rd">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your email address"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label for="phone">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Your phone number"
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label for="url">LinkedIn URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="url"
                      placeholder="Your LinkedIn profile link"
                      name="url"
                    />
                  </div>
                  <div className="form-group">
                    <label for="gurl">GitHub URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="gurl"
                      placeholder="Your GitHub profile link"
                      name="gurl"
                    />
                  </div>
                  <div className="form-group">
                    <label for="purl">Portfolio URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="purl"
                      placeholder="Your Portfolio link"
                      name="purl"
                    />
                  </div>
                  <div className="form-group">
                    <label for="turl">Twitter URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="turl"
                      placeholder="Your Twitter profile link"
                      name="turl"
                    />
                  </div>
                  <div className="form-group">
                    <label for="wurl">Other Website</label>
                    <input
                      type="url"
                      className="form-control"
                      id="wurl"
                      placeholder="Other links"
                      name="wurl"
                    />
                  </div>

                  <div className="form-group cfile">
                    <label className="sp" for="wurl">
                      Your Resume / CV<span className="rd">*</span>
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      multiple=""
                      required=""
                    />
                    <label className="btn-file" for="file-upload">
                      <img src="../../assets/images/pin.svg" alt="icon" />{" "}
                      Resume / CV
                    </label>
                    <div className="file-name" id="file-upload-filename"></div>
                  </div>

                  <div className="form-group">
                    <label for="coverl">
                      Please include a brief cover letter below
                      <span className="rd">*</span>
                    </label>
                    <textarea
                      className="form-control ctext"
                      id="coverl"
                      name="coverl"
                      rows="4"
                      cols="50"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="form-btn">
                    Send Application
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
export default Job;
