import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Header.css';

function Header() {
  const [focus, setFocus] = useState(false);

  return (
    <div className='conatiner-fluid header'>
      <p className='join-banner'>
        Join us in reimagining finance. &nbsp;
        <a href='/careers' target='_blank' rel='noopener noreferrer' className='blue-anchor'>
          <br className='mobile-show' />
          View open positions
          <img src='./assets/images/Header/chevron right.svg' alt='' className='chevright' />
        </a>
      </p>

      <div className='container text-center hero'>
        <h1>
          Synthetic Asset Trading <br className='mobile-switch' /> on Polkadot
        </h1>
        {/* <div className='sub-heading'>
          Polkadot Derivatives & Margin Trading<sup className='sup-1'>1</sup>
        </div> */}

        <div className='row justify-content-center'>
          <form
            action='https://dtrade.us2.list-manage.com/subscribe/post?u=e55c79f9e31d5d705bf64c8cc&amp;id=829a3e917a'
            method='post'
            target='_blank'
          >
            <InputGroup>
              <FormControl
                placeholder='name@email.com'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                className='inputemail'
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={{
                  border: focus ? '1px solid #69ABE8' : '1px solid rgba(120, 120, 120, 0.2)',
                  borderRight: focus ? 'none' : 'none',
                  transition: '0.5s',
                  backgroundColor: focus ? '#fafafa' : '#fafafa'
                }}
                name='EMAIL'
                id='mce-EMAIL'
              />
              <InputGroup.Append>
                <Button
                  id='basic-addon2'
                  className='input-group-text'
                  type='submit'
                  style={{
                    border: focus ? '1px solid #69ABE8' : '1px solid rgba(120, 120, 120, 0.2)',

                    transition: '0.5s',
                    backgroundColor: focus ? '#fafafa' : '#fafafa'
                  }}
                >
                  Get Updates
                  <img src='./assets/images/Header/chevron right.svg' alt='' className=' arrow-ml-small' />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </div>
        <div className='row justify-content-center d-md-none'>
          <InputGroup.Append>
            <Button
              id='launch-btn'
              className='input-group-text'
              type='submit'
              style={{
                border: 'none',
                transition: '0.5s',
                backgroundColor: '#fff'
              }}
            >
              Launch Test App
              <img src='./assets/images/Header/arrow-top-right.svg' alt='' className='arrow-top-right' />
            </Button>
          </InputGroup.Append>
        </div>
        <div className='row justify-content-center d-md-none'>
          <a href='http://stakr.dtrade.org/' target='_blank' rel='noopener noreferrer' className='ml-4 link'>
            Launch App
            <img className='ml-arrow mb-1' src='./assets/images/arrow-top-right.svg' alt='arrow'></img>
          </a>
          <a href='https://medium.com/dtrade' target='_blank' rel='noopener noreferrer'>
            <img src='./assets/images/Navbar/dUSD.svg' alt='logo' className='img-fluid social-link-margin' />
          </a>
          <a href='https://twitter.com/dtradeorg' target='_blank' rel='noopener noreferrer'>
            <img src='./assets/images/Navbar/dUSD-1.svg' alt='logo' className='img-fluid social-link-margin' />
          </a>
          <a href='https://github.com/dtradeorg' target='_blank' rel='noopener noreferrer'>
            <img src='./assets/images/Navbar/dUSD-2.svg' alt='logo' className='img-fluid social-link-margin' />
          </a>
          <a href='https://discord.gg/hyS8E7BPT6' target='_blank' rel='noopener noreferrer'>
            <img src='./assets/images/Navbar/dUSD-3.svg' alt='logo' className='img-fluid social-link-margin' />
          </a>
          <a href='https://commonwealth.im/dtrade' target='_blank' rel='noopener noreferrer'>
            <img src='./assets/images/Navbar/dUSD-4.svg' alt='logo' className='img-fluid social-link-margin' />
          </a>
        </div>

        <img className='map img-fluid' src='./assets/images/Header/map2.svg' alt='map' />
      </div>
    </div>
  );
}

export default Header;
