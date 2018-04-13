import React, { Component } from 'react'
import Project from './Project'

export default class extends Component{
    state={
        project1:{
            title:'Lumberjack Design Portfolio',
            date:'January - Currently Working',
            desc:'Designing and Developing a Portfolio Web Site',
            tech:'Used Photoshop, Illustrator, Invision, and Sublime',
        },
        project2:{
            title:'Tic Tac React',
            date:'April 10, 2018',
            desc:'Used React to build a non funtional Tic Tac Toe Board',
            tech:'Used CSS React and testing',
        },
        project3:{
            title:'Name Badge',
            date:'March 19, 2018',
            desc:'Design a Name Badge using CSS selectors',
            tech:'Used codepen, CSS and VS Code.',
        },
    }

    render(){
        return(
            <div>

                <h1 className="title">Projects I Have Worked On</h1>
                <Project title={this.state.project1.title} 
                date={this.state.project1.date} 
                desc={this.state.project1.desc}
                tech={this.state.project1.tech} />
                <Project title={this.state.project1.title} 
                date={this.state.project2.date} 
                desc={this.state.project2.desc}
                tech={this.state.project2.tech}/>
                <Project title={this.state.project1.title} 
                date={this.state.project3.date} 
                desc={this.state.project3.desc}
                tech={this.state.project3.tech}/>
            </div>
        )
    }

}