import { useState } from 'react'
import "./Signup.css"
import { useSignup } from '../../hooks/useSignup';

function Signup({setUser}) { 
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [name, setName]= useState("")
  const {loading, error, signup} = useSignup()

  const handleSubmit = (e)=>{
    e.preventDefault( )
    signup(email, password, name, setUser);
  }
  
  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="">email:</label>
      <input type='email' onChange={(e)=>{
        setEmail(e.target.value)
      }}  placeholder='email kiriting...'/>
      <label htmlFor="">password:</label>
      <input  onChange={(e)=>{
        setPassword(e.target.value)
      }} type="password" placeholder='password kiriting...'/>
      <label htmlFor="">displatName:</label>
      <input onChange={(e)=>{
        setName(e.target.value)
      }} type="text" placeholder='Ismingizni kiriting...'/>
      <button>
        {loading ? "sending" : "Sign Up"}
      </button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup