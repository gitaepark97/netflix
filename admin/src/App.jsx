import { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import { AuthContext } from './context/authContext/AuthContext'
import Home from './pages/home/Home'
import List from './pages/list/List'
import ListList from './pages/listList/ListList'
import Login from './pages/login/Login'
import Movie from './pages/movie/Movie'
import MovieList from './pages/movieList/MovieList'
import NewList from './pages/newList/NewList'
import NewMovie from './pages/newMovie/NewMovie'
import NewUser from './pages/newUser/NewUser'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {true && (
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
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App
