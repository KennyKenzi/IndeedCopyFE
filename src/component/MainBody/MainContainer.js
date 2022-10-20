import React from 'react'
import MainJobList from './MainJobList'
// import '../../css/App.css'

 const MainContainer =()=> {
  return (
    <div className='mainbody__container container-fluid'>
        <div className='row mainbody__container-row justify-content-between'>
            <div className='col mx-3 p-0 col-md-7 col-lg-6' > 
                <div className=''>
                    <MainJobList></MainJobList>
                </div>
            </div>
            <div className='col main__column2 mx-3 '>
                <div className=''>Col 2 Title</div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer