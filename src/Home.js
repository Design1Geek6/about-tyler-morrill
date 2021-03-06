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
                <header className="header image" alt="Lumberjack">
                    <div className="nameTag">
                        <h1 className="name">TYLER J. MORRILL</h1>
                        <h3 className="tag">UX/UI Web Designer</h3>
                    </div>
                </header>
            <main className='main'>
                <section className="aboutMe">
                    <h1 className="aboutStyle">ABOUT ME</h1>
                    <div className="alignment">
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
                
                    <ul className="techSkillsList">
                    <div>
                        <li className="list 1"><img className="blackBg" src="/img/css-icon.svg" alt="Css Icon"/>CSS</li>
                        <li className="list 2"><img className="blackBg" src="/img/graphic-design-icon.svg" alt="Graphic Design Icon"/>Graphic Design</li>
                        <li className="list 3"><img className="blackBg" src="/img/html-icon.svg" alt="HTML Icon"/>HTML</li>
                        <li className="list 4"><img className="blackBg" src="/img/Iconography-icon.svg" alt="Iconography Icon"/>Iconography</li>
                        </div>
                        <div>
                        <li className="list 5"><img className="blackBg" src="/img/AI-Icon.svg" alt="Illustrator Icon"/>Illustrator</li>
                        <li className="list 6"><img className="blackBg" src="/img/ps-Icon.svg" alt="Photoshop Icon"/>Photoshop</li>
                        <li className="list 7"><img className="blackBg" src="/img/prototype-icon.svg" alt="Prototyping Icon"/>Prototyping</li>
                        <li className="list 8"><img className="blackBg" src="/img/uxui-Icon.svg" alt=">UX / UI Design Icon"/>UX / UI Design</li>
                        </div>
                        <div>
                        <li className="list 9"><img className="blackBg" src="/img/web-icon.svg" alt="Web Development Icon"/>Web Development</li>
                        <li className="list 10"><img className="blackBg" src="/img/Wireframe-icon.svg" alt="Wire Framing Icon"/>Wire Framing</li>
                        </div>
                    </ul>
                    </div>
                </section>
            </main>
                <footer>

                </footer>
            </div>

        )
    }
    componentDidMount(){
        console.log('Home.componentDidMount()')
    }
}
