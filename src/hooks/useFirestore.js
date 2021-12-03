import { useReducer, useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

// define reducer's initial state
let initialState = {
    document : null,
    isPending : false,
    error : null,
    success : null
}

const firestoreReducer = (state, action) => {
    switch(action.type){
        case 'IS_PENDING':
            return { document : null, isPending : true, error : null, success : null }
        case 'DOCUMENT_ADDED':
            return { document : action.payload, isPending : false, error : null, success : true }
        case 'ERROR':
            return { document : null, isPending : false, error : action.payload, success : null }
        default:
            return state;
    }
}

export const useFirestore = (collection) => {
    //STATE
    const [state, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled){
            dispatch(action)
        }
    }

    const addDocument = async (doc) => {
        dispatchIfNotCancelled({ type : 'IS_PENDING' })
        try{
            const createdAt = timestamp.fromDate(new Date())
            const responseDocument = await projectFirestore.collection(collection).add({ ...doc, createdAt : createdAt})
            dispatchIfNotCancelled({ type : 'DOCUMENT_ADDED', payload : responseDocument })
        } catch(err){
            dispatchIfNotCancelled({ type : 'ERROR' , payload : err.message })
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, state }
}