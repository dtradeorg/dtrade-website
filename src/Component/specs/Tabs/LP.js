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
          <div className='col-5 pl-3'>
            <h3 className='reward-heading' style={{ fontSize: '45px' }}>
              Insurance & Liquidity Mining
            </h3>
            <p className='reward-text'>
              Earn liquidity mining rewards by writing options or by providing liquidity to the insurance fund
            </p>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default LP;
