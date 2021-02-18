import React from 'react';
import './Feature.css';
export default function Features() {
  return (
  <section>  
    <div className='feature-div'>
      <h4>Trading, reimagined.</h4>
      <h5>Trade from anywhere. No sign up needed.</h5>

      <div className='row feature-row '>
        <div className='col-12 col feature-col '>
          <h6 className='feature-heading'>Accessible</h6>
          <p className='feature-body'>
            Gain on-chain exposure to hundreds <br className='mobile-switch' /> of assets from around the world.
          </p>
        </div>

        <div className='col-12 col feature-col '>
          <h6 className='feature-heading'>Low Fees</h6>
          <p className='feature-body'>
            Pay less than 20 cents in GAS fees <br className='mobile-switch' /> on every transaction.
          </p>
        </div>

        <div className='col-12 col feature-col max'>
          <h6 className='feature-heading'>Lowest Slippage</h6>
          <p className='feature-body'>
            Zero slippage on the spot market. Less than 0.5% slippage on 100k+ leveraged positions.
          </p>
        </div>
      </div>

      <div className='row text-left  imp-disc'>
        <div className='info mt-5'>
          <a  href='#disclosure-div' className='to-disc-link left' title="View Important Disclosures">
            <img src='./assets/images/info1.svg' alt='i' className='info-img mr-2 mb-1'></img>
            View Important Disclosures
            {/* <hr/> */}
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
