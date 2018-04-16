import React, { Component } from 'react'
import Project from './Project'

export default class extends Component{
    state={
        project1:{
            project:'Lumberjack Design Portfolio',
            date:'January - Currently Working',
            desc:'Designing and Developing a Portfolio Web Site',
            tech:'Used Photoshop, Illustrator, Invision, and Sublime',
        },
        project2:{
            project:'Tic Tac React',
            date:'April 10, 2018',
            desc:'Used React to build a non funtional Tic Tac Toe Board',
            tech:'Used CSS React and testing',
        },
        project3:{
            project:'Name Badge',
            date:'March 19, 2018',
            desc:'Design a Name Badge using CSS selectors',
            tech:'Used codepen, CSS and VS Code.',
        },
    }

    render(){
        return(
            <div>

                <h1 className="title">Projects I Have Worked On</h1>
                <div className='ljd'>
                <a href="https://github.com/Design1Geek6/about-tyler-morrill"><img className="pic" src="img/ljd.png" alt='lumberjack design Project'/></a>
                <Project project={this.state.project1.project} 
                date={this.state.project1.date} 
                desc={this.state.project1.desc}
                tech={this.state.project1.tech} />
                </div>
                <div className="ttr">
                <a href="https://codepen.io/DesignGeek16/pen/oqarPL"><img className="pic" src="/img/ttr.png" alt='tic-tac-react project' /></a>
                <Project project={this.state.project2.project} 
                date={this.state.project2.date} 
                desc={this.state.project2.desc}
                tech={this.state.project2.tech}/>
                </div>
                <div className="badge">
                <a href="https://codepen.io/DesignGeek16/pen/eMgEZj"><img className="pic" src="/img/badge.png" alt="badge project" /></a>
                <Project project={this.state.project3.project} 
                date={this.state.project3.date} 
                desc={this.state.project3.desc}
                tech={this.state.project3.tech}/>
                </div>
            </div>
        )
    }

}