// setup data layer
// we need this to track the basket

import { createContext, useContext, useReducer } from "react";

// this is data layer
export const StateContext = createContext()

// build a provider to wrap the entire app inside of the provider and give access to the data layer we created
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}
    
// This is how we use it inside a component
export const useStateValue = () => useContext(StateContext)