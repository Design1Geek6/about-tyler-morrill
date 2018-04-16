 import React, { Component } from 'react'

 export default class extends Component {

    render(){
        return(
                <div className="job">
                    <div className="work">{this.props.work}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="descipt">{this.props.desc}</div>
                </div>
        )
    }
 }