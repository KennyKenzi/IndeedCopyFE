
import React, {createContext, useReducer} from 'react'
import { fakedata } from '../../config/randomData' 

//context. Will move to new js file eventually
export const MainContext = createContext();



//mainReducer. Will move to new  js file eventually
const mainReducer = (state, action)=>{
    switch(action.type){
        case "CLICK_JOB":
            return{
                ...state, 
                selectedJobID: action.payload,  
            }
        case "LOAD_SELECTED_JOBDATA":
            return{
                ...state,
                selectedJobData: action.payload
                
            }

        default:
            return state     
    }
}



 const MainState=(props)=>{

        const initialState={
         jobList: fakedata,
         selectedJobID: fakedata[0].id,
         selectedJobData: fakedata[0]
        }
    
        const [state, dispatch] = useReducer(mainReducer, initialState)
        



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
        

        const selectJob=(e)=>{
            e.preventDefault()
            const job = state.jobList.filter(jobL => jobL.id === e.target.id)
            try {
                dispatch({
                    type: "LOAD_SELECTED_JOBDATA",
                    payload:job[0]
                })


            } catch (error) {
                console.log(error)
            }

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
        selectedJobID: state.selectedJobID,
        sortJobType,
        calculateDaysPosted,
        selectJob,
        selectedJob: state.selectedJobData
    }}>    
        {props.children}
    </MainContext.Provider>
  )
}
export default MainState