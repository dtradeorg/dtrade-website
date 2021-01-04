import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "react-bootstrap";
import Footer from "../footer/Footer";
import "./careers.css";
const sample_job_data = {
  Engineering: [
    { jobTitle: "DevOps Engineer", location: "Worldwide", learnMore: "" },
    { jobTitle: "Full Stack Developer", location: "Worldwide", learnMore: "" },
    {
      jobTitle: "Senior Backend Engineer",
      location: "Worldwide",
      learnMore: "",
    },
  ],
  Community: [
    { jobTitle: "Test Job 1", location: "Worldwide", learnMore: "" },
    { jobTitle: "Test Job 2", location: "Worldwide", learnMore: "" },
  ],
};
function Careers() {
  const [activeTab, setActiveTab] = useState("Engineering");
  return (
    <React.Fragment>
      <Container fluid className="bg">
        <Row className="padding">
          <Col className="text-left col-2">
            <a rel="nofollow" href="/">
              <img
                src="./assets/images/Navbar/Union.svg"
                alt="logo"
                className="img-fluid logo-career"
              />
            </a>
          </Col>
          <Col className="text-right p-0">
            <a
              href="https://medium.com/dtrade"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="./assets/images/Navbar/dUSD.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
            <a
              href="https://twitter.com/dtradeorg"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="./assets/images/Navbar/dUSD-1.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
            <a
              href="https://github.com/dtradeorg"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="./assets/images/Navbar/dUSD-2.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
            <a
              href="https://discord.gg/hyS8E7BPT6"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="./assets/images/Navbar/dUSD-3.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
            <a
              href="https://commonwealth.im/dtrade"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="./assets/images/Navbar/dUSD-4.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="wrapper">
        <section className="join-sec">
          <Container>
            <div className="row">
              <Col sm={12}>
                <div className="content-row">
                  <h1 className="title">Join Us</h1>
                  <p>
                    We're seeking a Backend Developer having proficiency in
                    Node.js to join our team. We encourage people who can dive
                    headlong into situations to get things done, set their own
                    direction and feel pride about what they create.
                  </p>
                  <p>
                    Your primary focus will be the development of all
                    server-side logic, definition and maintenance of the central
                    database, and ensuring high performance and responsiveness
                    to requests from the frontend.
                  </p>
                </div>
                <div className="job-box-row">
                  <h2 className="stitle">Available Positions</h2>
                  <Nav className="openings-tab">
                    {Object.entries(sample_job_data).map(([objKey, value]) => {
                      return (
                        value.length > 0 && (
                          <NavItem>
                            <NavLink
                              active={activeTab === objKey ? true : false}
                              onClick={() => {
                                setActiveTab(objKey);
                              }}
                            >
                              {objKey}
                              <span>{value.length}</span>
                            </NavLink>
                          </NavItem>
                        )
                      );
                    })}
                  </Nav>
                  <TabContent>
                    <TabPane active={true}>
                      <ul>
                        {sample_job_data[activeTab]?.map((item) => {
                          return (
                            <li>
                              <h6 className="st">{item.jobTitle}</h6>
                              <span className="loc">{item.location}</span>
                              <a
                                className="clink"
                                href={item.learnMore}
                                title="Learn More"
                              >
                                Learn More
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Careers;
