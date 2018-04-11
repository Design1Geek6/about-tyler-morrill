import React, { Component } from 'react'
import Home from './Home'
import './css/tyler.css'

class App extends Component {
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
        <Home/>
      </div>
    )
  }

  componentDidMount(){
    console.log('App.componentWillMount()')
  }
}

export default App
