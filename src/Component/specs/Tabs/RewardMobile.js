import React from 'react';
import '../Specs.css';
import { Animated } from 'react-animated-css';

function RewardMobile() {
  return (
    <Animated animationIn='fadeIn' animationOut='fadeOut'>
      <div className='row align-items-center justify-content-center'>
        <div className='col-12 justify-content-center text-center tab-sec-mobile'>
          <h1 className='text-center reward-heading'>Earn rewards.</h1>
          <p className='reward-text text-center'>
            Earn rewards and collect your share of trading fees by staking and providing collateral to the dtrade
            protocol.
          </p>

          {/* <h3 className='apy-info text-center'>
            {' '}
            <img alt='i' src='./assets/images/Specs/info.svg' className='img-fluid mr-2 mb-1' /> Current APY: 67.87%
          </h3> */}

          <img className='img-fluid tablet' src='./assets/images/Specs/stake.png' alt='stakr-app-stake-screen'></img>
        </div>
      </div>
    </Animated>
  );
}

export default RewardMobile;
