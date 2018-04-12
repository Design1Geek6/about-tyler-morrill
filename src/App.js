import React, { Component } from 'react'
import Home from './Home'
import Projects from './Projects'
import JobHistory from './JobHistory'
import './css/tyler.css'

export default class extends Component {
  constructor(){
    super()
    const projects={
      name: "Project Name",
      date: "Project Date",
      desc: "Project Description",
      tech: "Project Technology",
    }

    console.log('App.Constructor()')
  }

  componentWillMount(){
    console.log('App.componentWillMount()')
  }

  render() {
    console.log('App.render()')

    return (
      <div>
        <Home/>, <Projects projects={this.projects} />, <JobHistory/>
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentWillMount()')
  }
}

