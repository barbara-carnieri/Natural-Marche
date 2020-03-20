import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

console.log(logo);


export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm bg-warning navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} width="50" height="60" alt='homelogo' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/home' className='nav-link'>
            Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto' >
          <ButtonContainer>
          <span className='mr-1 mb-0'>
            <i className='fa fa-shopping-cart' />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainYellow);
.nav-link{
  color: var(--mainWhite);
  font-size: 1.3rem;
  text-transform: capitalize;
}
`

