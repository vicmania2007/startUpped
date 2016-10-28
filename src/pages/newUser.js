"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var preloader = require('../third-party/custom');

var NewUser = React.createClass({
    render: function() {
        return (
			<div id="newUser">
	        	<div className="se-pre-con"></div>
	        	<div className="navbar-fixed">
	            <nav>
	                <div className="nav-wrapper">
	                    <a href="#!" className="brand-logo"><img className="responsive-img" src="images/logo.png"/></a>
	                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
	                    <ul className="right hide-on-med-and-down">
	                        <li><a href="#"><i className="material-icons">search</i></a></li>
	                        <li><a href="#"><i className="material-icons">view_module</i></a></li>
	                        <li><a href="#"><i className="material-icons">refresh</i></a></li>
	                        <li><a href="#!"><i className="material-icons">exit_to_app</i></a></li>
	                    </ul>
	                    <ul className="side-nav" id="mobile-demo">
	                        <li><a className="mob-primary-nav" href="#"><i className="material-icons">search</i>MENU 1</a></li>
	                        <li><a className="mob-primary-nav" href="#"><i className="material-icons">view_module</i>MENU 2</a></li>
	                        <li><a className="mob-primary-nav" href="#"><i className="material-icons">refresh</i>MENU 3</a></li>
	                        <li><a className="mob-primary-nav" href="#"><i className="material-icons">exit_to_app</i>MENU 4</a></li>
	                    </ul></div>
	            </nav></div>
	    		<div className="container">
	        <div className="row">
	            <h3 className="main_head">Howdy !</h3>
	            <h4 className="sub_head">so let's take first step and identify what type of user you are</h4>
	        </div>
	        <div className="row medium_top_margin">
	            <div className="col s12 m4 l4">
	                <div className="card decider-card">
	                    <div className="card-content">
	                        <span className="card-title"><b>Have an idea ?</b></span>
	                        <p>I've a great idea but don't know how to turn it into a business.</p>
	                    </div>
	                    <div className="card-action">
	                        <Link className="card-actionclick" to="/dashboard">Start journey</Link>
	                    </div>
	                </div>
	            </div>
	            <div className="col s12 m4 l4">
	                <div className="card decider-card">
	                    <div className="card-content">
	                        <span className="card-title"><b>Small startup ?</b></span>
	                        <p>We're an existing small startup company and looking to groom our business.</p>
	                    </div>
	                    <div className="card-action">
	                        <Link className="card-actionclick" to="/dashboard">Start journey</Link>
	                    </div>
	                </div>
	            </div>
	            <div className="col s12 m4 l4">
	                <div className="card decider-card">
	                    <div className="card-content">
	                        <span className="card-title"><b>Medium startup ?</b></span>
	                        <p>We're an established startup company, looking to further expand our firm's reach.</p>
	                    </div>
	                    <div className="card-action">
	                        <Link className="card-actionclick" to="/dashboard">Start journey</Link>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div className="row">
	            <div className="col m2 l2"></div>
	            <div className="col s12 m4 l4">
	                <div className="card decider-card">
	                    <div className="card-content">
	                        <span className="card-title"><b>Investor ?</b></span>
	                        <p>I'm an investor looking to invest in conducive startups.</p>
	                    </div>
	                    <div className="card-action">
	                        <Link className="card-actionclick" to="/dashboard">Start journey</Link>
	                    </div>
	                </div>
	            </div>
	            <div className="col s12 m4 l4">
	                <div className="card decider-card">
	                    <div className="card-content">
	                        <span className="card-title"><b>No idea ?</b></span>
	                        <p>Well, I've no idea whatsoever but wondering if there are any opportunities.</p>
	                    </div>
	                    <div className="card-action">
	                        <Link className="card-actionclick" to="/dashboard">Start journey</Link>
	                    </div>
	                </div>
	            </div>
	            <div className="col m2 l2"></div>
	        </div></div>
	        </div>
    	);
	},
	componentDidMount: function() {
		preloader();
	}
});

module.exports = NewUser;

