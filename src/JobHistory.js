import React, { Component } from 'react'

export default class extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>

                <h1 className="title">Work Experiance</h1>
                <div className="jobs">
                    <div className="jobName">{this.props.job}</div>
                    <div className="date">{this.props.date}</div>
                    <div className="descipt">{this.props.desc}</div>
                </div>
                <div>{this.props.jobsHist}</div>
                <div>{this.props.jobsHist}</div>

            </div>
        )
    }

}