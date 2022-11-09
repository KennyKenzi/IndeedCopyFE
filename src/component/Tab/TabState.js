
import React, {createContext, useReducer, useEffect} from 'react'
import { fakedata } from '../../config/randomData' 
import {CLICK_TAB} from '../../types'

//context. Will move to new js file eventually
export const TabContext = createContext();

//mainReducer. Will move to new  js file eventually
const tabReducer = (state, action)=>{
    switch(action.type){
        case CLICK_TAB:
            return{
                ...state, 
                currentTab: action.payload,  
            }


        default:
            return state     
    }
}



 const TabState=(props)=>{

        const initialState={
            currentTab: "jobfeed"
        }
        const [state, dispatch] = useReducer(tabReducer, initialState)
       
        const tabClicked = (arg)=>{     
            dispatch({
                type: CLICK_TAB,
                payload: arg
            })
        }



  return (
    <TabContext.Provider value={{
       tabClicked,
       currentTab: state.currentTab
    }}>    
        {props.children}
    </TabContext.Provider>
  )
}

export default TabState