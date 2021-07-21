import React from 'react';
import ReactDOM from 'react-dom';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import { Link } from 'react-router-dom/Link';
import './aboutme.css';
// import './pp.jpg';
import pic from './pp.jpg'; // with import
import webots_logo from './webots.png'; // with import
import leocad_logo from './leocad.svg'; // with import
import anime_logo from './anime.svg'; // with import
import react_logo from './react.svg'; // with import
import vue_logo from './vue.svg'; // with import
import heroku_logo from './heroku.svg'; // with import
import springboot_logo from './springboot.svg'; // with import

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
                            <div className="resume-contact-button-section">
                                <div className="resume-button">
                                    <a className="resume-link" href={resume} target='_blank' rel='noopener noreferrer'>View Resume</a>
                                </div>
                                <div className="contact-me-button">
                                    <Link to="/contact">
                                        <a className="contact-me-link">
                                            Contact Me
                                        </a>
                                    </Link>
                                </div>
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
                                    <li className="technical-skills-section-list-element">Vue.js</li>
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
                                    <img className="university-projects-content-entry-tools-image" src={react_logo} />


                                    <img className="university-projects-content-entry-tools-image" src={anime_logo} />


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
                                <div className="university-projects-content-entry-tools">

                                            <img className="university-projects-content-entry-tools-image" src={webots_logo} />
                                            <img className="university-projects-content-entry-tools-image" src={leocad_logo} />
                                
                                </div>
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
                                    <img className="university-projects-content-entry-tools-image" src={vue_logo} />
                                    <img className="university-projects-content-entry-tools-image" src={heroku_logo} />
                                    <img className="university-projects-content-entry-tools-image" src={springboot_logo} />

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
                    <div className="education">
                        <h3 className="education-title">Education</h3>
                        <div className="education-content">
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">Bachelor of Software Engineering</h4>
                                    <h4 className="education-content-entry-date">September 2017 - Present</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>McGill University, Montreal, QC</i></h5>
                            </div>
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">College Diploma in Pure and Applied Sciences</h4>
                                    <h4 className="education-content-entry-date">August 2017</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>Dawson College, Montreal, QC</i></h5>
                            </div>
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">High School Studies Diploma</h4>
                                    <h4 className="education-content-entry-date">June 2015</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>Collège Jean-Eudes, Montreal, QC</i></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutme;
