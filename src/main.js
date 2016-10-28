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
var Login = require('./components/login');
var Register = require('./components/register');
var Dashboard = require('./pages/dashboard');


var app = document.getElementById('app');
REACTDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Landing}/>
   	<Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/newUser" component={NewUser}/>
    <Route path="/dashboard" component={Dashboard}/>
  </Router>
), app);
