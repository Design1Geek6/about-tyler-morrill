 import React, { Component } from 'react'

 export default class extends Component {

    render(){
        return(
                <div className="job">
                    <div className="work company">{this.props.work}</div>
                    <div className="date time">{this.props.date}</div>
                    <div className="descipt info">{this.props.desc}</div>
                </div>
        )
    }
 }