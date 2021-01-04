import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Upcoming.css';

function Upcoming() {
  return (
    <Container fluid className='upcoming-section'>
      <Container className='upcoming-container'>
        <Row className='text-center upcoming-heading-row'>
          <Col md={12}>
            <h3>Upcoming Releases</h3>
            <h4>Powered by dTrade, built on Polkadot.</h4>
          </Col>
        </Row>
      </Container>
      <Container className='cards-container'>
        <Row className='justify-content-center card-desktop'>
          <Col sm={12} className='card-col margin-right-card'>
            <Card>
              <Card.Img variant='top' src='../assets/images/Upcoming/1.jpg' alt='dtrade-exchange' />
              <Card.Body>
                <Card.Title className='CardTitle'>dtrade.exchange</Card.Title>
                <Card.Text className='CardText'>
                  Gain on-chian exposure to <br /> synthetic assets on Polkadot <br /> with zero slippage.
                </Card.Text>
                <Card.Text className='card-social my-auto'>
                  <a href='https://medium.com/dtrade' target='_blank' rel='noopener noreferrer'>
                    <img src='./assets/images/Navbar/dUSD.svg' alt='logo' className='img-fluid' />
                  </a>
                  <a href='https://github.com/dtradeorg' target='_blank' rel='noopener noreferrer'>
                    <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                  </a>
                  <span>Beta launch 1/2021</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} className='card-col margin-right-card'>
            <Card>
              <Card.Img variant='top' src='../assets/images/Upcoming/3.svg' alt='decentralised-futures-graph' />
              <Card.Body>
                <Card.Title className='CardTitle'>Decentralized Futures</Card.Title>
                <Card.Text className='CardText'>
                  Trade futures on Polkadot with leverage, low gas fees, and no slippage using an AMM algorithm.
                </Card.Text>
                <Card.Text className='card-social-disabled my-auto'>
                  <a rel='nofollow' href='#!'>
                    <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                  </a>
                  <span>Beta Launch 2021 Q1</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} className='card-col'>
            <Card>
              <Card.Img variant='top' src='../assets/images/Upcoming/2.svg' alt='derisk-hedge-graph' />
              <Card.Body>
                <Card.Title className='CardTitle'>Derisk</Card.Title>
                <Card.Text className='CardText'>
                  Hedge risk in decentralized finance using on-chain non-custodial options on Polkadot.
                </Card.Text>
                <Card.Text className='card-social-disabled my-auto'>
                  <a rel='nofollow' href='#!'>
                    <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                  </a>
                  <span>Announcing Soon</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <OwlCarousel className='Card-Carousel-Mobile owl-theme' margin={24} nav item={1} autoWidth={true} center={true}>
          <Card className='item'>
            <Card.Img variant='top' src='../assets/images/Upcoming/1.jpg' alt='dtrade-exchange' />
            <Card.Body>
              <Card.Title className='CardTitle'>dtrade.exchange</Card.Title>
              <Card.Text className='CardText'>
                Gain on-chian exposure to <br /> synthetic assets on Polkadot <br /> with zero slippage.
              </Card.Text>
              <Card.Text className='card-social my-auto'>
                <a href='https://medium.com/dtrade' target='_blank' rel='noopener noreferrer'>
                  <img src='./assets/images/Navbar/dUSD.svg' alt='logo' className='img-fluid' />
                </a>
                <a href='https://github.com/dtradeorg' target='_blank' rel='noopener noreferrer'>
                  <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                </a>
                <span>Beta launch 1/2021</span>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='item'>
            <Card.Img variant='top' src='../assets/images/Upcoming/3.svg' alt='decentralised-futures-graph' />
            <Card.Body>
              <Card.Title className='CardTitle'>Decentralized Futures</Card.Title>
              <Card.Text className='CardText'>
                Trade futures on Polkadot with leverage, low gas fees, and no slippage using an AMM algorithm.
              </Card.Text>
              <Card.Text className='card-social-disabled my-auto'>
                <a rel='nofollow' href='#!'>
                  <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                </a>
                <span>Beta Launch 1/2021</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className='item'>
            <Card.Img variant='top' src='../assets/images/Upcoming/2.svg' alt='derisk-hedge-graph' />
            <Card.Body>
              <Card.Title className='CardTitle'>Derisk</Card.Title>
              <Card.Text className='CardText'>
                Hedge risk in decentralized finance using on-chain non-custodial options on Polkadot.
              </Card.Text>
              <Card.Text className='card-social-disabled my-auto'>
                <a rel='nofollow' href='#!'>
                  <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid' />
                </a>
                <span>Announcing Soon</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </OwlCarousel>
      </Container>
    </Container>
  );
}

export default Upcoming;
