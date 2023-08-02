import React from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"
import { auth } from './firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    } catch (err){
      alert(err)
    }
  }

  const register = async (e) => {
    e.preventDefault()
    try {
    await createUserWithEmailAndPassword(auth, email, password)
    } catch (err){
      alert(err)
    }
  }

  return (
    <div className='login'>
        <Link to="/">
          <img className='login--logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon-logo" />
        </Link>

        <div className="login--container">
          <h1>Sign In</h1>
          <form>
            <h5>E-mail</h5>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="on" />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="on" />
            <button className='login--signinButton' onClick={login}>Sign In</button>
          </form>

          <p>
            By signing-in, you agree to Amazon's terms and conditions.
          </p>

          <button className='login--registerButton' onClick={register}>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login