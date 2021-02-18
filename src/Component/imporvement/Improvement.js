import React from 'react';
import './Improvement.css';

function Improvement() {
  return (
  <section>
    <div id='improvement-div'>
      <h3>Community run and self-improving.</h3>
      <p>
        DET holders can vote on protocol upgrades, contributor grants, and new asset integrations. &nbsp;
        <br className='mobile-switch' />
        We are working with Commonwealth Labs to integrate:
      </p>

      <div className='container pt-3'>
        <div className='row text-center justify-content-center'>
          <img
            src='/assets/images/Improvement/Timeline.svg'
            alt='roadmap-of-integration'
            className='img-fluid mt-5 mb-5 d-none d-md-block'
          />
          <img
            src='/assets/images/Improvement/timelineMob.svg'
            alt='roadmap-of-integration'
            className='img-fluid mt-4 mb-4 d-md-none'
          />
        </div>

        <div className='row text-center mt-4'>
          <div className='col'>
            <a
              href='https://commonwealth.im/dtrade'
              target='_blank'
              title='Join the conversation'
              rel='noopener nofollow noreferrer'
              className='link-community'
            >
              Join the conversation
              <img src='/assets/images/right-blue.svg' alt='arrow' className='mb-1 ml-arrow'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>  
  );
}

export default Improvement;
