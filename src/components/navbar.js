"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
   render: function() {
        return (
            <div className="navbar">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">FEATURES</a></li>
                            <li><a href="#">SUBSCRIBE</a></li>
                            <li><Link className="modal-trigger" to="register">SIGN UP</Link></li>
                            <li><Link className="modal-trigger" to="login">LOGIN</Link></li>
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">FEATURES</a></li>
                            <li><a href="#">SUBSCRIBE</a></li>
                            <li><a href="#">SIGN UP</a></li>
                            <li><a href="#">LOGIN</a></li>
                            <li><a href="#"><i className="material-icons">keyboard_return</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
   } 
});

module.exports = Navbar;