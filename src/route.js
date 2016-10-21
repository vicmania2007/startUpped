"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/landingPage')} />
		<Route name="login" handler={require('./components/login')} />
		<Route name="register" handler={require('./components/register')} />
	</Route>	

);

module.exports = routes;
