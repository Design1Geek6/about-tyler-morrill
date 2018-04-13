import React, { Component } from 'react'
import Jobs from './Job'

export default class extends Component{
    state={
        job1:{
            title: 'Sign Pro',
            date: 'May, 2004',
            desc: 'Graphic Design Logos, and Signs. Sell and Manage Projects. Run Large Format Printers and Router Tabel.'
        },
        job2:{
            title: 'Summit Branding',
            date: 'Jan, 2013 (Contract Work).',
            desc: 'Design Website Layouts, Logos, and graphcal elements.'

        }
    }

    render(){
        return(
            <div>
                <h1 className="title">Work Experiance</h1>
                <Job title={this.state.job1.title} 
                date={this.state.job1.date} 
                desc={this.state.job1.desc}  />
                <Job title={this.state.job2.title} 
                date={this.state.job2.date} 
                desc={this.state.job2.desc} />
            </div>
        )
    }
}