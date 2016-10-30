"use strict";

var React = require('react');
var Router = require('react-router');
var browserHistory = Router.browserHistory;
var Link = Router.Link;

var Agreement = React.createClass({
    render: function() {
        return (

        	<div id="agreement">
        		<div className="mdl-grid cen-align chapter-sec container-width">
			        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <h3>Worried about your <b className="theme-color">PRIVACY</b> ?</h3>
			            <p className="privacy-statement">We are committed towards providing you an enriched experience, the information collected from you is to take you in a productive
			                path in your journey. The most important thing is that you must understand that we know your idea is like your child and we'll ensure you it'll be safe.
			                Please read the following statements to get a clear picture.</p>
			        </div>
    			</div>
			    <div className="mdl-grid explaining-security container-width">
			        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <ul className="privacy-points">
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle.</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			                <li>Lorizzle ipsizzle boom shackalack dope amizzle, consectetuer adipiscing gangster. Hizzle sapien velizzle</li>
			            </ul>
			        </div>
    			</div>
			    <div className="mdl-grid cen-align container-width">
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
			                <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input"/>
			                <p className="agree-terms">I agree to the privacy policy and conditions</p>
			            </label>
			        </div>
			        <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <p className="privacy-foo-txt">Let the magic begin !</p>
			            <Link to="/dashboard"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect finish-btn">
			                FINISH
			            </button></Link>
			        </div>
    			</div>
        	</div>
    	)
    }
});

module.exports = Agreement;