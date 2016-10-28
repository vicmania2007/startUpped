"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var preloader = require('../third-party/custom')

var Dashboard = React.createClass({
	render: function() {
		return (
			<div id="dashboard">
				<div className="se-pre-con"></div>
		
				<div className="navbar-fixed">
	   				<nav>
		        		<div className="nav-wrapper">
				            <a href="#!" className="brand-logo"><img className="responsive-img" src="images/logo.png"/></a>
				            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				            <ul className="right hide-on-med-and-down">
				                <li><a href="#"><i className="material-icons">search</i></a></li>
				                <li><a href="#"><i className="material-icons">view_module</i></a></li>
				                <li><a href="#"><i className="material-icons">refresh</i></a></li>
				                <li><a href="#"><i className="material-icons">exit_to_app</i></a></li>
				            </ul>
				            <ul className="side-nav" id="mobile-demo">
				                <li><a className="mob-primary-nav" href="#"><i className="material-icons">search</i>MENU 1</a></li>
				                <li><a className="mob-primary-nav" href="#"><i className="material-icons">view_module</i>MENU 2</a></li>
				                <li><a className="mob-primary-nav" href="#"><i className="material-icons">refresh</i>MENU 3</a></li>
				                <li><a className="mob-primary-nav" href="#"><i className="material-icons">exit_to_app</i>MENU 4</a></li>
				            </ul>
		        		</div>
	    			</nav></div>

				<ul id="slide-out" className="side-nav fixed">
	    			<li>
		    			<div className="userView">
				        	<img className="background" src="images/usrbkpic.jpg"/>
				        	<img className="circle usrpropic" src="images/user.jpg"/>
				        	<span className="name usrname">Arravind R</span>
				        	<span className="email usremail">aravindram024@gmail.com</span>
		   			 	</div>
	   			 	</li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">dashboard</i>Dashboard</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">lightbulb_outline</i>Ideation</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">network_check</i>Validation</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">art_track</i>Digitalization</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">timeline</i>Analytics</a></li>
				    <li><div className="divider"></div></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">settings</i>Settings</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">account_circle</i>My Account</a></li>
				    <li><a className="waves-effect waves-light sidebar-nav-fnt" href="#!"><i className="material-icons sidebar-nav-ico">new_releases</i>Help</a></li></ul>
				<a href="#" data-activates="slide-out" className="sidebar-nav-collapse"><i className="material-icons">view_compact</i></a>
			</div>
		);
	},
	componentDidMount: function() {
		alert('before component is mounted');
		preloader();
	}

});


module.exports = Dashboard;