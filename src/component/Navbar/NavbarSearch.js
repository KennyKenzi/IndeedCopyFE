import React, { Component } from 'react'
import './Navbar.css';

export default class NavbarSearch extends Component {




  render() {



    return (

<>
                <div id='largerscreen'>

                                    
                        <form class="app__navbar-smallscreen_searchform row" >

                        <div class="form-row col-auto">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text " id="searchJobPrepend"><b>What</b></span>
                                    </div>
                                    <input type="text" className="form-control" id="searchJob" placeholder="Job title, keywords, or company" aria-describedby="validationTooltipUsernamePrepend" ></input>
                                    <i class="bi bi-search"></i>
                                </div>
                        </div>

                        <div class="form-row  col-auto">

                                <div class="input-group">
                                    <div class="input-group-prepend"> 
                                        <span class="input-group-text" id="searchWWherePrepend"><b>Where</b></span>
                                    </div>
                                    <input type="text" class="form-control" id="searchWhere" placeholder="City, state, zip code, or 'remote'" aria-describedby="validationTooltipUsernamePrepend"></input>
                                    <i class="bi bi-geo-alt-fill"></i>
                                </div>
                        </div>
                        <div class="form-row col-auto">
                            <div className='input-group' id='buttonContain'>
                                <button class="btn btn-primary searchform_item " type="submit"><b>Find Jobs</b></button> 
                            </div>
                        </div>


                        </form>


                </div>



                <div id ="smallerscreen">
                    <form class="app__navbar-smallscreen_searchform" >
                    
                    <div class="form-row">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text  col-auto " id="searchJobPrepend"><b>What</b></span>
                                </div>
                                <input type="text" className="form-control col-auto" id="searchJob" placeholder="Job title, keywords, or company" aria-describedby="validationTooltipUsernamePrepend" ></input>
                                <i class="bi bi-search"></i>
                            </div>
                    </div>

                    <div class="form-row ">

                            <div class="input-group">
                                <div class="input-group-prepend"> 
                                    <span class="input-group-text  col-auto " id="searchWWherePrepend"><b>Where</b></span>
                                </div>
                                <input type="text" class="form-control col-auto" id="searchWhere" placeholder="City, state, zip code, or 'remote'" aria-describedby="validationTooltipUsernamePrepend"></input>
                                <i class="bi bi-geo-alt-fill"></i>
                            </div>
                    </div>
                    <div class="form-row">
                        <div className='input-group' id='buttonContain'>
                            <button class="btn btn-primary searchform_item " type="submit"><b>Find Jobs</b></button> 
                        </div>
                    </div>


                
                </form>
              
             </div>

        </>
    )
  }


}

