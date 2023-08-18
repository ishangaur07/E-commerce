import React,{createContext,useContext,useReducer} from 'react'

// Prepares the datalayers
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({reducer,initalState,childern})=>{
    <StateContext.Provider value={useReducer(reducer,initalState)}>
        {childern}
    </StateContext.Provider>

};

// Pull information from the data layer
export const useStateValue = ()=>useContext(StateContext);
