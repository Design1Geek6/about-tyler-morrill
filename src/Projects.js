import React, { Component } from 'react'

export default class extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1 className="projTitle">Projects I Have Worked On</h1>
                <div className="projGroup">
                    <div className="name">{this.props.projectDate}</div>
                    <div className="date"></div>
                    <div className="descipt"></div>
                    <div className="tech"></div>
                </div>
                <div>{this.props.proj}</div>
                <div>{this.props.proj}</div>

            </div>

        )
    }

}