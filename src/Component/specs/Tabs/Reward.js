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
          <div className='col-5 pl-5'>
            <h1 className='reward-heading'>Perpetuals</h1>
            <p className='reward-text'>
              Trade synthetic futures on Polkadot with up to 12x leverage and support for multiple parachains' assets as
              collateral*
            </p>
            {/* 
            <h3 className='apy-info'>
              {' '}
              <img alt='i' src='./assets/images/Specs/info.svg' className='img-fluid mr-2 mb-md-1' /> Current APY:
              67.87%
            </h3> */}
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default Futures;
