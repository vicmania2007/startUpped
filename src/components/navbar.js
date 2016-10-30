"use strict";

var React = require('react');
var Router = require('react-router');

var Navbar = React.createClass({
    render: function() {
    	return (
    		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		        <header className="mdl-layout__header  primary-navbar">
		            <div className="mdl-layout__header-row">
		                <span className="mdl-layout-title"><img className="res-logo" src="images/logo-light.png " alt="StartUpped"/></span>
		                <div className="mdl-layout-spacer"></div>
		                <nav className="mdl-navigation">
		                    <a className="mdl-navigation__link" href="#"><i className="material-icons">notifications</i></a>
		                    <a className="mdl-navigation__link" href="#"><i className="material-icons">message</i></a>
		                    <a className="mdl-navigation__link" href="#"><i className="material-icons">exit_to_app</i></a>
		                    <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="morebtn">
		                        <i className="material-icons">more_vert</i>
		                    </button>
		                    <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="morebtn">
		                        <li className="mdl-menu__item">TUTORIALS</li>
		                        <li className="mdl-menu__item">CONTACT</li>
		                        <li className="mdl-menu__item">LEGAL INFO</li>
		                    </ul>
		                </nav>
		            </div>
		        </header>
		        <div className="mdl-layout__drawer">
		            <span className="mdl-layout-title"><img className="res-logo" src="images/logo-dark.png" alt="StartUpped"/></span>
		            <nav className="mdl-navigation">
		                <a className="mdl-navigation__link" href="#">NOTIFICATIONS</a>
		                <a className="mdl-navigation__link" href="#about">MESSAGE</a>
		                <a className="mdl-navigation__link" href="#features">TUTORIALS</a>
		                <a className="mdl-navigation__link" href="#subscribe">CONTACT</a>
		                <a className="mdl-navigation__link register-button">LEGAL INFO</a>
		                <a className="mdl-navigation__link login-button">LOGOUT</a>
		            </nav>
		        </div>
    		</div>
		)
    }
});

module.exports = Navbar;