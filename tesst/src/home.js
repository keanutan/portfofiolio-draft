// import React from 'react';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import about from "./aboutme.js";
// import contactme from "./contactme.js";
// import projects from "./projects.js";
import './home.css';
import picture from './DSC02062.JPG';


class home extends Component {

    state = {
        hell: false,
    };


    wrapperrTransition = () => {
        console.log("poop");
        this.setState({ hell: true });
    }

    render() {
        // this.wrapperTransition();

        return (
            // <div className="App">
            <div className={(this.state.hell) ? "wrapper-home" : "wrapper-home-white"} onLoad={this.wrapperrTransition}>
                {/* <div className={(this.state.mounted) ? "wrapper" : "wrapper-white"} onLoad={this.setState({mounted: true})}></div> */}
                {/* <Route path="/" exact strict component={home}></Route> */}
                {/* <Route path="/about" exact strict render={about}></Route> */}
                {/* <Route path="/contact" exact strict component={contactme}></Route> */}
                {/* <Route path="/projects" exact strict component={projects}></Route> */}
                <div className="user-info">
                    <img className="profile-picture-home" src={picture} height="300px"/>
                    <h1 className="user-info-element">Keanu Natchev</h1>
                    <h1 className="user-info-element">Software Engineering Student at McGill University</h1>
                </div>
                <div className="menu">
                    <div className="menu-element">
                        <Link className="page-link" to="/about" >
                            <h1 className="page-name">About Me</h1>
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link className="page-link" to="/contact">
                            <h1 className="page-name">Contact</h1>
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link className="page-link" to="/projects">
                            <h1 className="page-name">Projects</h1>
                        </Link>
                    </div>
                </div>
                {/* <h1>Homepage</h1> */}

            </div>
            // </div>
        );
    }
}

export default home;