import { useRef, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

import './register.scss'

export default function Register() {
  const [email, setEmail] = useState('')
  // eslint-disable-next-line
  const [password, setPassword] = useState('')
  // eslint-disable-next-line
  const [username, setUsername] = useState('')
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const usernameRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
  }

  const handleFinish = async event => {
    event.preventDefault()
    setPassword(passwordRef.current.value)
    setUsername(usernameRef.current.value)
    try {
      await axios.post('api/auth/register', { email, username, password })
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login">
            <button className="loginButton">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
