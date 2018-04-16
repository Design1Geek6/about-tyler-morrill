import React, { Component } from 'react'
import Home from './Home'
import Projects from './Projects'
import JobHistory from './JobHistory'
import './css/tyler.css'
import './css/about.css'
import './css/me.css'
import { BrowserRouter as Router, Route, NavLink as Link, Switch } from 'react-router-dom' //in terminal install via "npm install react-router-dom"


export default class extends Component {
  constructor(){
    super()
    
    console.log('App.Constructor()')
  }

  componentWillMount(){
    console.log('App.componentWillMount()')
  }

  render() {
    console.log('App.render()')

    return (
      <Router>
        <div className="App">
          <nav className="navigation">
            <Link  className="link home" to="/Home" activeStyle={{ fontWeight: 'bold', color: 'red', }}>Home</Link>
            <Link className="link jobHistory"exact to="/JobHistory" activeStyle={{ fontWeight: 'bold', color: 'red'}}>Work History</Link>
            <Link className="link project"exact to="/" activeStyle={{ fontWeight: 'bold', color: 'red', }}>Projects</Link>
          </nav>
          <Switch>
            <Route path="/Home" component={() => <Home />} />
            <Route exact path="/JobHistory" component={JobHistory} />
            <Route exact path="/" component={Projects} />
            <Route component={() => <div>404 ERROR</div>} />
          </Switch>
        </div>
      </Router>
    )
  }

  componentDidMount(){
    console.log('App.componentWillMount()')
  }
}

