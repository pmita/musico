import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    //STATE
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    const { dispatch } = useAuthContext()

    const signout = async () => {
        // uppdate state before fetching
        setError(null)
        setIsPending(false)

        try{
            await projectAuth.signOut()


            dispatch({ type : 'LOGOUT' })

            if(!isCancelled){
                setError(null)
                setIsPending(false)
            }

        }catch (err){
            if(!isCancelled){
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signout, error, isPending }
}