"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Navbar = require('../components/navbar');
var MaterialJS = require('../third-party/material');
var preloader = require('../third-party/custom').preloader;
var userName = "Vignesh - Aravind";

var Dashboard = React.createClass({
	componentWillMount: function() {
        MaterialJS();
    },
	render: function() {
		return (
			<div id="dashboard" className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
					
				<div className="se-pre-con"></div>	

				<Navbar />

      			<div className="mdl-layout__drawer">
			        <header className="drawer-header user-section-sidebar">
			          <img src="images/profile-pic.png" className="user-avatar"/>
			          <div className="avatar-dropdown">
			            <br />
			            <span>{userName}</span>
			            <button id="user-items" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
			              <i className="material-icons" role="presentation">arrow_drop_down</i>
			              <span className="visuallyhidden">Accounts</span>
			            </button>
			            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="user-items">
			              <li className="mdl-menu__item">User Profile</li>
			              <li className="mdl-menu__item">Account Settings</li>
			              <li className="mdl-menu__item">Lock</li>
			            </ul>
			          </div>
			        </header>
			        <nav className="mdl-navigation">
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">dashboard</i>&nbsp;&nbsp;dashboard</a>
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">lightbulb_outline</i>&nbsp;&nbsp;ideation</a>
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">network_check</i>&nbsp;&nbsp;validation</a>
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">art_track</i>&nbsp;&nbsp;digitalization</a>
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">timeline</i>&nbsp;&nbsp;analytics</a>
			          <a className="mdl-navigation__link sidebar-menu-items" href=""><i className="material-icons sidebar-db-icons">new_releases</i>&nbsp;&nbsp;help</a>
			        </nav>
      			</div>
  			</div>
		);
	},
	componentDidMount: function() {
		preloader();
	}
});


module.exports = Dashboard;