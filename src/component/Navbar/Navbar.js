
import React, { Component, useState } from 'react';
import logo from '../../indeed-color-codes.svg'
import './Navbar.css';







const Navbar =()=> {


     const [toggleHambugerMenu, setToggleHamburgerMenu] = useState(false)


        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-white app__navbar">
                
                <div className='app__navbar-logospace'>
                    <img class="navbar-brand"src={logo} alt="Logo pic" href="#"></img>
                </div>

                
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="#jobs">Find Jobs</a>
                            {/* <a class="nav-link" href="#jobs">Find Jobs <span class="sr-only">(current)</span></a> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#reviews">Company Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#salaries">Find Salaries</a>
                        </li>
                    </ul> 
                </div>
                <div class="navbar-nav mr-auto nav-item app__navbar-navend" >
                   <a class="nav-link" href='#messages'><i class="bi bi-chat-left-text-fill "></i></a>
                   <a class="nav-link" href='#notification'><i class="bi bi-bell-fill"></i></a>
                   <a class="nav-link nav-text-extra" href='#profile'><i class="bi bi-person-fill"></i></a>
                    <span class="nav-link nav-text-extra"> <div/> </span>
                   
                   <a class="nav-link nav-text-extra" href='#notification'>Employers/PostJob</a>
                    
                </div>

                <div className='app__navbar-smallscreen'>
                    <button class="navbar-toggler"
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarText" 
                            aria-controls="navbarText" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            style={{border: 'none', color: '#302F2F'}}
                            onClick={()=>setToggleHamburgerMenu(true)}>
                        <span class="navbar-toggler-icon"></span>
                        
                    </button>

                    {toggleHambugerMenu && (
                        <div className='app__navbar=smallscreenlinks'>
                            <ul class="">
                                <li class="">
                                <a class="" href="#jobs">Find Jobs</a>
                                </li>
                                <li class="">
                                    <a class="" href="#reviews">Company Reviews</a>
                                </li>
                                <li class="">
                                    <a class="" href="#salaries">Find Salaries</a>
                                </li>
                            </ul> 
                            <button type="button" class="btn-close" aria-label="Close"
                            onClick={()=>setToggleHamburgerMenu(false)}></button>
                        </div>
                    )} 
                  
                </div>   

                

            </nav>

            
        );
    }
 
export default Navbar;