import React, {useContext, useEffect} from 'react';
import MainContext from './component/MainBody/MainState'
import MainState from './component/MainBody/MainState';
import Navbar from './component/Navbar/Navbar'
import NavbarSearch from './component/Navbar/NavbarSearch';
import NavTest from './component/Navbar/NavTest';
import Tab from './component/Tab/Tab'
import MainBody from './component/MainBody/MainContainer'



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

     
      <div>
            <MainState>
            <Navbar/>
            <hr className='app__navbar-hr-nogap'/>
            <NavbarSearch/>
            <hr className='app__navbar-hr-thickgap'/>
            <Tab/>
              <MainBody></MainBody>
            <hr/>
            <div className='text-center'>
              End of page
            
            </div>
          </MainState>
      </div>

    )

}

export default App

