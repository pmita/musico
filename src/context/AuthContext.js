import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config"; // FIREBASE

export const AuthContext = createContext()

/*Everything useReducer related*/
const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, user : action.payload }
        case 'AUTH_IS_READY':
            return { user : action.payload, authIsReady : true };
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

    //useEFFECT
    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(user => {
            dispatch({ type : 'AUTH_IS_READY', payload : user })
        })

        return () => unsubscribe() //unmount component safely
    }, [])

    return(
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}