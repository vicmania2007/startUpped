"use strict";

var React = require('react');
var Router = require('react-router');
var browserHistory = Router.browserHistory;
var Link = Router.Link;

var Idea = React.createClass({
    render: function() {
        return (
            <div id="idea">
                <div className="mdl-grid cen-align chapter-sec container-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
                        <h3>Please provide a short description about your <b className="theme-color">IDEA</b></h3>
                    </div>
                </div>
                <div className="mdl-grid cen-align container-width idea-box-container">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
                        <form action="#">
                            <div className="mdl-textfield mdl-js-textfield idea-content-box">
                                <textarea className="mdl-textfield__input" type="text" rows= "15" id="idea-box" ></textarea>
                                <label className="mdl-textfield__label" htmlFor="idea-box">Give a brief explanation about your idea...</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mdl-grid container-width">
                    <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
                        <Link to="/newUser/agreement">
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect next-btn">
                            NEXT
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Idea;


