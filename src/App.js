import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import PtePractice from './components/pages/PtePractice';
import AboutUs from './components/pages/AboutUs';




function App() {
  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
            <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/blogs' component={Blogs}/>
            <Route path='/pte-practice' component={PtePractice}/>
            <Route path='/about-us' component={AboutUs}/>
            </Switch>
        </Router>
        
    </div>
  );
}

export default App;
