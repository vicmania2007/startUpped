// Entry point to react

"use strict";

var React = require('react');
var REACTDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

/* load the  landing page */
var Landing = require('./pages/landingPage');
var NewUser = require('./pages/newUser');
var Dashboard = require('./pages/dashboard');
var Questionaire =  require('./pages/questionaire');

var Navbar = require('./components/navbar');
var Journey = require('./components/journey');
var Idea = require('./components/idea');
var Agreement = require('./components/agreement');

var app = document.getElementById('app');
REACTDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Landing}/>
    <Route path="/newUser" component={NewUser}>
    	<IndexRoute component={Journey}/>
    	<Route path="/newUser/questionaire" component={Questionaire}/>
    	<Route path="/newUser/idea" component={Idea}/>
    	<Route path="/newUser/agreement" component={Agreement}/>
    </Route>
    <Route path="/dashboard" component={Dashboard}/>
  </Router>
), app);

// <Route component={Navbar}/>
