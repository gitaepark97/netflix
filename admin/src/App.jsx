import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
