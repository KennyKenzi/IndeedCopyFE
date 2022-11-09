import React, {useContext, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainContext from './component/MainBody/MainState'
import MainState from './component/MainBody/MainState';
import Navbar from './component/Navbar/Navbar'
import NavbarSearch from './component/Navbar/NavbarSearch';
import NavTest from './component/Navbar/NavTest';
import Tab from './component/Tab/Tab'
import MainBody from './component/MainBody/MainContainer'
import TabState from './component/Tab/TabState';



import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/App.css';





const App =()=> {

  // const mainContext = useContext(MainContext)
  // // const {}=  mainContext

  // useEffect=(()=>{
  //   console.log(mainContext)
  // },[])

    return (

     <Router>
        <div>
              <MainState>
              <TabState>

                <Navbar/>
                <hr className='app__navbar-hr-nogap'/>
                <NavbarSearch/>
                <hr className='app__navbar-hr-thickgap'/>

                <Tab/>              
              
              <MainBody/>
            
              <hr/>
              <div className='text-center'>
                End of page
              </div>
              
              </TabState>
              </MainState>
        </div>
      </Router>

    )

}

export default App

