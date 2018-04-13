import React, { Component } from 'react'
import Home from './Home'
import Projects from './Projects'
import JobHistory from './JobHistory'
import './css/tyler.css'

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
      <div>
        <Home/> <Projects /> <JobHistory/>
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentWillMount()')
  }
}

