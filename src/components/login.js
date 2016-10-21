"use strict";

var React = require('react');

var Login = React.createClass({
   render: function() {
        return (
              <div id="login-page" class="row">
                <div class="col s12 z-depth-6 card-panel">
                  <form class="login-form">
                    <div class="row">
                      <div class="input-field col s12 center">
                        <img src="../images/logo.png" alt="" class="responsive-img valign profile-image-login logolginres" />
                        <p class="center login-form-text">Enter your email and password to login</p>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-social-person-outline prefix"></i>
                        <input class="validate" id="email" type="email"/>
                        <label for="email" data-error="wrong" data-success="right" class="center-align">Email</label>
                      </div>
                    </div>
                    <div class="row margin">
                      <div class="input-field col s12">
                        <i class="mdi-action-lock-outline prefix"></i>
                        <input id="password" type="password"/>
                        <label for="password">Password</label>
                      </div>
                    </div>
                    <div class="row">          
                      <div class="input-field col s12 m12 l12  login-text">
                          <input type="checkbox" id="remember-me" />
                          <label for="remember-me">Remember me</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s12">
                        <a href="login.html" class="btn waves-effect waves-light col s12">Login</a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="input-field col s6 m6 l6">
                        <p class="margin medium-small"><a href="register.html">Register Now!</a></p>
                      </div>
                      <div class="input-field col s6 m6 l6">
                          <p class="margin right-align medium-small"><a href="forgot-password.html">Forgot password?</a></p>
                      </div>          
                    </div>

                  </form>
                </div>
              </div>
        );
   } 
});

module.exports = Login;
// <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>