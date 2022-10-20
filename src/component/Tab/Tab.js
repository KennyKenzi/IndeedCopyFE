import React, { useState } from 'react'
// import '../../css/Tab.css'



const Tab=()=>{
    const [activeTab, setActiveTab] = useState('jobfeed')



    //addding "active" class to tab
     const clickTab=(e)=>{ 
        console.log(e.target.id)
        setActiveTab( e.target.id)
    }




    return (
      <div className='app__tabs'>

        <ul className="nav justify-content-center">
            <li  className="nav-link" onClick={clickTab}>
                <a id='jobfeed' className={activeTab==="jobfeed"? 'nav-link active': "nav-link"} aria-current="page" href="#/jobfeed" >Job Feed</a>
            </li>
            <li className='nav-link' onClick={clickTab}>
                <a id='recentsearches' className={activeTab==="recentsearches"? 'nav-link active': "nav-link"} href="#/recent">Recent Searches</a>
            </li>
        
        </ul>

      </div>
    )

}
export default Tab