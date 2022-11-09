import React, {useContext} from 'react'
import MainJobDescription from './MainJobDescription'
import MainJobList from './MainJobList'
import { MainContext } from './MainState'



 const MainContainer =()=> {
    const mainContext = useContext(MainContext)

    const {windowSize, isJobClicked, istoggleClicked} = mainContext

            const styleSwitch=(arg)=>{

            if (windowSize.innerWidth<650 && isJobClicked){
               
                return arg
            }else{
                return ""
            }

        }



  return (
    <div className='mainbody__container container-fluid'>
        {/* <div className={istoggleClicked?"background__overlay": ""} ></div> */}
        <div className='row mainbody__container-row justify-content-between'>
            <div className='col mx-3 p-0 col-md-7 col-lg-6'style={{display: styleSwitch("none")}} > 
                <div className='' >
                    <MainJobList/>
                </div>
            </div>
            <div className='col main__column2 mx-3 'style={{display:styleSwitch("block")}}>
                <div className='mainbody__container-columntwocontainer'>
                    <MainJobDescription />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContainer