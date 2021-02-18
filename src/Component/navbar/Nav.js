import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
function NavBar() {
  return (
    <header>
    <Navbar className=' ' expand='md'>
      <Nav>
        <img src='./assets/images/Navbar/Union.svg' alt='logo' className='img-fluid logo' />
        <img src='./assets/images/Navbar/dtrade.svg' alt='logo' className='ml-2 tag-line' />
      </Nav>
      <Nav className='ml-md-auto mr-md-auto'>
        <h3 className='d-md-block'>Launching Q2 2021</h3>
      </Nav>
      <Nav style={{ display: 'block' }} className='d-none d-md-block'>
        <a href='http://stakr.dtrade.org/' target='_blank' className='ml-4 link' title="Launch Test App">
          Launch Test App
          <img className='ml-arrow mb-1' src='./assets/images/arrow-top-right.svg' alt='arrow'></img>
        </a>
        <a href='https://medium.com/dtrade' target='_blank'>
          <img src='./assets/images/Navbar/dUSD.svg' alt='logo' className='img-fluid social-link-margin' />
        </a>
        <a href='https://twitter.com/dtradeorg' target='_blank'>
          <img src='./assets/images/Navbar/dUSD-1.svg' alt='logo' className='img-fluid social-link-margin' />
        </a>
        <a href='https://github.com/dtradeorg' target='_blank'>
          <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid social-link-margin' />
        </a>
        <a href='https://discord.gg/hyS8E7BPT6' target='_blank'>
          <img src='./assets/images/Navbar/dUSD-3.svg' alt='logo' className='img-fluid social-link-margin' />
        </a>
        <a href='https://commonwealth.im/dtrade' target='_blank'>
          <img src='./assets/images/Navbar/dUSD-4.svg' alt='logo' className='img-fluid social-link-margin' />
        </a>
      </Nav>
    </Navbar>
    </header>
  );
}

export default NavBar;
