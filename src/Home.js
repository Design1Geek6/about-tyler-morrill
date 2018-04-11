import React, { Component } from 'react'
// import BlankPiece from './BlankPiece'
// import OPiece from './OPiece'
// import XPiece from './XPiece'


class Home extends Component {
    constructor(){
        super()
            console.log('Home.constructor()')
    }

    componentWillMount(){
        console.log('Home.componentWillMount()')
    }

    render(){
        console.log('Home.render()')

        return(

            <div>
                <div className ='landing-wrapper'>
                <div className ='landing'><img src = '/lumber.jpg'/></div>
                    <h1 className = 'name'>Tyler <br/>J. Morrill</h1>
                    <h4 className = 'tagline'>Designer / UX-UI / Web</h4>
                </div>
                <div>
                    <h1>ABOUT ME</h1>
                    <p>The younger lumberjack was full of enthusiasm and
                    went off into the woods and started cutting trees
                    immediately. He worked all through the day, barely
                    taking time to catch his breath or to grab some food
                    and water.</p>
                </div>
            </div>

        )
    }
    componentDidMount(){
        console.log('Home.componentDidMount()')
    }
}

export default Home