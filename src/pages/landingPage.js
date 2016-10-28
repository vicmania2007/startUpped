"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var Landing = React.createClass({
    render: function() {
        return (
            <div id="landingPage">
                <div id="navBar" className="navbar">
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
                    </div></nav></div>
                <div id="content">
                <section className="jumbotron-container" id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m7 hero-section-left">
                                <p className="hero-heading">STARTUP?</p>
                                <p className="hero-content">ONE STOP DESTINATION FOR ALL YOUR STARTUP NEEDS</p>
                                <a className="waves-effect waves-light btn-large startupped-btn"><i className="material-icons right">flight_takeoff</i>GET STARTED</a>
                            </div>
                            <div className="col s10 offset-s1 m5 hero-section-right">
                                <div className="jumbotron-device">
                                    <img className="responsive-img hero-startup-img" src="images/hero-startup-transparentbk.gif" alt="Startup - Build Business" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="new-section" id="about">
                    <div className="container">
                        <div className="row">
                            <h3>Why you should go with <b className="main-color">STARTUPPED</b>?</h3>
                        </div>
                        <div className="row">
                            <div className="col s12 m4 l4">
                                <img src="images/FE-1.png" />
                                    <p className="list-heading">Lorem Ipsum</p>
                                    <p className="list-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className="col s12 m4 l4">
                                <img src="images/FE-2.png" />
                                    <p className="list-heading">Lorem Ipsum</p>
                                    <p className="list-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                            <div className="col s12 m4 l4">
                                <img src="images/FE-3.png" />
                                    <p className="list-heading">Lorem Ipsum</p>
                                    <p className="list-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="new-section" id="features">
                    <div className="container">
                        <div className="row">
                            <h3>Main Features of <b className="main-color">STARTUPPED</b></h3>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <img className="responsive-img feature-img" src="images/idea-curation.png" />
                            </div>
                            <div className="col s12 m6 l6">
                                <p className="feature-heading">Curate Your <b className="main-color">IDEA</b></p>
                                <p className="feature-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <p className="feature-heading">Validate the <b className="main-color">SCOPE</b> of your idea</p>
                                <p className="feature-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="col s12 m6 l6">
                                <img className="responsive-img" src="images/validation.png" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <img className="responsive-img" src="images/analytics.png" />
                            </div>
                            <div className="col s12 m6 l6">
                                <p className="feature-heading">Real Time <b className="main-color">ANALYTICS</b></p>
                                <p className="feature-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 m6 l6">
                                <p className="feature-heading">Grow Your <b className="main-color">BUSINESS</b></p>
                                <p className="feature-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className="col s12 m6 l6">
                                <img className="responsive-img" src="images/startup-growth.png" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="try-sec">
                    <div className="container-fluid">
                        <div className="row">
                            <p className="try-heading">Try <b className="try-sec-b">STARTUPPED</b> Today!</p>
                            <p className="try-content">FREE for limited time only. Join today before the offer ends. <i className="material-icons">timer</i></p>
                            <a className="waves-effect waves-dark btn-large startupped-btn-light"><i className="material-icons right">flight_takeoff</i>GET STARTED</a>
                        </div>
                    </div>
                </section>
                <section className="subscribe-container light-green subscribe-sec" id="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m6 white-text">
                                <p className="subscribe-content"><b className="subscribe-heading">SUBSCRIBE</b> to us, so that we can spam your inbox :-P</p>
                            </div>
                            <div className="col s12 m6 white-text">
                                <div className="row">
                                    <div className="col s12 l8">
                                        <div className="input-field">
                                            <input id="email" type="email" className="validate" />
                                                <label htmlfor="email">Email ID</label>
                                        </div>
                                    </div>
                                    <div className="col s12 l4">
                                        <button className="btn startupped-btn waves-effect waves-light sub-btn" type="submit" name="action">SUBSCRIBE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section></div>
                <div id="footer">
                <section className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <p className="copy-text1">Copyright © 2016 | All Rights Reserved | Startupped.io</p>
                            <p className="copy-text2">Product of <b className="main-color"><i><a href="http://www.techparastat.com" target="_blank">TECHPARASTAT</a></i></b></p>
                        </div>
                    </div>
                </section></div>
            </div>
            
        );
    }
});

module.exports = Landing;