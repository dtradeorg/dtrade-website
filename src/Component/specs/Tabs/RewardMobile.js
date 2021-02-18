import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function FuturesMobile() {
  return (
    <Animated animationIn='fadeIn' animationOut='fadeOut'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 justify-content-center text-center tab-sec-mobile'>
          <h3 className='text-center reward-heading'>Perpetuals</h3>
          <p className='reward-text text-center'>
            Trade synthetic futures on Polkadot with up to 12x leverage and support for multiple parachains' assets as
            collateral*
          </p>

          {/* <h3 className='apy-info text-center'>
            {' '}
            <img alt='i' src='./assets/images/Specs/info.svg' className='img-fluid mr-2 mb-1' /> Current APY: 67.87%
          </h3> */}

          <img className='img-fluid tablet' src='./assets/images/Specs/futures.png' alt='stakr-app-stake-screen'></img>
        </div>
      </div>
    </Animated>
  );
}

export default FuturesMobile;
