import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function LPMobile() {
  return (
    <Animated animationIn='fadeIn' animationOut='fadeOut'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 justify-content-center text-center tab-sec-mobile'>
          <h1 className='reward-heading text-center'>Provide Liquidity</h1>
          <p className='reward-text text-center'>
            Earn liquidity pool rewards by providing liquidity to DET and synthetic asset pools.
          </p>

          <img
            className='img-fluid tablet-lp'
            src='./assets/images/Specs/liquid.png'
            alt='stakr-app-liquidity-protocol-screen'
          ></img>
        </div>
      </div>
    </Animated>
  );
}

export default LPMobile;
