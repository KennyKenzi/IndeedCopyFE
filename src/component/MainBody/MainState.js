
import React, {createContext, useReducer, useEffect} from 'react'
import { fakedata } from '../../config/randomData' 
import {CLICK_JOB, LOAD_SELECTED_JOBDATA, SET_SCREEN_SIZE, CLICK_TOGGLE} from '../../types'

//context. Will move to new js file eventually
export const MainContext = createContext();

//mainReducer. Will move to new  js file eventually
const mainReducer = (state, action)=>{
    switch(action.type){
        case CLICK_JOB:
            return{
                ...state, 
                isJobClicked: action.payload,  
            }
        case CLICK_TOGGLE:
            return{
                ...state, 
                istoggleClicked: action.payload,  
            }
        case LOAD_SELECTED_JOBDATA:
            return{
                ...state,
                selectedJobData: action.payload
                
            }
        case SET_SCREEN_SIZE:
            return{
                ...state,
                windowSize: action.payload
            }

        default:
            return state     
    }
}



 const MainState=(props)=>{

        const initialState={
         jobList: fakedata,
        //  selectedJobID: fakedata[0].id,
         selectedJobData: fakedata[0],
         isJobClicked: false,
         istoggleClicked: false,
         windowSize: {innerWidth:window.innerWidth, innerHeight: window.innerHeight}
        }
    
        const [state, dispatch] = useReducer(mainReducer, initialState)


        useEffect(() => {
            const handleWindowResize=()=> {
              setWindowSize()
            }
            window.addEventListener('resize', handleWindowResize);

            return () => {
              window.removeEventListener('resize', handleWindowResize);
            };
        });

        const setWindowSize =()=> {
            const {innerWidth, innerHeight} = window; 
            dispatch({
                type: SET_SCREEN_SIZE,
                payload:{innerWidth, innerHeight}
            })
            if(innerWidth>650 ){
                jobClicked(false)
                if(state.istoggleClicked){
                    toggleClicked()
                }
                
            }
        }   

        const sortJobType = (arr)=>{
            if(arr.length === 1){
                return `${arr[0]}`
            }
            else if(arr.length>1){
                return `${arr[0]} +${arr.length-1}`
            }else{
               return ``
            }
        }

        const jobClicked = (arg)=>{     
            dispatch({
                type: CLICK_JOB,
                payload: arg
            })
        }

        const toggleClicked =()=>{
            dispatch({
                type: CLICK_TOGGLE,
                payload: !state.istoggleClicked
            })
        }

        const selectJob=(e)=>{
            e.preventDefault()
            const job = state.jobList.filter(jobL => jobL.id === e.target.id)
            try {
                dispatch({
                    type: LOAD_SELECTED_JOBDATA,
                    payload:job[0]
                })

            } catch (error) {
                console.log(error)
            }
            jobClicked(true)

        }

        
        const calculateDaysPosted =(datePosted)=>{
            const today = new Date();
            const postedDate = new Date(datePosted)
            const difference = (today.getTime() - postedDate.getTime())/(1000*3600*24)
            return difference.toFixed(0)
        }

        

  return (
    <MainContext.Provider value={{
        jobData: state.jobList,
        // selectedJobID: state.selectedJobID,
        sortJobType,
        calculateDaysPosted,
        selectJob,
        toggleClicked,
        windowSize: state.windowSize,
        selectedJob: state.selectedJobData,
        isJobClicked: state.isJobClicked,
        istoggleClicked: state.istoggleClicked
    }}>    
        {props.children}
    </MainContext.Provider>
  )
}
export default MainState