import React from 'react';
import ReactDOM from 'react-dom';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import { Link } from 'react-router-dom/Link';
import './aboutme.css';
// import './pp.jpg';
import pic from './pp.jpg'; // with import
import resume from './Natchev_Keanu_Resume.pdf';
import react from './react.png'


class aboutme extends Component {

    // constructor(props) {
    //     super(props)
    //     this.myRef = React.createRef()
    //     this.state = { scrollTop: 0 }
    // }


    // function aboutme() {

    state = {
        mounted: false,
        intro: false,
        burger: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        outOfRange: false,
        p: window.pageYOffset
    };

    handleBurgerClick = () => {
        this.setState({ burger: !this.state.burger });
    }



    revealScroll = () => {

        if (window.pageYOffset > 400) {
            this.setState({ outOfRange: true });
        }
        else {
            this.setState({ outOfRange: false });
        }



    }

    goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // window.scrollToTop();
    }




    // wrapperTransition = () => {
    //     this.setState({ intro: true });
    // }

    // componentDidMount() {
    //     this.setState({mounted: true});
    // }
    // componentWillUnmount() {
    //     this.setState({mounted: false});
    // }


    wrapperTransition = () => {
        console.log("poop");
        this.setState({ mounted: true });
    }


    // componentDidMount() {
    //     for (let index = 0; index < 10000; index++) {
    //         // const element = array[index];
    //         console.log("poop");

    //     }
    //     setTimeout(this.setState({ mounted: true }), 2000);
    // }

    // componentWillUnmount() {

    //     for (let index = 0; index < 10000; index++) {
    //         // const element = array[index];
    //         console.log("poop");

    //     }
    //     setTimeout(this.setState({ mounted: false }), 2000);
    // }

    render() {
        window.onscroll = () => {
            this.revealScroll();
            console.log("ff");
        }

        // window.onclick = () => {
        //     this.wrapperTransition();
        // }
        // window.DOMContentLoaded
        // document.getElementById("#ppp")[0].onload = () => {
        //     console.log("poop");
        // }
        // window.onload = () => {
        //     this.wrapperTransition();
        // }

        // this.componentDidMount() {
        //     this.setState({mounted: true});
        // }
        // this.componentWillUnmount() {
        //     this.setState({mounted: false});
        // }
        // this.componentDidMount();
        // this.componentWillUnmount();

        return (

            <div className={(this.state.mounted) ? "wrapper" : "wrapper-white"} onLoad={this.wrapperTransition}>
                <h3 className="title">About Me</h3>
                <div className={(this.state.outOfRange) ? "scroll-to-top" : "scroll-to-top-hidden"} onClick={this.goToTop}>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </div>
                <nav className="navbar">
                    <div className="burger" onClick={this.handleBurgerClick}>

                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                    </div>
                    <ul className={(this.state.burger) ? "mo" : "mm"}>
                        <li>
                            <a>
                                <Link to="/">
                                    <h1 className="page-title">Home</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/about">
                                    <h1 className="page-title">About Me</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/contact">
                                    <h1 className="page-title">Contact</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/projects">
                                    <h1 className="page-title">Projects</h1>
                                </Link>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="about-user-info">
                    <div className="about-user-info-picture">
                        <img className="profile-picture" src={pic} />
                    </div>
                    <div className="about-user-info-text-container">
                        <div className="about-user-info-text">
                            <p>
                                Hello there,
                            </p>
                            <p>
                                I'm Keanu Natchev
                            </p>
                            <p>
                                Software Engineering Student at McGill University completing my third year.
                            </p>
                            <p>
                                I am a very passionate about software development and design which you can check out by looking at projects I have completed in the past.
                            </p>
                            <div className="resume-button">
                                <a className="resume-link" href={resume} target='_blank' rel='noopener noreferrer'>View Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-user-info-resume">
                    <div className="technical-skills">
                        <h3 className="technical-skills-title">Technical Skills</h3>
                        <div className="technical-skills-content">
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Programming Languages</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Java</li>
                                    <li className="technical-skills-section-list-element">C</li>
                                    <li className="technical-skills-section-list-element">Python</li>
                                    <li className="technical-skills-section-list-element">Javascript</li>
                                    <li className="technical-skills-section-list-element">VHDL</li>
                                    <li className="technical-skills-section-list-element">ARM Assembly</li>
                                    <li className="technical-skills-section-list-element">BASH</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Tools</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Git</li>
                                    <li className="technical-skills-section-list-element">Cucumber.js</li>
                                    <li className="technical-skills-section-list-element">Linux</li>
                                    <li className="technical-skills-section-list-element">Gradle</li>
                                    <li className="technical-skills-section-list-element">Spring Boot</li>
                                    <li className="technical-skills-section-list-element">Heroku</li>
                                    <li className="technical-skills-section-list-element">Maven</li>
                                    <li className="technical-skills-section-list-element">Travis CI</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Frameworks</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">React.js</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Development Environments</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Visual Studio Code</li>
                                    <li className="technical-skills-section-list-element">Eclipse</li>
                                    <li className="technical-skills-section-list-element">Adobe Dreamweaver</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Other</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Figma</li>
                                    <li className="technical-skills-section-list-element">Adobe Photoshop</li>
                                    <li className="technical-skills-section-list-element">Adobe Premiere Pro</li>
                                    <li className="technical-skills-section-list-element">MS Office Suite</li>
                                    <li className="technical-skills-section-list-element">Webots</li>
                                    <li className="technical-skills-section-list-element">LeoCAD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-experience">
                        <h3 className="work-experience-title">Work Experience</h3>
                        <div className="work-experience-content">
                            <div className="work-experience-content-entry">
                                <h4 className="work-experience-content-entry-title">Freelance Shopify Website Template Customization</h4>
                                <h4 className="work-experience-content-entry-date">March 2021</h4>
                                <ul className="work-experience-content-entry-list">
                                    <li className="work-experience-content-entry-list-element">Worked with owner of <strong>cimerestudio.com</strong> to customize website by working on <strong>CSS</strong> and <strong>Liquid</strong> files.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="personal-projects">
                        <h3 className="personal-projects-title">Personal Projects</h3>
                        <div className="personal-projects-content">
                            <div className="personal-projects-content-entry">
                                <h4 className="personal-projects-content-entry-title">Binary Search Tree Visualizer</h4>
                                <h4 className="personal-projects-content-entry-date">December 2020</h4>
                                <ul className="personal-projects-content-entry-list">
                                    <li className="personal-projects-content-entry-list-element">Built a Binary Search Tree Visualizer <strong>Java Applet</strong> using <strong>VSCode</strong>.</li>
                                    <li className="personal-projects-content-entry-list-element" >Implemented features such as adding/removing nodes, generating random trees, and traversal animations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="university-projects">
                        <h3 className="university-projects-title">University Projects</h3>
                        <div className="university-projects-content">
                            <div className="university-projects-content-entry">
                                <div className="university-projects-content-entry-title-date-section">
                                    <h4 className="university-projects-content-entry-title">Data Structure and Algorithm Visualization Website</h4>
                                    <h4 className="university-projects-content-entry-date">September 2020 - December 2020</h4>
                                </div>
                                <h5 className="university-projects-content-entry-class-title"><i>Software Engineering Practice (COMP 310 & ECSE 427)</i></h5>
                                <ul className="university-projects-content-entry-list">
                                    <li className="university-projects-content-entry-list-element">Worked in an <strong>agile environment</strong> using <strong>SCRUM</strong> (team of 8 people) to create a simple website application to visualize
                                        sorting algorithms applied to data structures (stacks, queues, arrays, singly and doubly linked lists) with animations to
                                        demonstrate algorithms using the <strong>React.js</strong> framework, <strong>Anime.js</strong> for animations, and <strong>GitHub</strong> for version control.</li>
                                    <li className="university-projects-content-entry-list-element" >Worked on the <strong>Array</strong> and <strong>Doubly Linked List</strong> data structure pages of the website.</li>
                                </ul>
                                <div className="university-projects-content-entry-tools">
                                    {/* <img className="university-projects-content-entry-tools-image" src={react}></img> */}

                                    <svg className="university-projects-content-entry-tools-image" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                                        <title>React Logo</title>
                                        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                                        <g stroke="#61dafb" stroke-width="1" fill="none">
                                            <ellipse rx="11" ry="4.2" />
                                            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                                            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                                        </g>
                                    </svg>

                                    <svg className="university-projects-content-entry-tools-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 240">
                                        <g id="anime-mini-logo" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                            <path id="Path-18-Copy-66" stroke="#F6F4F2" stroke-width="40" d="M30 20h130c9.996 0 10 40 10 60v140H41c-11.004 0-11-40-11-60s-.004-60 10-60h110" />
                                            <path id="Path-18-Copy-67" stroke="#F6F4F2" stroke-width="40" d="M850 140h110c10 0 10-40 10-60s0-60-10-60H840c-10 0-10 40-10 60v80c0 20 0 60 10 60h130" />
                                            <path id="Path-18-Copy-68" stroke="#F6F4F2" stroke-width="40" d="M430 100v120" />
                                            <path id="Path-18-Copy-69" stroke="#F6F4F2" stroke-width="40" d="M430 20.2v.6" />
                                            <path id="Path-18-Copy-71" stroke="#F6F4F2" stroke-width="40" d="M370 220V80c0-20 0-60-10-60H240c-10 0-10 40-10 60v140" />
                                            <path id="Path-18-Copy-74" stroke="#F6F4F2" stroke-width="40" d="M770 220V80c0-20 0-60-10-60H500c-10 0-10 40-10 60v140" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className="university-projects-content-entry">
                                <div className="university-projects-content-entry-title-date-section">
                                    <h4 className="university-projects-content-entry-title">Lego EV3 Mindstorms Robot</h4>
                                    <h4 className="university-projects-content-entry-date">September 2020 - December 2020</h4>
                                </div>
                                <h5 className="university-projects-content-entry-class-title"><i>Design Principles and Methods (ECSE 211)</i></h5>
                                <ul className="university-projects-content-entry-list">
                                    <li className="university-projects-content-entry-list-element">Worked in a design team of 6 to develop a robot that navigated in a <strong>Webots</strong> virtual environment to specific locations.</li>
                                    <li className="university-projects-content-entry-list-element">Was responsible for the hardware design development in <strong>LeoCAD/Webots</strong> as well as the <strong>hardware documentation</strong>.</li>
                                    <li className="university-projects-content-entry-list-element">Implemented the localization class of the robot controller in <strong>Java</strong> and optimized <strong>threading</strong> between all other classes.</li>
                                </ul>
                                <div className="university-projects-content-entry-tools"></div>
                            </div>
                            <div className="university-projects-content-entry">
                                <div className="university-projects-content-entry-title-date-section">
                                    <h4 className="university-projects-content-entry-title">Event Registration System</h4>
                                    <h4 className="university-projects-content-entry-date">January 2020 - April 2020</h4>
                                </div>
                                <h5 className="university-projects-content-entry-class-title"><i>Introduction to Software Engineering (ECSE 321)</i></h5>
                                <ul className="university-projects-content-entry-list">
                                    <li className="university-projects-content-entry-list-element">Created a website application to register events with specified dates and time, attending people, performing artists, and a Google payment option.</li>
                                    <li className="university-projects-content-entry-list-element">Used <strong>UML Lab</strong> for domain modeling, <strong>Heroku</strong> for database deployment, and <strong>Travis CI</strong> for continuous integration testing.</li>
                                    <li className="university-projects-content-entry-list-element">Implemented the backend using <strong>RESTful</strong> services, <strong>Java Spring Boot</strong>, and <strong>Gradle</strong>.</li>
                                    <li className="university-projects-content-entry-list-element">Implemented the website’s frontend with <strong>Vue.js</strong>, <strong>NPM</strong>, and <strong>JavaScript</strong>.</li>
                                </ul>
                                <div className="university-projects-content-entry-tools">
                                    <svg className="university-projects-content-entry-tools-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
                                        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883" />
                                        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e" />
                                    </svg>
                                    <svg className="university-projects-content-entry-tools-image" width="62" height="11" viewBox="0 0 62 11" xmlns="http://www.w3.org/2000/svg"><title>HEROKU</title><path d="M0 9.802h2.6V5.915h3.198v3.887h2.6V.182h-2.6v3.575H2.6V.182H0v9.62zm11.374 0h7.085V7.709h-4.485V5.928h3.042V3.9h-3.042V2.34h4.264V.182h-6.864v9.62zm9.567 0h2.548V6.461h.715l1.859 3.341h2.756l-2.041-3.679c1.26-.429 1.898-1.3 1.898-2.808 0-2.314-1.508-3.133-3.978-3.133H20.94v9.62zm2.548-5.317V2.288h1.118c1.066 0 1.534.286 1.534 1.092s-.468 1.105-1.534 1.105h-1.118zm12.257 5.499c2.314 0 4.72-1.469 4.72-4.992C40.465 1.469 38.06 0 35.745 0c-2.327 0-4.732 1.469-4.732 4.992 0 3.523 2.405 4.992 4.732 4.992zm0-2.08c-1.365 0-2.132-1.144-2.132-2.912s.767-2.847 2.132-2.847c1.352 0 2.12 1.079 2.12 2.847s-.768 2.912-2.12 2.912zm7.24 1.898h2.6v-2.99l.741-.858 2.275 3.848h2.938l-3.523-5.824L51.254.182h-3.016l-2.652 3.484V.182h-2.6v9.62zm14.624.143c2.808 0 4.03-1.456 4.03-4.004V.182h-2.548v5.746c0 1.326-.416 1.924-1.456 1.924s-1.469-.598-1.469-1.924V.182h-2.6v5.759c0 2.548 1.235 4.004 4.043 4.004z" fill="%238460AA" fill-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className="university-projects-content-entry">
                                <div className="university-projects-content-entry-title-date-section">
                                    <h4 className="university-projects-content-entry-title">Quoridor (board game) application</h4>
                                    <h4 className="university-projects-content-entry-date">September 2019 - December 2019</h4>
                                </div>
                                <h5 className="university-projects-content-entry-class-title"><i>Model-Based Programming (ECSE 223)</i></h5>
                                <ul className="university-projects-content-entry-list">
                                    <li className="university-projects-content-entry-list-element">Created a Java application of the boar game of Quoridor in a team of 6 using the <strong>model-view-controller</strong> design pattern.</li>
                                    <li className="university-projects-content-entry-list-element">Implemented a load screen where the user can create a new username or select an existing username, start a new game, or continue an existing game.</li>
                                    <li className="university-projects-content-entry-list-element">Implemented a playback feature to watch saved games from start to finish.</li>
                                    <li className="university-projects-content-entry-list-element">Used <strong>Umple</strong> with <strong>UML Model</strong> for code generation, <strong>Gherkin</strong> for writing testing scenarios, <strong>Cucumber</strong> for running test suites, and <strong>Java Swing/2D</strong> for the development of the user interface.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutme;
