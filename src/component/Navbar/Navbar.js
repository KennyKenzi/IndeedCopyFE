
import React, { Component, useState } from 'react';
import logo from '../../indeed-color-codes.svg'
import '../../css/Navbar.css'






const Navbar =()=> {


     const [toggleHambugerMenu, setToggleHamburgerMenu] = useState(false)
   


        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-white app__navbar">
                
                <div className='app__navbar-logospace'>
                    <img className="navbar-brand"src={logo} alt="Logo pic" href="#"></img>
                </div>

                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto nav-start">
                        <li className="nav-item active">
                        <a className="nav-link" href="#jobs">Find Jobs</a>
                            {/* <a class="nav-link" href="#jobs">Find Jobs <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Company Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#salaries">Find Salaries</a>
                        </li>
                    </ul> 
                </div>
                <div className="navbar-nav mr-auto nav-item app__navbar-navend" >
                   <a className="nav-link" href='#messages'><i className="bi bi-chat-left-text-fill "></i></a>
                   <a className="nav-link" href='#notification'><i className="bi bi-bell-fill"></i></a>
                   <a className="nav-link nav-text-extra" href='#profile'><i className="bi bi-person-fill"></i></a>
                    <span className="nav-link nav-text-extra"> <div/> </span>
                   
                   <a className="nav-link nav-text-extra" href='#notification'>Employers/PostJob</a>
                    
                </div>

                <div className='app__navbar-smallscreen'>
                    <button className="navbar-toggler ctoggle"
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarText" 
                            aria-controls="navbarText" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            style={{border: 'none', color: '#302F2F'}}
                            onClick={()=>setToggleHamburgerMenu(true)}>
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>

                    {toggleHambugerMenu && (
                        <div className='app__navbar=smallscreenlinks'>
                            <ul className="">
                                <li className="">
                                <a className="" href="#jobs">Find Jobs</a>
                                </li>
                                <li className="">
                                    <a className="" href="#reviews">Company Reviews</a>
                                </li>
                                <li className="">
                                    <a className="" href="#salaries">Find Salaries</a>
                                </li>
                            </ul> 
                            <button type="button" className="btn-close" aria-label="Close"
                            onClick={()=>setToggleHamburgerMenu(false)}></button>
                        </div>
                    )} 
                  
                </div>   

                

            </nav>

            
        );
    }
 
export default Navbar;