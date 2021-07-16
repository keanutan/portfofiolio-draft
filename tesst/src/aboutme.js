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


class aboutme extends Component {

    // constructor(props) {
    //     super(props)
    //     this.myRef = React.createRef()
    //     this.state = { scrollTop: 0 }
    // }


    // function aboutme() {

    state = {
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
            this.setState({outOfRange: true });
        }
        else {
            this.setState({outOfRange: false});
        }



    }

    goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // window.scrollToTop();
    }








    render() {
        window.onscroll = () => {
            this.revealScroll();
            console.log("ff");
        }

        return (
            <div className="wrapper-wrapper" onScroll={this.revealScroll}>

                <div className="wrapper">
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
                    <div className="about-user-info">
                        <div className="technical-skills">
                            <h3 className="technical-skills-title">Technical Skills</h3>
                            <div className="technical-skills-content">
                                <div className="programming-languages">
                                    <ul className="programming-languages-list">
                                        <li className="programming-languages-element">Java</li>
                                        <li className="programming-languages-element">C</li>
                                        <li className="programming-languages-element">Python</li>
                                        <li className="programming-languages-element">Javascript</li>
                                        <li className="programming-languages-element">VHDL</li>
                                        <li className="programming-languages-element">ARM Assembly</li>
                                        <li className="programming-languages-element">BASH</li>
                                    </ul>
                                </div>
                                <div className="tools">
                                <ul className="tools-list">
                                        <li className="tools-element">Git</li>
                                        <li className="tools-element">Cucumber.js</li>
                                        <li className="tools-element">Linux</li>
                                        <li className="tools-element">Gradle</li>
                                        <li className="tools-element">Spring Boot</li>
                                        <li className="tools-element">Heroku</li>
                                        <li className="tools-element">Maven</li>
                                        <li className="tools-element">Travis CI</li>
                                    </ul>
                                </div>
                                <div className="frameworks"></div>
                                <div className="development-environments"></div>
                                <div className="other-software"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        // }
    }
}

export default aboutme;
