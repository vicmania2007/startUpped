"use strict";

var React = require('react');
var Router = require('react-router');
var browserHistory = Router.browserHistory;
var Link = Router.Link;

var Landing = React.createClass({
	render: function() {
		return (
			<div id="questionaire">
				<div className="mdl-grid cen-align chapter-sec container-width">
			        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
			            <h3>Let us know you better so that we can personalize your <b className="theme-color">ENVIRONMENT</b></h3>
			        </div>
    			</div>
		    <div className="mdl-grid container-width idea-box-container">
		        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
		            <div id="ques-one">
		                <p className="question-env-setting">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
		                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
		                    eaque ipsa quae ab illo inventore veritatis et ?</p>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q1-a1">
		                    <input type="checkbox" id="q1-a1" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 1</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q1-a2">
		                    <input type="checkbox" id="q1-a2" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 2</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q1-a3">
		                    <input type="checkbox" id="q1-a3" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 3</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q1-a4">
		                    <input type="checkbox" id="q1-a4" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 4</span>
		                </label>
		            </div>
		            <br />
		            <div id="ques-two">
		                <p className="question-env-setting">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
		                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
		                    eaque ipsa quae ab illo inventore veritatis et ?</p>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q2-a1">
		                    <input type="checkbox" id="q2-a1" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 1</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q2-a2">
		                    <input type="checkbox" id="q2-a2" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 2</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q2-a3">
		                    <input type="checkbox" id="q2-a3" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 3</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q2-a4">
		                    <input type="checkbox" id="q2-a4" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 4</span>
		                </label>
		            </div>
		            <br />
		            <div id="ques-three">
		                <p className="question-env-setting">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
		                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
		                    eaque ipsa quae ab illo inventore veritatis et ?</p>
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q3-a1">
		                    <input type="radio" id="q3-a1" className="mdl-radio__button" name="options" value="1"/>
		                    <span className="mdl-radio__label">Answer 1</span>
		                </label><br />
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q3-a2">
		                    <input type="radio" id="q3-a2" className="mdl-radio__button" name="options" value="2"/>
		                    <span className="mdl-radio__label">Answer 2</span>
		                </label><br />
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q3-a3">
		                    <input type="radio" id="q3-a3" className="mdl-radio__button" name="options" value="3"/>
		                    <span className="mdl-radio__label">Answer 3</span>
		                </label><br />
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q3-a4">
		                    <input type="radio" id="q3-a4" className="mdl-radio__button" name="options" value="4"/>
		                    <span className="mdl-radio__label">Answer 4</span>
		                </label>
		            </div>
		            <br />
		            <div id="ques-four">
		                <p className="question-env-setting">4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
		                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
		                    eaque ipsa quae ab illo inventore veritatis et ?</p>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q4-a1">
		                    <input type="checkbox" id="q4-a1" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 1</span>
		                </label>
		                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="q4-a2">
		                    <input type="checkbox" id="q4-a2" className="mdl-checkbox__input"/>
		                    <span className="mdl-checkbox__label">Answer 2</span>
		                </label>
		            </div>
		            <br />
		            <div id="ques-five">
		                <p className="question-env-setting">5. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
		                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
		                    eaque ipsa quae ab illo inventore veritatis et ?</p>
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q5-a1">
		                    <input type="radio" id="q5-a1" className="mdl-radio__button" name="options" value="1"/>
		                    <span className="mdl-radio__label">Answer 1</span>
		                </label><br />
		                <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="q5-a2">
		                    <input type="radio" id="q5-a2" className="mdl-radio__button" name="options" value="2"/>
		                    <span className="mdl-radio__label">Answer 2</span>
		                </label>
		            </div>
		            <br />
		        </div>
		    </div>
		    <div className="mdl-grid container-width">
		        <div className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone mdl-cell--8-col-tablet mdl-cell--middle">
		            <Link to="/newUser/idea">
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

module.exports = Landing;