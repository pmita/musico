import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config' //FIREBASE
import { useAuthContext } from './useAuthContext' //CONTEXT

export const useSignup = () => {
    //STATE
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        // set state pre-fetching
        setError(null)
        setIsPending(true)

        try{
            // init signing up
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            
            if(!response){
                throw new Error('Could not sign up')
            }
    
            //response in an object and within exists a user object with all the details
            //we need to update the user details
            await response.user.updateProfile({ displayName : displayName })

            //we then need to adda new user document under the users collection
            await projectFirestore.collection('users').doc(response.user.uid).set({
                online : true,
                displayName : displayName
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

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { signup, isPending, error }
}