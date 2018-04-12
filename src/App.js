import React, { Component } from 'react'
import Home from './Home'
import Projects from './Projects'
import JobHistory from './JobHistory'
import './css/tyler.css'

export default class extends Component {
  constructor(){
    super()
    state={
      projectName: "Project Name",
      projectDate: "Project Date",
      projectDescription: "Project Description",
      projectTech: "Project Technology",
    }

    console.log('App.Constructor()', "state", this.state)
  }

  componentWillMount(){
    console.log('App.componentWillMount()')
  }

  render() {
    console.log('App.render()')

    return (
      <div>
        <Home/>, <Projects name={this.state.projectName} date={this.state.projectDate}
        description={this.state.projectDescription} tech={this.state.projectTech}/>, <JobHistory/>
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentWillMount()')
  }
}

