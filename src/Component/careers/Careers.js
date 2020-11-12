import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./careers.css";

function Careers() {
  return (
    <>

        <Container fluid className="bg"> 

            <Row>
                <Col className="text-left">
                    <img
                        src="./assets/images/Navbar/Union.svg"
                        alt="logo"
                        className="img-fluid logo-career"
                    />
                </Col>
                <Col className="text-right">
                <a
            href="https://medium.com/dtrade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/images/Navbar/dUSD.svg"
              alt="logo"
              className="img-fluid social-link-margin"
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
              className="img-fluid social-link-margin"
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
              className="img-fluid social-link-margin"
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
              className="img-fluid social-link-margin"
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
              className="img-fluid social-link-margin"
            />
          </a>
                </Col>
            </Row>

        </Container>

    </>
  );
}

export default Careers;
