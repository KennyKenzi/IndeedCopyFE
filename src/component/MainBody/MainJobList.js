import React from 'react'
import { fakedata } from '../../config/randomData'



const MainJobList=()=>{

const sortJobType = (arr)=>{
    if(arr.length>1){
        return `${arr[0]} +1`
    }else{
        console.log(`${arr[1]}`)
        return `${arr[0]}`
    }
}

const calculateDaysPosted =(datePosted)=>{
    const today = new Date();
    const postedDate = new Date(datePosted)
    const difference = (today.getTime() - postedDate.getTime())/(1000*3600*24)
    console.log(today)
    console.log(postedDate)
    console.log(difference)

    return difference.toFixed(0)
}

  return (

    <div className='container-fluid p-0'>

        {fakedata.map(data => (
            
            <div className='card my-3 joblist p-3' key={data.id}>
                <div className="card-body p-0">
                    <h5 className="card-title" href="/">{data.jobName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{data.company}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{`${data.state}, ${data.country}`}</h6>
                    <p className='input jobtype'>{sortJobType(data.jobType)}</p>
                    <p>{data.numberOfPositions > 1 ? "Hiring multiple candidates" :""}</p>
                    <ul>
                    <li className="card-text">Some quick example text to build on the card title .</li>
                    <li className="card-text">Sard title and make up the bulk of the card's content.</li>
                    </ul>
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