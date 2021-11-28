import { createContext, useReducer } from "react";

export const AuthContext = createContext()

/*Everything useReducer related*/
const authReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

let initialState = {
    user : null,
    authIsReady : false
}

export const AuthContextProvider = ({ children }) => {
    //STATE
    const [state, dispatch] = useReducer(authReducer, initialState)
    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}