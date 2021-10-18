import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

class Navbar extends Component {

    componentDidMount() {
        let toggle = document.getElementById("toggleMenu");
        let menu = document.getElementById("navmenu");
        let closeBtn = document.getElementById("closebtn");

        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.toggle("open");
        });

        closeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.remove("open");
        });
    }

    render() {
        return (
            <>
                {/*<nav className="social-media">
                    <div className="container">
                        <h3 id="home" className="m-0"></h3>

                        <a href="https://t.me/nobilitytoken" target="_blank">
                            <img src={require('./content/images/telegram-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://github.com/chasebrownn" target="_blank">
                            <img src={require('./content/images/github-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://twitter.com/nobilitytoken?s=21" target="_blank">
                            <img src={require('./content/images/twitter-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://www.reddit.com/u/nobilitytoken" target="_blank">
                            <img src={require('./content/images/reddit-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://www.instagram.com/nobilitytoken/" target="_blank">
                            <img src={require('./content/images/instagram-logo.png').default} className='social-icons' />
                        </a>
                    </div>
        </nav>*/}


                <div className="custom-nav text-center sticky-top">
                    <div className="container">
                        <div className="d-flex align-items-center custom-navbar flex-column flex-lg-row justify-content-lg-between" id="navmenu">

                            <a href="/" className="navbrand d-none d-lg-inline-block py-3" rel="nofollow">
                                <img src={require('./content/images/ElevateLogo.png').default} className='logo' />
                            </a>

                            <a href="/" className="navbrand d-lg-none text-white mb-5" rel="nofollow" id="closebtn">
                                Close
                            </a>

                            <div className="d-flex flex-column flex-lg-row text-center">
                                <div className="flex-fill">
                                    <a href="/#" className="custom-link px-4 navlink">
                                        Home
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#team" className="custom-link px-4 navlink">
                                        Team
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#team" className="custom-link px-4 navlink">
                                        Services
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#team" className="custom-link px-4 navlink">
                                        Collaborations
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#team" className="custom-link px-4 navlink">
                                        Contact Us
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <div className="btn btn-nav btn-lg">
                                            Get In Touch
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="d-flex d-lg-none justify-content-between align-items-center mobile-menu">
                            <a href="/" className="navbrand text-white">
                                <img src={require('./content/images/nobility-logo1.png').default} className='logo' />
                            </a>
                            <div>
                                <a href="" className="btn btn-link text-white btn-lg px-3 menu-btn" id="toggleMenu">
                                    <i className="fas fa-bars" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar