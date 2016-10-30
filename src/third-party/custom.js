"use strict";

var $ = require('jquery');

var custom = {
	
	preloader: function() {
		 $(".se-pre-con").fadeOut("slow");
	},

	loginAndRegisterModal: function() {

	    var dialogButton = document.querySelector('.login-button');
	    var dialog = document.querySelector('#login');
	    if (! dialog.showModal) {
	        dialogPolyfill.registerDialog(dialog);
	    }
	    dialogButton.addEventListener('click', function() {
	        dialog.showModal();
	    });
	    dialog.querySelector('button:not([disabled])')
	            .addEventListener('click', function() {
	                dialog.close();
	    });

    	var dialogButton2 = document.querySelector('.register-button');
    	var dialog2 = document.querySelector('#register');
	    if (! dialog2.showModal) {
	        dialogPolyfill.registerDialog(dialog2);
	    }
	    dialogButton2.addEventListener('click', function() {
	        dialog2.showModal();
	    });
	    dialog2.querySelector('button:not([disabled])')
	            .addEventListener('click', function() {
	                dialog2.close();
        });
    }
};

module.exports = custom;