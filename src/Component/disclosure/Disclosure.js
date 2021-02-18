import React from 'react';
import './Disclosure.css';

export default function Disclosure() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
  <section>
    <div className='disclosure-div' id='disclosure-div'>
      <div className='container-md disclosure-section'>
          <h3 className='imp-disc'>Important Disclosures:</h3>
        <p className='disclosure-points disclosure-mt'>
            i) All assets on our platform involve a degree of risk and may result in the partial or total loss of your
            investment.
            <br />
            ii) Fees for running on Edgeware cannot be estimated accurately at this time but should be significantly
            less than protocols built on Ethereum. Initially there may be no GAS fees at all.
            <br />
            iii) We round off holdings of fractional shares to the fourth decimal place. We also do not accept synthetic
            dollar purchases of less than $1 dUSD.
            <br />
          {/* <div>iv) The collateralization ratio may change over time.</div> */}
          </p>
          <p className='disclosure-mt disclosure-points'>
            The supported collaterals may change after the parachain auctions, and initially it may only be EDG & DET.
            We intend to add DOT, KSM, and aUSD after the auctions.
          </p>
          <p className='disclosure-mt disclosure-points'>
            dTrade (c) is a decentralized financial platform that aims to provide access to anyone, anywhere wanting to
            trade any market.
            <br />
            Our alpha launch will only have DOT futures and options. Other asset classes will be added through
            decentralized governance.
            <br /> By using this website, you are agreeing to our Terms of Use and Privacy Policy.
          </p>
       

        <hr className='disclosure-hr' />

        <h3 className='disclosure-message'>
          We're building the world's most accessible ecosystem for decentralized finance.
        </h3>

        <div className='disclosure-additional'>
          <a rel='nofollow' href='mailto:hi@dtrade.org' title="Have additional questions?">
            Have additional questions?
            <img src='./assets/images/arrow-blue.svg' alt='arrow' className='img-fluid mb-arrow' />
          </a>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-end'>
        <button className='btn' id='disclosure-totop' onClick={scrollTop}>
          To the top
        </button>
      </div>
    </div>
  </section>
  
  );
}
