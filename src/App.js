import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar'
import NavbarSearch from './component/Navbar/NavbarSearch';
import NavTest from './component/Navbar/NavTest';
import './App.scss';





export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <hr className='app__navbar-nogap'/>
          <div class="app__navbar-smallscreen_searchbar" >
              <NavbarSearch></NavbarSearch>
          </div>
          {/* <div class="app__navbar-smallscreen_searchbar" >
              <NavTest></NavTest>
          </div> */}
      </div>

    )
  }
}


