import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function LP() {
  return (
    <div className='col-11'>
      <Animated animationIn='fadeIn' animationOut='fadeOut'>
        <div className='row align-items-center'>
          <div className='col text-center tablet-container p-0'>
            <img
              className='img-fluid tablet'
              src='./assets/images/Specs/liquid.png'
              alt='stakr-app-liquidity-protocol-screen'
            />
          </div>
          <div className='col-5 pl-5'>
            <h1 className='reward-heading' style={{ fontSize: '45px' }}>
              Provide Liquidity
            </h1>
            <p className='reward-text'>
              Earn liquidity pool rewards by providing liquidity to DET and synthetic asset pools.
            </p>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default LP;
