"use strict";

var React = require('react');

var Register = React.createClass({
    render: function() {
        return (
            <div id="login-page" class="row">
                <div class="col s12 z-depth-6 card-panel">
                  <form class="login-form">
                    <div class="row">
                      <div class="input-field col s12 center">
                        <img src="../images/logo.png" alt="" class="responsive-img valign profile-image-login logolginres" />
                        <p class="center login-form-text">Sign up with your email</p>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-social-person-outline prefix"></i>
                        <input id="username" type="text" class="validate"/>
                        <label for="username" class="center-align">Username</label>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-communication-email prefix"></i>
                        <input id="email" type="email" class="validate"/>
                        <label for="email" class="center-align">Email</label>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-action-lock-outline prefix"></i>
                        <input id="password" type="password" class="validate"/>
                        <label for="password">Password</label>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-action-lock-outline prefix"></i>
                        <input id="password-again" type="password"/>
                        <label for="password-again">Re-type password</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <a href="register.html" class="btn waves-effect waves-light col s12">Register Now</a>
                      </div>
                      <div class="input-field col s12">
                        <p class="margin center medium-small sign-up">Already have an account? <a href="login.html">Login</a></p>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
        );
    }
});

module.exports = Register;