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
    
    <div className='mainbody__jobdescription-jobdetails container p-0 overflow-auto'>
        <h5 className='p-3'><b>Job Details</b></h5>
        <div className='mainbody__jobdescription-jobdetails-section1'>
        {
        selectedJob.jobType.length>0?
        (<div className='mainbody__jobdescription-salary my-3 px-3'>
          <i className='bi bi-cash-stack' style={{fontSize:'20px'}} ></i>
          <p className="mx-4 jobdetails-salaryName" ><small><b>Salary</b></small></p>
          <div className='mx-5 jobdetailshighlight'><small><b>{selectedJob.salaryRange}</b></small></div>
        </div>): ""
        }
        {
          selectedJob.jobType.length>0?
          (<div className='mainbody__jobdescription-jobtype my-3 px-3'>
          <i className='bi bi-briefcase-fill' style={{fontSize:'20px'}} ></i>
          <p className="mx-4 jobdetails-salaryName" ><small><b>Job Type</b></small></p>
          <div className='mx-5 jobdetailshighlight'><small><b>
              {
              selectedJob.jobType.map((el, i)=>(
              i<selectedJob.jobType.length-1?`${el}, `:el 
                ))
              } 
          </b></small></div>
          </div>): ""   
        }
        {
          selectedJob.schedule ? 
          (<div className='mainbody__jobdescription-schedule my-3 px-3'>
          <i className='bi bi-cash-stack' style={{fontSize:'20px'}} ></i>
          <p className="mx-4 jobdetails-salaryName" ><small><b>Shift/Schedule</b></small></p>
          <div className='mx-5 jobdetailshighlight'><small><b>{selectedJob.schedule}</b></small></div>
          </div>):""
        }
      </div>

      <div className='mainbody__jobdescription-jobdetails-section2'>
      <h5 className='p-3'><b>Qualifications</b></h5>
      </div>
      <div className='mainbody__jobdescription-jobdetails-section3'>
      <h5 className='p-3'><b>Benefits</b></h5>
      </div>
      <div className='mainbody__jobdescription-jobdetails-section4'>
      <h5 className='p-3'><b>Full Job Description</b></h5>
      </div>
      <div className='mainbody__jobdescription-jobdetails-section5'>
      <h5 className='p-3'><b>Hiring Insights</b></h5>
      </div>
      <div className='mainbody__jobdescription-jobdetails-section6'>
      <h5 className='p-3'><b>Section 6</b></h5>
      </div>
    </div>
  </div>
  )
}

export default MainJobDescription