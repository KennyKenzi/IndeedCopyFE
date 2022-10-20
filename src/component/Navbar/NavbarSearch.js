import React, { Component } from 'react'
import '../../css/Navbar.css'

export default class NavbarSearch extends Component {




  render() {



    return (
            <div class = "app__navbarsearch">
                <form className='app__navbarsearch-inputfield'>
                    <div class="row gy-4">
                        <div class="col-lg">
                            <div class="input-group input-group-lg">
                                <span class="input-group-text" id="inputGroup-sizing-lg-1">What</span>
                                <input type="text" class="app__navbarsearch-inputfield-individual form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Job title, keywords, or company'/>
                            </div>
                        </div>
                        <div class="col-lg">
                        <div class="input-group input-group-lg">
                                <span class="input-group-text" id="inputGroup-sizing-lg-2">Where</span>
                                <input type="text" class="app__navbarsearch-inputfield-individual form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='City, state, zip code, or "remote"'/>
                            </div>
                        </div>
                        <div class="col-lg-auto">
                            <button type="submit" class=" app__navbarsearch-inputfield-searchform-btn btn btn-lg btn-primary" placeholder="Last name"> <span style={{fontSize:"smaller"}}><b>Find Jobs</b></span></button>
                        </div>
                    </div>
                </form>
                <div className='app__navbarsearch-joblink'>
                    Employers: <a href="#postJob" className='app__navbarsearch-joblink-link'><b>Post a job</b></a>
                </div>
            </div>
    )
  }


}

