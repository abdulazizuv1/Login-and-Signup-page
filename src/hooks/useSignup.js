import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = ()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const signup = async (email, password, name, setUser)=>{
        try{
            setError(null)
            setLoading(true)
            const req = await projectAuth.createUserWithEmailAndPassword(email, password)

            await req.user.updateProfile({displayName: name})

            setUser(req.user);
            setLoading(false)
        }catch(err){
            setError(err.message);
            setLoading(false)

        }
    }

    return {loading, error, signup}
}