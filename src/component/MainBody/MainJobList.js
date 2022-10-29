import React, {useContext} from 'react'
import{ MainContext } from '../../component/MainBody/MainState'



const MainJobList=()=>{

 

const mainContext = useContext(MainContext)

const {jobData, sortJobType, calculateDaysPosted,  selectJob} = mainContext



  return (
        
    <div className='container-fluid p-0'>
        
        {jobData.map((data, i) => (  
            <div className='card my-3 joblist p-3 position-relative' key={i}>
                <button  id={data.id} onClick={selectJob} className='text-decoration-none text-reset position-absolute'> </button> 
                <div className="card-body p-0">
                    <div className=''>
                        <small>new</small>
                        <i className="bi bi-three-dots-vertical " style={{float:"right"}}></i>
                    </div>
                    <h5 className="card-title" href="/">{data.jobName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{data.company}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{`${data.state}, ${data.country}`}</h6>
                    <p className='input jobtype'>{sortJobType(data.jobType)}</p>
                    <p>{data.numberOfPositions? (data.numberOfPositions > 1 ? "Hiring multiple candidates" :""):""}</p>
                    
                        {data.requirements.length>0?(
                            data.requirements.length>=2 ? (
                            <ul style={{fontSize: "0.9rem"}}>     
                                <li className="card-text">{data.requirements[0]}</li>
                                <li className="card-text">{data.requirements[1]}</li>
                            </ul>
                        ) : (
                            <ul><li className="card-text">{data.requirements[0]}</li></ul>    
                        )
                        ):""}

                    
                    <small>
                        <div style={{display: "flex"}} className="">
                            <div href="#" className="mx-2">{`Posted ${calculateDaysPosted(data.datePosted)} days ago.`}</div>
                            <div href="#" className="mx-2">{`From ${data.locationPosted}`}</div> 
                        </div> 
                    </small>
                </div>
              
            </div>
            
        ))}
        
    </div>
  )
}


export default MainJobList