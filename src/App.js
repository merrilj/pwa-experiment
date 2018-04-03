
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <label htmlFor="telNo">Phone number:</label>
      <input id="telNo" name="telNo" type="tel" style={{width: '75%', margin: '0 auto'}} />

      <label htmlFor="userCam">Open camera:</label>
      <input type="file" id="userCam" name="userCam" accept="image/*" capture="environment" style={{margin: '0 auto'}} />

      <label htmlFor="faceCam">Open face camera:</label>
      <input type="file" id="faceCam" name="faceCam" accept="image/*" capture="user" style={{margin: '0 auto'}} />
      </div>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;