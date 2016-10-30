"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Journey = React.createClass({
	render: function() {
    	return (
    		<div id="journey">
    			<div className="mdl-grid cen-align chapter-sec">
			        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <h3 className="theme-color">Howdy {/*user_name*/} !</h3>
			            <h4>so let's take first step and identify what type of user you are</h4>
			        </div>
    			</div>
			    <div className="mdl-grid container-width">
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <div className="mdl-card mdl-shadow--3dp chapter-card have-idea-chapter">
			                <div className="mdl-card__title">
			                    <h2 className="mdl-card__title-text card-title">Have an idea ?</h2>
			                </div>
			                <div className="chapter-card-content">
			                    I've a great idea but don't know how to turn it into a business.
			                </div>
			                <div className="mdl-card__actions mdl-card--border cen-align">
			                    <Link className="mdl-button mdl-js-button mdl-js-ripple-effect theme-color" to="/newuser/questionaire">
			                        START JOURNEY
			                    </Link>
			                </div>
			            </div>
			        </div>
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <div className="mdl-card mdl-shadow--3dp chapter-card existing-startup-chapter">
			                <div className="mdl-card__title">
			                    <h2 className="mdl-card__title-text card-title">Existing startup ?</h2>
			                </div>
			                <div className="chapter-card-content">
			                    We're a small startup and looking to groom our business.
			                </div>
			                <div className="mdl-card__actions mdl-card--border cen-align">
			                    <Link className="mdl-button mdl-js-button mdl-js-ripple-effect theme-color" to="/newuser/questionaire">
			                        START JOURNEY
			                    </Link>
			                </div>
			            </div>
			        </div>
			    </div>
			    <div className="mdl-grid container-width">
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <div className="mdl-card mdl-shadow--3dp chapter-card investor-chapter">
			                <div className="mdl-card__title">
			                    <h2 className="mdl-card__title-text card-title">Investor ?</h2>
			                </div>
			                <div className="chapter-card-content">
			                    I'm an investor looking to invest in conducive startups.
			                </div>
			                <div className="mdl-card__actions mdl-card--border cen-align">
			                    <Link className="mdl-button mdl-js-button mdl-js-ripple-effect theme-color" to="/newuser/questionaire">
			                        START JOURNEY
			                    </Link>
			                </div>
			            </div>
			        </div>
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <div className="mdl-card mdl-shadow--3dp chapter-card no-idea-chapter">
			                <div className="mdl-card__title">
			                    <h2 className="mdl-card__title-text card-title">No idea ?</h2>
			                </div>
			                <div className="chapter-card-content">
			                    I've no idea but wondering if there are any opportunities.
			                </div>
			                <div className="mdl-card__actions mdl-card--border cen-align">
			                    <Link className="mdl-button mdl-js-button mdl-js-ripple-effect theme-color" to="/newuser/questionaire">
			                        START JOURNEY
			                    </Link>
			                </div>
			            </div>
			        </div>
			    </div>
		    </div>
		)
	}
});

module.exports = Journey;