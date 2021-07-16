import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import about from "./aboutme.js";
import contactme from "./contactme.js";
import projects from "./projects.js";
import './home.css';

function Home() {
    return (
        <div className="App">
            <div className="wrapper-home">
                {/* <Route path="/" exact strict component={home}></Route> */}
                {/* <Route path="/about" exact strict render={about}></Route> */}
                {/* <Route path="/contact" exact strict component={contactme}></Route> */}
                {/* <Route path="/projects" exact strict component={projects}></Route> */}
                <div className="user-info">
                    <h1 className="user-info-element">Keanu Natchev</h1>
                    <h1 className="user-info-element">Software Engineering Student at McGill University</h1>
                </div>
                <div className="menu">
                    <div className="menu-element">
                        <Link to="/about">
                            <h1>About Me</h1>
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/contact">
                            <h1>Contact</h1>
                        </Link>
                    </div>
                    <div className="menu-element">
                        <Link to="/projects">
                            <h1>Projects</h1>
                        </Link>
                    </div>
                </div>
                {/* <h1>Homepage</h1> */}

            </div>
        </div>
    );
}

export default Home;
