// Layout of the whole application
/*eslint-disable strict */ //Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var Navbar = require('./navbar');
var Home = require('./landingPage');
var Footer = require('./footer');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Navbar />
				<div>
					<RouteHandler />
				</div>
				<Footer />
			</div>
		);			
	}
});

module.exports = App;