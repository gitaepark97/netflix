import { useContext, useState } from 'react'

import { login } from '../../context/authContext/apiCalls'
import { AuthContext } from '../../context/authContext/AuthContext'
import './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isFetching, dispatch } = useContext(AuthContext)

  const handleLogin = event => {
    event.preventDefault()
    login({ email, password }, dispatch)
  }
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={event => setPassword(event.target.value)}
        />
        <button className="loginButton" onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  )
}
