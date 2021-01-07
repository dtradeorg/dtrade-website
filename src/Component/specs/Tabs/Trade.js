import React from 'react';
import { Animated } from 'react-animated-css';
import '../Specs.css';

function Trade() {
  return (
    <div className='col-11'>
      <Animated animationIn='fadeIn' animationOut='fadeOut'>
        <div className='row align-items-center'>
          <div className='col text-center tablet-container p-0'>
            <img className='img-fluid tablet' src='./assets/images/Specs/trade.png' alt='stakr-app-exchange-screen' />
          </div>
          <div className='col-5 pl-5'>
            <h1 className='reward-heading'>Trade</h1>
            <p className='reward-text'>
              Gain access to an array of financial markets, futures and leverage with zero slippage. From anywhere in
              the world.
            </p>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default Trade;
