import React from 'react';
import { Animated } from 'react-animated-css';
import '../Specs.css';

function Options() {
  return (
    <div className='col-11'>
      <Animated animationIn='fadeIn' animationOut='fadeOut'>
        <div className='row align-items-center'>
          <div className='col text-center tablet-container p-0'>
            <img className='img-fluid tablet' src='./assets/images/Specs/options.png' alt='stakr-app-exchange-screen' />
          </div>
          <div className='col-5 pl-5'>
            <h1 className='reward-heading'>On-Chain Options</h1>
            <p className='reward-text'>
              Built using decentralized order books to allow for price discovery. We will launch with DOT options in
              2021 Q2-Q3.
            </p>
            <a
              href='https://medium.com/dtrade/draft-on-chain-options-4b4b2197ec07'
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              <img
                src='../assets/images/Navbar/medium-white.svg'
                alt='logo'
                className='img-fluid social-link-margin-2'
              />
            </a>

            <a href='https://github.com/dtradeorg/options-exchange' target='_blank' rel='nofollow noopener noreferrer'>
              <img
                src='../assets/images/Navbar/github-white.svg'
                alt='logo'
                className='img-fluid social-link-margin-2'
              />
            </a>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default Options;
