import React, { Component } from 'react'

export default class extends Component {

   render(){
       return(
               <div className="job">
                   <div className="project work">{this.props.project}</div>
                   <div className="date when">{this.props.date}</div>
                   <div className="descipt infoDesc">{this.props.desc}</div>
                   <div className="tech how">{this.props.tech}</div>
               </div>
       )
   }
}