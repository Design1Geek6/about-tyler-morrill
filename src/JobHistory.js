import React, { Component } from 'react'
import Job from './Job'

export default class extends Component{
    state={
        job1:{
            work: 'Sign Pro',
            date: 'May, 2004',
            desc: 'Graphic Design Logos, and Signs. Sell and Manage Projects. Run Large Format Printers and Router Tabel.'
        },
        job2:{
            work: 'Summit Branding',
            date: 'Jan, 2013 (Contract Work).',
            desc: 'Design Website Layouts, Logos, and graphcal elements.'

        }
    }

    render(){
        return(
            <div>
                <h1 className="title">Work History</h1>
                <div className="spGroup">
                <img className="spLogo" src="/img/signpro.jpg" alt="sign pro logo"/>
                <Job work={this.state.job1.work} 
                date={this.state.job1.date} 
                desc={this.state.job1.desc} />
                </div>
                <div className="jjaSummit">
                <img className="spLogo" src="/img/signpro.jpg" alt="sign pro logo"/>
                <Job work={this.state.job2.work} 
                date={this.state.job2.date} 
                desc={this.state.job2.desc} />
                </div>
            </div>
        )
    }
}