import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function Futures() {
  return (
    <div className='col-11'>
      <Animated animationIn='fadeIn' animationOut='fadeIn'>
        <div className='row align-items-center'>
          <div className='col text-center tablet-container p-0'>
            <img className='img-fluid tablet' src='./assets/images/Specs/futures.png' alt='stakr-app-stake-screen' />
          </div>
          <div className='col-5 pl-3'>
            <h3 className='reward-heading'>Perpetuals</h3>
            <p className='reward-text'>
              Trade synthetic futures on Polkadot with up to 12x leverage and support for multiple parachains' assets as
              collateral*
            </p>
            <a href='https://github.com/dtradeorg' target='_blank'  title="github">
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

export default Futures;
