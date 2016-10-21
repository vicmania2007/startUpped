"use strict";

var React = require('react');

var Footer = React.createClass({
	render: function() {
		return (
            <div id="footer">
            <footer className="site-footer text-center footerstylz">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <p className="robofont footer-links foolink"><a href="">Terms of Use</a> <a href="">Privacy Policy</a></p>
                    </div>
                <div className="col-md-4">
                    <p className="robofont cpyright">Copyright © 2016 StartUpped. All rights reserved. This product belongs to TechParastat.</p>
                </div>
                <div className="col-md-4">

                    <ul className="social">
                        <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube-play"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
		);
	}
});

module.exports = Footer;