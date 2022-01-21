import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import { AuthContext } from './context/authContext/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NewUser from './pages/newUser/NewUser'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App
