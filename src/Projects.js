import React, { Component } from 'react'

export default class extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>

                <h1 className="title">Projects I Have Worked On</h1>
                <div className="specs">
                    <div className="name">{this.props.project}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="descipt">{this.props.desc}</div>
                    <div className="tech">{this.props.proTech}</div>
                </div>
                <div>{this.props.projects}</div>
                <div>{this.props.projects}</div>

            </div>
        )
    }

}