import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar'
import NavbarSearch from './component/Navbar/NavbarSearch';
import NavTest from './component/Navbar/NavTest';
import Tab from './component/Tab/Tab'
import MainBody from './component/MainBody/MainContainer'

import "bootstrap-icons/font/bootstrap-icons.css";
import './App.scss';
import MainState from './component/MainBody/MainState';




export default class App extends Component {
  render() {
    return (
      <div>
        
            <Navbar/>
            <hr className='app__navbar-hr-nogap'/>
            <NavbarSearch/>
            <hr className='app__navbar-hr-thickgap'/>
            <Tab/>
          <MainState>
            <MainBody></MainBody>
          </MainState>
      </div>

    )
  }
}



