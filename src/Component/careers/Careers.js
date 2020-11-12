import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./careers.css";

function Careers() {
  return (
    <>

        <Container fluid className="bg"> 

            <Row className="padding">
                <Col  className="text-left col-2">
                    <a href="/">
                    <img
                        src="./assets/images/Navbar/Union.svg"
                        alt="logo"
                        className="img-fluid logo-career"
                    />
                    </a>
                </Col>
                <Col  className="text-right p-0">
                <a
            href="https://medium.com/dtrade"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            <img
              src="./assets/images/Navbar/dUSD-4.svg"
              alt="logo"
              className="img-fluid social-link-margin-1"
            />
          </a>
                </Col>
            </Row>


            <Container className="title">
                <Row className="text-center">
                <Col md={12}>
                    <h3>Software Engineer</h3>
                </Col>
                </Row>
                <Row className="text-center">
                <Col md={12}>
                    <h4>Remote</h4>
                </Col>
                </Row>
            </Container>

            <Container className="desc">
                <Row className='text-center'>
                    <Col md={12}>
                        <h3>
                            We're  seeking a Backend Developer having proficiency in Node.js to join our team. 
                            We encourage people who can dive headlong into situations to get things done, set their 
                            own direction and feel pride about what they create. <br/>
                            Your primary focus will be the development of all server-side logic, definition and maintenance
                            of the central database, and ensuring high performance and responsiveness to requests from the frontend.  <br/> <br/>
                            <a href="mailto:hi@dtrade.org">Drop you Resume Here.</a> 
                        </h3>
                    </Col>
                </Row>
            </Container>

            <Container className="list">
                <Row className='text-center'>
                    <Col md={12}>
                        <h3>
                            Desired Skills & Experience
                        </h3>
                    </Col>
                </Row>
                <ul className="p-0">
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        2+ years of professional backend experience
                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Proficiency with JavaScript and in-depth knowledge of Node.js and its Express framework                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Understanding the nature of asynchronous programming and its quirks and workarounds                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Good understanding of server-side templating languages such as Jade and EJS                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Good understanding of server-side CSS preprocessors                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Basic understanding of front-end technologies, such as HTML5, and CSS3                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        User authentication and authorization between multiple systems, servers, and environments                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Understanding fundamental design principles behind a scalable application                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Understanding differences between multiple delivery platforms, such as mobile vs. desktop, and
                            <span className="pl-4"> optimizing output to match the specific platform</span>                   </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Creating database schemas that represent and support business processes                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Proficient understanding of code versioning tools, such as Git                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Excellent oral and written communication will be a plus                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Must be a team player!                    </li>
                </ul>
            </Container>


            <Container className="list">
                <Row className='text-center'>
                    <Col md={12}>
                        <h3>
                            Benefits & Perks                        
                        </h3>
                    </Col>
                </Row>
                <ul className="p-0">
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Competitive Base Salary + Stock Options + Equity
                    </li>
                    <li>
                        <img src="./assets/images/dot.png" alt="." className="mr-3"/>
                        Comprehensive healthcare benefits                    
                    </li>
                    
                </ul>
            </Container>

        </Container>

    </>
  );
}

export default Careers;
