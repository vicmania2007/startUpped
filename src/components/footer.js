"use strict";

var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <div>
                <section className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <p className="copy-text1">Copyright © 2016 | All Rights Reserved | Startupped.io</p>
                            <p className="copy-text2">Product of <b className="main-color"><i><a href="http://www.techparastat.com" target="_blank">TECHPARASTAT</a></i></b></p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = Footer;