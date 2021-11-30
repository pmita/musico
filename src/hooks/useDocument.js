import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
    // STATE
    const [document, setDocument] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    // useEFFECT
    useEffect(() => {
        // set state pre-fetching
        setError(null)
        setIsPending(false)

        const unsubscribe = projectFirestore.collection(collection).doc(id)
            .onSnapshot((snapshot) => {
                if(snapshot.exists){
                    setDocument({ ...snapshot.data(), id : snapshot.id })
                    setIsPending(false)
                    setError(null)
                } else {
                    setError('Item does not exist')
                    setIsPending(false)
                }
            }, (err) => {
                setError(err.message)
                setIsPending(false)
            })

            return () => unsubscribe()
    }, [collection, id])

    return { document, isPending, error };
}