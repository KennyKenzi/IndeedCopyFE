import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar'
import NavbarSearch from './component/Navbar/NavbarSearch';
import NavTest from './component/Navbar/NavTest';
import Tab from './component/Tab/Tab'
import MainBody from './component/MainBody/MainContainer'

import "bootstrap-icons/font/bootstrap-icons.css";
import './App.scss';




export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <hr className='app__navbar-hr-nogap'/>
          <NavbarSearch></NavbarSearch>
          <hr className='app__navbar-hr-thickgap'/>
          <Tab></Tab>
          <MainBody></MainBody>
      </div>

    )
  }
}



