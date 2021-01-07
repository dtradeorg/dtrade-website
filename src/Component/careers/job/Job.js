import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
//import './Job.css';
const Job = ({ jobTitle, type, responsibilities, requirements, benefits }) => {
  const location = useLocation();
  if (location.pathname.indexOf('careers/') > 0) require('./Job.css');
  return (
    <div className='wrapper'>
      <section className='job-details'>
        <div className='container'>
          {/* Remove this padding bottom later */}
          <Row style={{ paddingBottom: '60px' }}>
            <Col sm={12}>
              <div className='top-cont'>
                <h1 className='bt'>{jobTitle}</h1>
                <span className='loc'>{type}</span>
              </div>
              <div className='job-ds'>
                <h2 className='st'>About dTrade</h2>
                <ul>
                  <li>We're building the first decentralized exchange for options and perpetual trading on Polkadot</li>
                  <li>
                    dTrade is founded by an ex-Symentec engineer, and four friends from UPenn with backgrounds in CS,
                    Physics and Economics
                  </li>
                </ul>
                <h2 className='st'>Overview of Initial Responsibilities</h2>
                <ul>
                  {responsibilities.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                <h2 className='st'>What you will need</h2>
                <ul>
                  {requirements.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                <h2 className='st'>Benefits & Perks</h2>
                <ul>
                  {benefits.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
                {/* <h2 className="st">Submit Your Application</h2>
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
                </form> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};
export default Job;
