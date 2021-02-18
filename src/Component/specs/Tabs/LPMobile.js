import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function LPMobile() {
  return (
    <Animated animationIn='fadeIn' animationOut='fadeOut'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 justify-content-center text-center tab-sec-mobile'>
          <h3 className='reward-heading text-center'>Insurance & Liquidity Mining</h3>
          <p className='reward-text text-center'>
            Earn liquidity mining rewards by writing options or by providing liquidity to the insurance fund
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
