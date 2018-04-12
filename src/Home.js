import React, { Component } from 'react'


export default class extends Component {
    constructor(props){
        super(props)
            console.log('Home.constructor()')
    }

    componentWillMount(){
        console.log('Home.componentWillMount()')
    }

    render(){
        console.log('Home.render()')

        return(
            <div className="body">
                <header className="header">
                    <div className="bgImage" alt="Lumberjack"></div>
                    <div className="nameTag">
                        <h1 className="name">Tyler J. Morrill</h1>
                        <h3 className="tag">UX/UI Web Designer</h3>
                    </div>
                </header>
                <section className="About Me">
                    <h1>ABOUT ME</h1>
                    <p>As a Graphic / UX Designer, I enjoy creating graphics and
                    layouts that are eﬀective, clean and can strengthen any business
                    strategies. Conceptualizing innovative design solutions and
                    project management come naturally to me. I am a result oriented
                    Graphic / UX Designer that thrives in deadline-driven environments.
                    I am Able to produce positive User Experiences through target
                    audience research that brings together brand and consumer goals.
                    I have designed for webpages that are static as well as responsive.
                    In my quest for continued education in my industry and for personal
                    growth I have learned and continue to hone my skills in HTML and
                    CSS. As a loyal employee, you can bet I will not seek the next best
                    thing just to get ahead. I will continue to amaze for many years.</p>
                </section>
                <section className="techSkills">
                    <ul className="techSkillsList">
                        <li className="cSs">CSS</li>
                        <li className="graphicDesign">Graphic Design</li>
                        <li className="hTml">HTML</li>
                        <li className="iconOg">Iconography</li>
                        <li className="illustator">Illustrator</li>
                        <li className="photoShop">Photoshop</li>
                        <li className="protoTyp">Prototyping</li>
                        <li className="uxUi">UX / UI Design</li>
                        <li className="webDeveloper">Web Development</li>
                        <li className="wireFraming">Wire Framing</li>
                    </ul>
                </section>
                <footer>

                </footer>
            </div>

        )
    }
    componentDidMount(){
        console.log('Home.componentDidMount()')
    }
}
