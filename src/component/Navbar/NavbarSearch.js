import React, { Component } from 'react'
import './Navbar.css';

export default class NavbarSearch extends Component {




  render() {



    return (
            <div class = "app__navbarsearch">
                <form className='app__navbarsearch-inputfield'>
                    <div class="row gy-4">
                        <div class="col-lg">
                            <input type="text" class="form-control form-control-lg" placeholder="What"/>
                        </div>
                        <div class="col-lg">
                            <input type="text" class="form-control form-control-lg" placeholder="Where"/>
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

