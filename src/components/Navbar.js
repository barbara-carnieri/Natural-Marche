import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {ButtonContainer} from './Button'

console.log(logo);


export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-warning navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={logo} width="50" height="60" alt='homelogo' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
            Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto' >
          <ButtonContainer>
          <span className='mr-2'>
            <i className='fa fa-shopping-cart' />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    )
  }
}

