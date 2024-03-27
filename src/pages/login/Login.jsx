import React, { useState } from 'react'
import "./Login.css"
import { useLogin } from './../../hooks/useLogin';

function Login({setUser}) {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const {loading, error, login} = useLogin()

  const handleSubmit =(e)=>{
    e.preventDefault()
    login(email, password, setUser)
  }
  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="">email:</label>
      <input onChange={(e)=>{
        setEmail(e.target.value)
      }} type="email" placeholder='email kiriting...'/>
      <label htmlFor="">password:</label>
      <input onChange={(e)=>{
        setPassword(e.target.value)
      }} type="password" placeholder='pas sword kiriting...'/>
      <button>{loading ? "Sending..." : "Login"}</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default Login