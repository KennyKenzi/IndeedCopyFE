import React, { Component, useContext } from 'react'
import { MainContext } from '../MainBody/MainState'

const NavbarSearch =()=>{

const mainContext = useContext(MainContext)
const {istoggleClicked} = mainContext





    return (
            <div className = "app__navbarsearch">
                <div className={istoggleClicked?"background__overlay": ""} ></div>
                <form className='app__navbarsearch-inputfield'>
                    <div className="row gy-4">
                        <div className="col-lg">
                            <div className="input-group input-group-lg">
                                <span className="input-group-text" id="inputGroup-sizing-lg-1">What</span>
                                <input type="text" className="app__navbarsearch-inputfield-individual form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Job title, keywords, or company'/>
                            </div>
                        </div>
                        <div className="col-lg">
                        <div className="input-group input-group-lg">
                                <span className="input-group-text" id="inputGroup-sizing-lg-2">Where</span>
                                <input type="text" className="app__navbarsearch-inputfield-individual form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='City, state, zip code, or "remote"'/>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <button type="submit" className=" app__navbarsearch-inputfield-searchform-btn btn btn-lg btn-primary" placeholder="Last name"> <span style={{fontSize:"smaller"}}><b>Find Jobs</b></span></button>
                        </div>
                    </div>
                </form>
                <div className='app__navbarsearch-joblink'>
                    Employers: <a href="#postJob" className='app__navbarsearch-joblink-link'><b>Post a job</b></a>
                </div>
            </div>
    )


}

export default NavbarSearch