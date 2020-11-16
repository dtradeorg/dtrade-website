import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';

function Team() {
    return (
        <Container fluid className="team-start">
            <Container>
                <Row className="text-center justify-content-center">
                    <Col>
                        <h3 className="title">
                            <img src="../assets/images/Team/dtrade.png" alt="dtrade" />
                            Founding Friends
                        </h3> 
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="text-center justify-content-center">
                    <Col md={4} className="team-desc">
                        <img src="../assets/images/Team/Avatar.png" alt="avatar.png"/> 
                        <h3>Yameen Mallik</h3>
                        <h4>R&D Engineer @ Symantec</h4>
                        <h4>Chief Scientist @ Providus</h4>             
                        <h4>ML Engineer @ Sofy.ai</h4>             
                        <h4>B.S. in Computer Science @ NUCES</h4>             
                    </Col>
                    <Col md={4} className="team-desc">
                    
                    <img src="../assets/images/Team/Avatar-1.png" alt="avatar.png"/> 
                        <h3>Drew Stone</h3>      
                        <h4>Founder @ Edgeware</h4>             
                        <h4>Founder @ Commonwealth Labs</h4>             
                        <h4>Masters in Math @ UPenn</h4>             
                        <h4>B.S.E in Networks Eng. @ UPenn</h4>    
                    </Col>

                    <Col md={4} className="team-desc">
                    <img src="../assets/images/Team/Avatar-2.png" alt="avatar.png"/> 
                        <h3>Rabeel Jawaid</h3>      
                        <h4>Research Assistant @ Gorte & Vohs Lab</h4>             
                        <h4>Masters in Systems Eng. @ UPenn</h4>             
                        <h4>B.S.E. in Electrical Eng. @ UPenn</h4>             
                        <h4>B.A. in Physics @ UPenn</h4>    
                    </Col>
                </Row>
                <Row className="text-center justify-content-center mt-md-5">
                    <Col md={4} className="team-desc">
                    <img src="../assets/images/Team/Avatar-3.png" alt="avatar.png"/> 
                        <h3>Nikodem Grzesiak</h3>      
                        <h4>Theoretical Physicist @ IonQ</h4>             
                        <h4>Research Assistant @ CERN</h4>             
                        <h4>Masters in Physics @ UPenn</h4>             
                        <h4>B.A. in Physics @ UPenn</h4>    
                    </Col>
                    <Col md={4} className="team-desc">
                    <img src="../assets/images/Team/Avatar-4.png" alt="avatar.png"/> 
                        <h3>Dillon Chen</h3>      
                        <h4>Founder @ Commonwealth Labs</h4>             
                        <h4>Venture Fellow @ Rough Draft Ventures</h4>             
                        <h4>Investor @ Turing Capital</h4>             
                        <h4>Finance @ Wharton</h4>    
                    </Col>
                    <Col md={4} className="team-desc">
                    <img src="../assets/images/Team/Avatar-5.png" alt="avatar.png"/> 
                        <h3>Syed Mehdi</h3>      
                        <h4>Lead SWE @ Seedcode</h4>             
                        <h4>Engineering Lead @ Sofy.ai</h4>             
                        <h4>Masters in Computer Science @ NUCES</h4>             
                        <h4>B.S. in Computer Science @ NUCES</h4>    
                    </Col>
                </Row>
                <Row className="text-center justify-content-center down-arrow">
                    <img src="../assets/images/Team/chevron-down-small.svg" alt="down"/> 
                </Row>
            </Container>
        </Container>
    )
}

export default Team
