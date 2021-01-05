import React, { useState, useLayoutEffect } from "react";
import { Link, Route, useLocation } from "react-router-dom";
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
import Job from "./job/Job";
import Footer from "../footer/Footer";
import "./careers.css";
const sample_job_data = {
  Engineering: [
    {
      jobTitle: "Full-Stack Engineer",
      type: "Remote",
      location: "Worldwide",
      learnMore: "full-stack-engineer",
      responsibilities: [
        "Implement dTrade Exchange v2 smart contracts and tests",
        "Design and implement peripheral mechanisms to the dTrade protocol",
      ],
      requirements: [
        "2+ years of professional experience in software engineering",
        "Proficiency with JavaScript (preferably Typescript), React and Node.js",
        "Familiarity with Rust, Solidity, and Web3 stack is a plus",
      ],
      benefits: [
        "Stock options",
        "Comprehensive health insurance",
        "Take a vacation when you need it",
        "Regular team outings",
      ],
    },
  ],
  Marketing: [
    {
      jobTitle: "Community Lead",
      location: "Worldwide",
      type: "Remote",
      learnMore: "community-lead",
      responsibilities: [
        "Spearhead community strategy, development and growth",
        "Deep technical understanding of dTrade’s mechanisms",
        "Create content and partnerships",
        "Develop new ways of engaging with our community",
        "Attend and often speak at virtual and in-person conferences",
      ],
      requirements: [
        "Experience with business and technical writing",
        "Ability to thrive in an environment of continuous change and complexity",
        "Sense of humor",
      ],
      benefits: [
        "Stock options",
        "Comprehensive health insurance",
        "Take a vacation when you need it",
        "Regular team outings",
      ],
    },
  ],
};
function Careers({ match }) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [activeTab, setActiveTab] = useState("Engineering");
  return (
    <React.Fragment>
      <Container fluid className="bg">
        <Row className="padding">
          <Col className="text-left col-2">
            <a rel="nofollow" href="/">
              <img
                src="../assets/images/Navbar/Union.svg"
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
                src="../assets/images/Navbar/dUSD.svg"
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
                src="../assets/images/Navbar/dUSD-1.svg"
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
                src="../assets/images/Navbar/dUSD-2.svg"
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
                src="../assets/images/Navbar/dUSD-3.svg"
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
                src="../assets/images/Navbar/dUSD-4.svg"
                alt="logo"
                className="img-fluid social-link-margin-1"
              />
            </a>
          </Col>
        </Row>
      </Container>
      <Route path="/careers" exact>
        <div className="wrapper">
          <section className="join-sec">
            <Container>
              <div className="row">
                <Col sm={12}>
                  <div className="content-row">
                    <h1 className="title">Join Us</h1>
                    <p>
                      Join us in building the first decentralized exchange for
                      synthetic asset, options and perpetuals trading on
                      Polkadot
                    </p>
                  </div>
                  <div className="job-box-row">
                    <h2 className="stitle">Available Positions</h2>
                    <Nav className="openings-tab">
                      {Object.entries(sample_job_data).map(
                        ([objKey, value]) => {
                          return (
                            value.length > 0 && (
                              <NavItem key={objKey}>
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
                        }
                      )}
                    </Nav>
                    <TabContent>
                      <TabPane active={true}>
                        <ul>
                          {sample_job_data[activeTab]?.map((item) => {
                            return (
                              <li key={item.learnMore}>
                                <h6 className="st">{item.jobTitle}</h6>
                                <span className="loc">{item.location}</span>
                                <Link
                                  className="clink"
                                  to={`${match.url}/${item.learnMore}`}
                                  title="Learn More"
                                >
                                  Learn More
                                </Link>
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
      </Route>
      {Object.entries(sample_job_data).map(([_, value]) => {
        return value.map((item) => {
          return (
            <Route
              exact
              path={`${match.path}/${item.learnMore}`}
              render={() => <Job {...item} />}
              key={item.learnMore}
            />
          );
        });
      })}
      <Footer />
    </React.Fragment>
  );
}

export default Careers;
