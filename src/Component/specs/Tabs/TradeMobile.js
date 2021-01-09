import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function OptionsMobile() {
  return (
    <Animated animationIn='fadeIn' animationOut='fadeOut'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 justify-content-center text-center tab-sec-mobile'>
          <h1 className='reward-heading text-center'>On-Chain Options</h1>
          <p className='reward-text text-center'>
            Built using decentralized order books to allow for price discovery. We will launch with DOT options in 2021
            Q2-Q3.
          </p>

          <img className='img-fluid tablet-trade' src='./assets/images/Specs/options.png' alt=''></img>
        </div>
      </div>
    </Animated>
  );
}

export default OptionsMobile;
