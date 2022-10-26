import React, {useContext} from 'react'
import { MainContext } from './MainState'




const MainJobDescription = () => {

const mainContext = useContext(MainContext)
const {selectedJob} = mainContext


  return (
    <div className='container-fluid p-0 my-3 mainbody__jobdescription'>
    <div className='mainbody__jobdescription-container container-fluid  p-3'>
        <h5>
          {selectedJob.jobName}
        </h5>
       <div className='' style={{fontSize: "15px" }}>
        {
          selectedJob.website?(<a href={selectedJob.website} className='text-decoration-none'>{selectedJob.company}</a>)
          :(<div className='text-themecolour1'>{selectedJob.company}</div>)
        }
        <p className='m-0'>{selectedJob.town}, {selectedJob.state}</p>
     <div>
         {
          selectedJob.salaryRange?(selectedJob.salaryRange)
          :""
        }   
        {
          selectedJob.salaryRange && selectedJob.jobType.length !== 0 ? (" - "):""
        }
        {
          selectedJob.jobType.length>0? 
          selectedJob.jobType.map((el, i)=>(
            i<selectedJob.jobType.length-1?`${el}, `:el 
          )): ""
        }
        </div>
    </div>

    <div className='d-flex'>
      <div>
        <button className='btn btn-primary mainbody__jobdescription-applybtn'>Apply now</button>
      </div>
      <div>
        <i className="bi bi-heart" style={{fontSize: "20px"}}></i>
      </div>
      
    </div>
  </div>  
    
    <div className='mainbody__jobdescription-jobdetails container p-3'>
        <h5>Job Details</h5>
    </div>
  
  </div>
  )
}

export default MainJobDescription