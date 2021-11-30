import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collection) => {
    //STATE
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    //useEFFECT
    useEffect(() => {
        // set state pre-fetching
        setError(null)
        setIsPending(true)

        // creating a real-time connection with firestore
        const unsubscribe = projectFirestore.collection(collection)
            .onSnapshot((snapshot) => {
                if(snapshot.empty){
                    setError('No document to load')
                    setIsPending(false)
                } else {
                    let results = [];
                    snapshot.docs.forEach((doc) => {
                        results.push({ ...doc.data(), id : doc.id })
                    })
                    setDocuments(results)
                    setIsPending(false)
                }
            }, (err) => {
                setError(err.message)
                setIsPending(false)
            })

        // unmount component safely
        return () => unsubscribe()
    }, [collection])

    return { documents, isPending, error }
}