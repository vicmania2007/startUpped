"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var preloader = require('../third-party/custom').preloader;
var Navbar = require('../components/navbar');
var user_name = "Vignesh & Aravind";

var NewUser = React.createClass({
    render: function() {
        return (

			<div id="newUser">

				<Navbar />

				{this.props.children || <Jounrey/>}

			</div>
		);
	},
	componentDidMount: function() {
		preloader();
	}
});

module.exports = NewUser;

