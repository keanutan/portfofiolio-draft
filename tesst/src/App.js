import logo from './logo.svg';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import About from "./aboutme";
import Contact from "./contactme";
// import { Link } from 'react-router-dom/Link';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        {/* <Route path="/contact" exact component={Contact}></Route>
        <Route path="/projects" exact component={Projects}></Route> */}
      </Switch>
      {/* <Route path="/home" exact strict component={home}></Route>
      <div className="App">
        <Route path="/" exact strict render={
          () => {
            return (
              <div>
                <h1>Homepage</h1>
                <Link to="/poop" >POOP</Link>
              </div>
            );
          }
        } />
        <Route path="/poop" exact strict render={
          () => {
            return (
              <div>
                <h1>Poop</h1>
                <Link to="/home" >Home</Link>
              </div>
            );
          }
        } />
      </div> */}
    </Router>
  );
}

export default App;
