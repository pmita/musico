import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
    //STATE
    const [isCancelled, setIsCancelled] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        // set state pre-fetching
        setError(null)
        setIsPending(true)

        try{
            const response = await projectAuth.signInWithEmailAndPassword(email, password)

            await projectFirestore.collection('users').doc(response.user.uid).update({
                online : true
            })

            dispatch({ type : 'LOGIN', payload : response.user })

            if(!isCancelled){
                setError(null)
                setIsPending(false)
            }
        } catch(err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    //useEFFECT
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])


    return { login, isPending, error }
} 