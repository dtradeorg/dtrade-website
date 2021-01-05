import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';

function Team() {
  const [isClicked, setClicked] = useState(false);
  return (
    <Container fluid className='team-start'>
      <Container>
        <Row className='text-center justify-content-center'>
          <Col>
            <h3 className='title'>
              <img src='../assets/images/Team/dtrade.png' alt='dtrade' className='dtrade-logo' />
              Founding Friends
            </h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='text-center justify-content-center'>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar.png' alt='yameen-malik-scientist' />
            <h3>Yameen Malik</h3>
            <h4>R&D Engineer @ Symantec</h4>
            <h4>Chief Scientist @ Providus</h4>
            <h4>ML Engineer @ Sofy.ai</h4>
            <h4>B.S. in Computer Science @ NUCES</h4>
          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-1.png' alt='drew-stone-advisor' />
            <h3>Drew Stone</h3>
            <h4>Founder @ Edgeware</h4>
            <h4>Founder @ Commonwealth Labs</h4>
            <h4>Masters in Math @ UPenn</h4>
            <h4>B.S.E in Networks Eng. @ UPenn</h4>
          </Col>

          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/rabeel.png' alt='rabeel-jawaid-founder' />
            <h3>Rabeel Jawaid</h3>
            <h4>Research Assistant @ Gorte & Vohs Lab</h4>
            <h4>Masters in Systems Eng. @ UPenn</h4>
            <h4>B.S.E. in Electrical Eng. @ UPenn</h4>
            <h4>B.A. in Physics @ UPenn</h4>
          </Col>
        </Row>
        <Row className='text-center justify-content-center mt-md-5'>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-3.png' alt='nikodem-grzesiak-strategy' />
            <h3>Nikodem Grzesiak</h3>
            <h4>Theoretical Physicist @ IonQ</h4>
            <h4>Research Assistant @ CERN</h4>
            <h4>Masters in Physics @ UPenn</h4>
            <h4>B.A. in Physics @ UPenn</h4>
          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-4.png' alt='dillion-chen-advisor' />
            <h3>Dillon Chen</h3>
            <h4>Founder @ Commonwealth Labs</h4>
            <h4>Venture Fellow @ Rough Draft Ventures</h4>
            <h4>Investor @ Turing Capital</h4>
            <h4>Finance @ Wharton</h4>
          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-5.png' alt='syed-mehdi-swe' />
            <h3>Syed Mehdi</h3>
            <h4>Lead SWE @ Seed Labs</h4>
            <h4>Engineering Lead @ Sofy.ai</h4>
            <h4>Masters in Computer Science @ NUCES</h4>
            <h4>B.S. in Computer Science @ NUCES</h4>
          </Col>
        </Row>
        <Row
          className={
            isClicked
              ? 'text-center justify-content-center mt-md-5 last-row r-active'
              : 'text-center justify-content-center mt-md-5 last-row'
          }
        >
          <Col md={12} className='show-hide'>
            <span
              className={isClicked ? 'cactive' : ''}
              onClick={() => {
                setClicked(!isClicked);
              }}
            >
              <img src='../assets/images/arrow-up-down.svg' alt='nikodem-grzesiak-strategy' />
            </span>
          </Col>
          <Col md={4} className={isClicked ? 'team-desc cactive' : 'team-desc cdactive'}>
            <img src='../assets/images/Team/hamza.png' alt='nikodem-grzesiak-strategy' />
            <h3>Humza Khan</h3>
            <h4>BD @ Seed Labs</h4>
            <h4>Consultant @ Teamup</h4>
            <h4>Engineering @ Etihad Airways</h4>
            <h4>B. Eng in Mechatronics @ NUST</h4>
          </Col>
          <Col md={4} className={isClicked ? 'team-desc cactive' : 'team-desc cdactive'}>
            <img src='../assets/images/Team/amman.png' alt='dillion-chen-advisor' />
            <h3>Amman Pasha</h3>
            <h4>SWE @ Seed Labs</h4>
            <h4>Contractual SWE @ Technolectuals</h4>
            <h4>SWE @ Urwasoft</h4>
            <h4>B.S. in Computer Science @ UIT</h4>
          </Col>
          <Col md={4} className={isClicked ? 'team-desc cactive' : 'team-desc cdactive'}>
            <img src='../assets/images/Team/zabi_mohebzada.png' alt='syed-mehdi-swe' />
            <h3>Zabi Mohebzada</h3>
            <h4>Founder @ Seed Labs</h4>
            <h4>Partner @ Providus</h4>
            <h4>BD @ Enterprise</h4>
            <h4>B.S. in Biology @ UWO</h4>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Team;
