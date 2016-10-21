"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
   render: function() {
        return (

            <div id="navbar">
                <nav className="nav-wrp nav-3 navigation_style">
                    <div className="container">
                        <div className="nav-header">
                            <a href=""><img className="logoimg" src="images/logo.png" alt="Brand logo" /></a>
                            <a className="nav-handle fs-touch-element" data-nav=".nav"><i className="fa fa-bars"></i></a>
                        </div>
                        <div className="nav vm-item">
                            <div className="nav-other">
                                <Link to="login" className="btn btn-default btn-sm login_style robofont">Login</Link>
                                <Link to="register" className="btn btn-default btn-sm signup_style robofont"><i className="fa fa-sign-in"></i>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        );
   } 
});

module.exports = Navbar;