import React, {useContext} from 'react';
import { MainContext } from '../MainBody/MainState';
import logo from '../../indeed-color-codes.svg'






const Navbar =()=> {

    const mainContext = useContext(MainContext)
    const {toggleClicked}=  mainContext

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-white app__navbar">
                <div className="container-fluid">
                <div className='app__navbar-logospace'>
                    <img className="navbar-brand"src={logo} alt="Logo pic" href="#"></img>
                </div>


                <div className="app__navbar-smallscreen ms-auto">
                    <ul className="navbar-nav nav__linkz_2" >
                        <li className="nav-item"> 
                            <a className="nav-link" href='#messages'><i className="bi bi-chat-left-text-fill "></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#notification'><i className="bi bi-bell-fill"></i></a>
                        </li>
                    </ul>
                </div> 

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleClicked} >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse pt-1" id="navbarNav">
                    <div className='nav__1'> 
                        <ul className="navbar-nav nav__linkz_1">
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
                    <div className='ms-auto nav__2'>
                        <ul className="navbar-nav nav__linkz_2" >
                            <li className="nav-item"> 
                                <a className="nav-link" href='#messages'><i className="bi bi-chat-left-text-fill "></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#notification'><i className="bi bi-bell-fill"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text-extra" href='#profile'><i className="bi bi-person-fill"></i></a>
                            </li>
                            <span className="nav-link nav-text-extra" style={{fontSize:"15px", padding: "0"}}>|</span>
                            <li className="nav-item last_link"> 
                                <a className="nav-link nav-text-extra" href='#notification'>Employers/PostJob</a>
                            </li>
                            
                        </ul>
                    </div>   
                    <div className='edited_nav__2'>
                        <ul className="navbar-nav nav__linkz_1" >
                            <li className="nav-item"> 
                                <a className="nav-link" href='#messages'>Messages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#notification'>Notification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-text-extra" href='#profile'>Profile</a>
                            </li>
                            <li className="nav-item last_link"> 
                                <a className="nav-link nav-text-extra" href='#notification'>Employers/PostJob</a>
                            </li>
                            
                        </ul>
                    </div>             
                </div>
                
</div>
            </nav>

            
        );
    }
 
export default Navbar;