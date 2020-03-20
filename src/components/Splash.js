import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import sample from '../sample.mp4';

export default class Splash extends Component {
  render() {
    return (
      <HomeWrapper>
      <div className="pr-5 ml-0">
      <h1>Live</h1>
      <h1>Natural,</h1>
      <h1>Buy</h1>
      <h1>Natural</h1>
      <h1>Products</h1>
      </div>
        <Link to='/home'>
          <img src={logo} width="500" height="500" alt='homelogo' className='logo-brand pl-5' />
        </Link>
        <video className='videoTag pl-5 mr-0' autoPlay loop muted width="250" height="250">
          <source src={sample} type='video/mp4'/>
        </video>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.nav`
background-color: var(--plainWhite);
display: flex;
align-items: center;
justify-content: center;
padding-top: 3rem;
font-family: 'Shadows Into Light', cursive !important;
font-size: 5.4rem !important;
`

