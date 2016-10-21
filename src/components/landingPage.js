"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
        return (
            <div>
                <section className="intro-section intro-section-3">
                    <div className="overlay full-wh bg-cover bg-cc imagehero">
                    </div>
                    <div className="container">
                        <div className="info-wrp">
                            <h2 className="header_tag robofont">STARTUP?</h2>
                            <div className="item"><h4 className="subheader_tag notofont">ONE STOP DESTINATION FOR ALL YOUR STARTUP NEEDS</h4></div>
                            <img src="images/header-icon-blue.png" alt="App icon" className="app-icon" />
                            <div className="item"><h3 className="underimgheader_tag notofont">THE HOME FOR GREAT STARTUPS</h3></div>
                            <a href="#" className="btn btn-default btn-lg gtstrted robofont">Get Started <i className="fa fa-rocket fasize"></i>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="container ysec">
                    <header className="section-header">
                        <h2 className="robofont yheader shadowmdstyle">Why you should go with StartUpped?</h2>
                    </header>
                    <div className="row">
                        <div className="col-sm-4"> <img src="images/FE-1.png" alt="benefits of product" />
                            <h4 className="robofont ysubheader">Lorem Lpsum</h4>
                            <p className="notofont ydesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className="col-sm-4"> <img src="images/FE-2.png" alt="benefits of product" />
                            <h4 className="robofont ysubheader">Lorem Lpsum</h4>
                            <p className="notofont ydesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                        <div className="col-sm-4"> <img src="images/FE-3.png" alt="benefits of product" />
                            <h4 className="robofont ysubheader">Lorem Lpsum</h4>
                            <p className="notofont ydesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
                <div id="gtstrtd" className="tryCTA">
                    <div className="container-fluid">
                        <header className="section-header">
                            <h2 className="robofont tryhead shadowmdstyle">Try StartUpped Today!</h2>
                            <h3 className="notofont trydesc">Free for limited time only. Join today before the offer ends <i className="fa fa-clock-o"></i></h3>
                        </header>
                        <div className="row">
                            <div className="col-md-12">
                                <a href="#" className="btn btn-default btn-lg gtstrted robofont getstartedCTA">Get Started <i className="fa fa-rocket fasize"></i>
                                </a>
                                <p className="notofont trycontact" id="contact">Have a question? Contact us via support@samplemail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="feature-section feature-section-4">
                    <div className="full-wh w-50 bg-section"><img src="images/screen-img3.png" className="img-responsive" alt="Screen image" /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="content">
                                    <h2 className="title shadowmdstyle">Features display section</h2>
                                    <p className="title-sub">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam nonumyeirmod tempor invidunt ut labore etdolore.
                                    </p>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="info-box info-box5">
                                                <div className="img"><i className="fa fa-television facolor"></i></div>
                                                <div className="info">
                                                    <h2 className="hd">Lorem ipsum dolor</h2>
                                                    <p className="sub-txt">Lorem ipsum dolor sit ametconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="info-box info-box5">
                                                <div className="img"><i className="fa fa-object-group facolor"></i></div>
                                                <div className="info">
                                                    <h2 className="hd">Lorem ipsum dolor</h2>
                                                    <p className="sub-txt">Lorem ipsum dolor sit ametconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="info-box info-box5">
                                                <div className="img"><i className="fa fa-map-o facolor"></i></div>
                                                <div className="info">
                                                    <h2 className="hd">Lorem ipsum dolor</h2>
                                                    <p className="sub-txt">Lorem ipsum dolor sit ametconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="info-box info-box5">
                                                <div className="img"><i className="fa fa-diamond facolor"></i></div>
                                                <div className="info">
                                                    <h2 className="hd">Lorem ipsum dolor</h2>
                                                    <p className="sub-txt">Lorem ipsum dolor sit ametconsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </section>
                <section className="slider-section slider-section-2">
                    <div className="container">
                        <h2 className="title shadowmdstyle">Check Out Product's Features</h2>
                        <p className="title-sub">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr diam nonumy<br />
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                    </div>
                    <div className="carousel-widget zoom-carousel ctrl-1" id="carousel-widget" data-nav="true" data-pager="true" data-itemrange="0,1|420,1|600,2|768,3|992,4|1200,6" data-margin="0" data-hauto="false" data-center="true">
                        <div className="owl-carousel">

                            <div className="item">
                                <div className="content anim"><img src="images/app-img1.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img2.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img3.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img4.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img5.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img6.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img7.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img8.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img9.jpg" alt="App image" /></div>
                            </div>

                            <div className="item">
                                <div className="content anim"><img src="images/app-img10.jpg" alt="App image" /></div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="form-section form-section-1 formsecstyle">
                    <div className="container">
                        <h2 className="title medium mr-b-10 robofont formtitle shadowmdstyle">Always be the first to know</h2>
                        <p className="title-sub medium notofont formsignup">Sign up for our newsletter!</p>
                        <form action="#" method="post" data-form="notify" id="subscribe" novalidate>
                            <input className="form-control mailstyle" type="email" name="email" id="email" placeholder="Enter your email" />
                                <button type="submit" id="submit" data-loading-text="Pleae wait.." className="btn subbtn robofont"><i className="fa fa-envelope-o"></i> Subscribe now</button>
                                <div className="msg-wrp"></div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = Home;