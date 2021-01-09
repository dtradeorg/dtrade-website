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
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default Options;
