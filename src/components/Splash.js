import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';

export default class Splash extends Component {
  render() {
    return (
      <HomeWrapper>
        <Link to='/home'>
          <img src={logo} width="500" height="500" alt='homelogo' className='logo-brand' />
        </Link>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.nav`
background-color: var(--mainWhite);
display: flex;
align-items: center;
justify-content: center;
padding-top: 3rem;
`

