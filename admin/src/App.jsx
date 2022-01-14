import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import User from './pages/user/User'
import UserList from './pages/userList/UserList'

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
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
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
