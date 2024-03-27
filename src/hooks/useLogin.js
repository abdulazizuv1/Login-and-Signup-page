import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useLogin = ()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const login = async (email, password, setUser)=>{
        try{
            setError(null)
            setLoading(true)
            const req = await projectAuth.signInWithEmailAndPassword(email, password)
            setUser(req.user);
            if(!req.user){
                throw new Error("Xatolik")
            }
            setLoading(false)
        }catch(err){
            setLoading(false)
            if(err.code == "auth/internal-error"){
                setError("There is no user with this email or incorrect password!");
            }else{
                setError(err.message);
            }
        }
    }

    return {loading, error, login}
}