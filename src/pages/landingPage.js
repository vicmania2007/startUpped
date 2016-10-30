"use strict";

var React = require('react');
var Router = require('react-router');
var browserHistory = Router.browserHistory;
var Link = Router.Link;

//Other modules
var MaterialJS = require('../third-party/material');
var loginAndRegisterModal = require('../third-party/custom').loginAndRegisterModal;
var firebase = require('../third-party/Firebase');

var Landing = React.createClass({
    componentWillMount: function() {
        MaterialJS();
    },
    onLoginClick: function() {
        var email = 'vsubramanian90@gmail.com';
        var password = 'vickie123';
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(user) {
              browserHistory.push("/newuser");
            })
            .catch(function(error) {
                  // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
        });
    },
    render: function() {
        return (
            <div id="landingPage">
                    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                        <header className="mdl-layout__header  primary-navbar">
                            <div className="mdl-layout__header-row">
                                <span className="mdl-layout-title"><img className="res-logo" src="images/logov2.png" alt="StartUpped"/></span>
                                <div className="mdl-layout-spacer"></div>
                                <nav className="mdl-navigation">
                                    <a className="mdl-navigation__link" href="#">HOME</a>
                                    <a className="mdl-navigation__link" href="#about">ABOUT</a>
                                    <a className="mdl-navigation__link" href="#features">FEATURES</a>
                                    <a className="mdl-navigation__link" href="#subscribe">SUBSCRIBE</a>
                                    <button id="more-items" className="mdl-button mdl-js-button mdl-button--icon">
                                        <i className="material-icons">more_vert</i>
                                    </button>
                                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu" htmlFor="more-items">
                                        <li className="mdl-menu__item register-button">REGISTER</li>
                                        <li className="mdl-menu__item login-button">LOGIN</li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                        <div className="mdl-layout__drawer">
                            <span className="mdl-layout-title"><img className="res-logo" src="images/logov1.png" alt="StartUpped"/></span>
                            <nav className="mdl-navigation">
                                <a className="mdl-navigation__link" href="#">HOME</a>
                                <a className="mdl-navigation__link" href="#about">ABOUT</a>
                                <a className="mdl-navigation__link" href="#features">FEATURES</a>
                                <a className="mdl-navigation__link" href="#subscribe">SUBSCRIBE</a>
                                <a className="mdl-navigation__link register-button">REGISTER</a>
                                <a className="mdl-navigation__link login-button">LOGIN</a>
                            </nav>
                        </div>
                    </div>

                <div className="mdl-grid hero-bk-img hero-section">
                    <div className="mdl-cell mdl-cell--7-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
                        <p className="hero-heading hero-sec-alignment">STARTUP?</p>
                        <p className="hero-subheading hero-sec-alignment">ONE STOP DESTINATION FOR ALL YOUR <br />STARTUP NEEDS</p>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect hero-sec-alignment hero-sec-btn">GET STARTED&nbsp;&nbsp;<i className="material-icons">flight_takeoff</i></button>
                    </div>
                    <div className="mdl-cell mdl-cell--5-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
                        <img className="hero-startup-img" src="images/hero-startup-transparentbk.gif" />
                    </div>
                </div>

                <div className="mdl-grid" id="about">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h3 className="sec-head">Why you should go with <b className="theme-color">STARTUPPED</b>?</h3>
                    </div>
                </div>
                <div className="mdl-grid cen-align container-width">
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-cell--4-col-tablet">
                        <img src="images/FE-1.png" alt="feature one" />
                        <p className="abt-heading">Lorem Ipsum</p>
                        <p className="abt-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-cell--4-col-tablet">
                        <img src="images/FE-2.png" alt="feature one" />
                        <p className="abt-heading">Lorem Ipsum</p>
                        <p className="abt-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                        <img src="images/FE-3.png" alt="feature one" />
                        <p className="abt-heading">Lorem Ipsum</p>
                        <p className="abt-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>


                <div className="mdl-grid" id="features">
                    <div className="mdl-cell mdl-cell--12-col">
                        <h3 className="sec-head">Main features of <b className="theme-color">STARTUPPED</b></h3>
                    </div>
                </div>
                <div className="mdl-grid container-width">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet cen-align">
                        <img className="responsive-img" src="images/idea-curation.png" />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet ver-align">
                        <p className="feature-heading">Curate Your <b className="theme-color">IDEA</b></p>
                        <p className="feature-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et.</p>
                    </div>
                </div>
                <div className="mdl-grid container-width">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet ver-align">
                        <p className="feature-heading">Validate the <b className="theme-color">SCOPE</b> of your idea</p>
                        <p className="feature-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet cen-align">
                        <img className="responsive-img" src="images/validation.png" />
                    </div>
                </div>
                <div className="mdl-grid container-width">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet cen-align">
                        <img className="responsive-img" src="images/analytics.png" />
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet ver-align">
                        <p className="feature-heading">Real Time <b className="theme-color">ANALYTICS</b></p>
                        <p className="feature-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et.</p>
                    </div>
                </div>
                <div className="mdl-grid container-width">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet ver-align">
                        <p className="feature-heading">Grow your <b className="theme-color">BUSINESS</b></p>
                        <p className="feature-content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab illo inventore veritatis et.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet cen-align">
                        <img className="responsive-img" src="images/startup-growth.png" />
                    </div>
                </div>

                <div className="mdl-grid try-sec" id="try-sec">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                        <p className="try-heading">Try <b className="try-sec-b">STARTUPPED</b> Today!</p>
                        <p className="try-content">FREE for limited time only. Join today before the offer ends. <i className="material-icons">timer</i></p>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect try-btn">
                            GET STARTED <i className="material-icons right">flight_takeoff</i>
                        </button>
                    </div>
                </div>

                <div className="mdl-grid sub-sec" id="subscribe">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet container-width cen-align">
                        <p className="subscribe-content"><b className="theme-color">SUBSCRIBE</b> to us, so that we can spam your inbox :-P</p>
                    </div>
                    <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone mdl-cell--8-col-tablet container-width cen-align">
                        <form action="#">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                <input className="mdl-textfield__input sub-in" type="text" id="sub-field"/>
                                <label className="mdl-textfield__label sub-fld" htmlFor="sub-field">Email</label>
                            </div>
                        </form>
                    </div>
                    <div className="mdl-cell mdl-cell--3-col mdl-cell--4-col-phone mdl-cell--8-col-tablet container-width cen-align">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect hero-sec-alignment sub-btn hero-sec-btn">
                            SUBSCRIBE&nbsp;<i className="material-icons">rss_feed</i></button>
                    </div>
                </div>
                
                <div className="mdl-grid foo-sec" id="footer">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet container-width cen-align">
                        <p className="copy-text1">Copyright © 2016 | All Rights Reserved | Startupped.io</p>
                        <p className="copy-text2">Product of <b className="theme-color"><i><a href="http://www.techparastat.com" target="_blank">TECHPARASTAT</a></i></b></p>
                    </div>
                </div>

                <dialog id="register" className="mdl-dialog register-dialog">
                    <h3 className="mdl-dialog__title dialog-title">REGISTER</h3>
                    <div className="mdl-dialog__content dialog-content">
                        <p>Kindly fill in your details</p>
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input reg-in" type="text" id="first-name-fld"/>
                                        <label className="mdl-textfield__label reg-fld" htmlFor="first-name-fld">First Name</label>
                                    </div>
                            </div>
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input reg-in" type="text" id="last-name-fld"/>
                                        <label className="mdl-textfield__label reg-fld" htmlFor="last-name-fld">Last Name</label>
                                    </div>
                            </div>
                            <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet email-field">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input email-in" type="text" id="email-fld"/>
                                    <label className="mdl-textfield__label email-fld" htmlFor="email-fld">Email</label>
                                </div>
                            </div>
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet pwd-field">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input pwd-in" type="password" id="pwd-fld"/>
                                    <label className="mdl-textfield__label pwd-fld" htmlFor="pwd-fld">Password</label>
                                </div>
                            </div>
                            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet pwd2-field">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input pwd2-in" type="password" id="pwd2-fld"/>
                                    <label className="mdl-textfield__label pwd2-fld" htmlFor="pwd2-fld">Re enter Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-dialog__actions">
                        <button type="button" className="mdl-button dialog-btn">CLOSE</button>
                        <button type="button" className="mdl-button dialog-btn">SIGN UP</button>
                    </div>
                </dialog>

                <dialog id="login" className="mdl-dialog login-dialog">
                    <h3 className="mdl-dialog__title dialog-title">LOGIN</h3>
                    <div className="mdl-dialog__content dialog-content">
                        <p>Enter your credentials</p>
                        <div className="mdl-grid">
                            <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet email-field">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input email-in" type="text" id="email-fld"/>
                                    <label className="mdl-textfield__label email-fld" htmlFor="email-fld">Email</label>
                                </div>
                            </div>
                            <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet pwd-field">
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                    <input className="mdl-textfield__input pwd-in" type="password" id="log-pwd-fld"/>
                                    <label className="mdl-textfield__label pwd-fld" htmlFor="log-pwd-fld">Password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mdl-dialog__actions">
                        <button type="button" className="mdl-button dialog-btn">CLOSE</button>
                        <a onClick={this.onLoginClick}><button type="button" className="mdl-button dialog-btn">LOGIN</button></a>
                    </div>
                </dialog>
            </div>
            
        );
    },
    componentDidMount: function() {
        loginAndRegisterModal();
    }
});

module.exports = Landing;