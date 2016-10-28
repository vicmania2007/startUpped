"use strict";

var React = require('react');
var Router = require('react-router');
var browserHistory = Router.browserHistory;
var Redirect = Router.Redirect;
var firebase = require('../third-party/Firebase');

var Login = React.createClass({

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
                        <a onClick={this.onLoginClick} class="btn waves-effect waves-light col s12">Login</a>
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