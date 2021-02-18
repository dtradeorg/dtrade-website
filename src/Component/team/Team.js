import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';

function Team() {
  const [isClicked, setClicked] = useState(false);
  return (
  <section>  
    <Container fluid className='team-start'>
      <Container>
        <Row className='text-center justify-content-center'>
          <Col>
            <h2 className='title'>
              <img src='../assets/images/Team/dtrade.png' alt='dtrade' className='dtrade-logo' />
              Founding Friends
            </h2>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className='text-center justify-content-center'>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-3.png' alt='nikodem-grzesiak-strategy' />
            <h3>Nikodem Grzesiak</h3>
            <p>
              <span>Theoretical Physicist @ IonQ</span>
              <span>Research Assistant @ CERN</span>
              <span>Masters in Physics @ UPenn</span>
              <span>B.A. in Physics @ UPenn</span>
            </p>

          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar.png' alt='yameen-malik-scientist' />
            <h3>Yameen Malik</h3>
            <p>
              <span>R&D Engineer @ Symantec</span>
              <span>Chief Scientist @ Providus</span>
              <span>ML Engineer @ Sofy.ai</span>
              <span>B.S. in Computer Science @ NUCES</span>
            </p>

          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/rabeel.png' alt='rabeel-jawaid-founder' />
            <h3>Rabeel Jawaid</h3>
            <p>
              <span>Research Assistant @ Gorte & Vohs Lab</span>
              <span>Masters in Systems Eng. @ UPenn</span>
              <span>B.S.E. in Electrical Eng. @ UPenn</span>
              <span>B.A. in Physics @ UPenn</span>
            </p>

          </Col>
        </Row>
        <Row className='text-center justify-content-center mt-md-5'>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-4.png' alt='dillion-chen-advisor' />
            <h3>Dillon Chen</h3>
            <p>
              <span>Founder @ Commonwealth Labs</span>
              <span>Venture Fellow @ Rough Draft Ventures</span>
              <span>Investor @ Turing Capital</span>
              <span>Finance @ Wharton</span>
            </p>

          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-5.png' alt='syed-mehdi-swe' />
            <h3>Syed Mehdi</h3>
            <p>
              <span>Lead SWE @ Seed Labs</span>
              <span>Engineering Lead @ Sofy.ai</span>
              <span>Masters in Computer Science @ NUCES</span>
              <span>B.S. in Computer Science @ NUCES</span>
            </p>

          </Col>
          <Col md={4} className='team-desc'>
            <img src='../assets/images/Team/Avatar-1.png' alt='drew-stone-advisor' />
            <h3>Drew Stone</h3>
            <p>
              <span>Founder @ Edgeware</span>
              <span>Founder @ Commonwealth Labs</span>
              <span>Masters in Math @ UPenn</span>
              <span>B.S.E in Networks Eng. @ UPenn</span>
            </p>

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
            <p>
              <span>BD @ Seed Labs</span>
              <span>Consultant @ Teamup</span>
              <span>Engineering @ Etihad Airways</span>
              <span>B. Eng in Mechatronics @ NUST</span>
            </p>

          </Col>
          <Col md={4} className={isClicked ? 'team-desc cactive' : 'team-desc cdactive'}>
            <img src='../assets/images/Team/amman.png' alt='dillion-chen-advisor' />
            <h3>Amman Pasha</h3>
            <p>
              <span>SWE @ Seed Labs</span>
              <span>Contractual SWE @ Technolectuals</span>
              <span>SWE @ Urwasoft</span>
              <span>B.S. in Computer Science @ UIT</span>
            </p>
          </Col>
          <Col md={4} className={isClicked ? 'team-desc cactive' : 'team-desc cdactive'}>
            <img src='../assets/images/Team/zabi_mohebzada.png' alt='syed-mehdi-swe' />
            <h3>Zabi Mohebzada</h3>
            <p>
              <span>Founder @ Seed Labs</span>
              <span>Partner @ Providus</span>
              <span>BD @ Enterprise</span>
              <span>B.S. in Biology @ UWO</span>
              </p>
          </Col>
        </Row>
      </Container>
    </Container>
  </section>
  );
}

export default Team;
