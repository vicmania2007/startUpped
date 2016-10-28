"use strict";

var $ = require('jquery');

var preloader = function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
  // Toggle for primary navigation
  $(".button-collapse").sideNav();
  // Toggle for sidebar navigation
  $(".sidebar-nav-collapse").sideNav({
        menuWidth: 250,
        edge: 'left',
        closeOnClick: false
      }
  );
};

module.exports = preloader;