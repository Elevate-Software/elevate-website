import React from 'react'
import './Footer.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <div className="container">
        <div className="row">
              <div className="col-md-12">
                  <footer className="footer">				
              <div className="container">
                  <div className="row">
                      <div className="col-md-3 m-b-30">
                      <img src={require('./content/images/ElevateLogo.png').default} className='footer-logo' />
                          <p className="footer-white-text">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
                          </p>
                          <div >
                                  <a href="#">
                                  <img src={require('./content/images/facebook.svg').default} className='social-logo' />
                                  </a>
                                  <a href="#">
                                  <img src={require('./content/images/twitter.svg').default} className='social-logo' />
                                  </a>
                                  <a href="#">
                                  <img src={require('./content/images/instagram.svg').default} className='social-logo' />
                                  </a>
                                  <a href="#">
                                  <img src={require('./content/images/instagram.svg').default} className='social-logo' />
                                  </a>
                          </div>
                      </div>
                      <div className="col-md-3 m-b-30 links-column">
                          <div className="footer-title m-t-5 m-b-20 p-b-8">
                              Resources
                          </div>	
                          <div className="footer-links">
                              <a href="#">
                                  Download
                              </a>
                              <a href="#">
                                  Help Center
                              </a>
                              <a href="#">
                                  Events
                              </a>
                              <a href="#">
                                  Guides
                              </a>
                              <a href="#">
                                  Partner
                              </a>
                              <a href="#">
                                  Directories
                              </a>
                          </div>
                      </div>
                      <div className="col-md-3 m-b-30 links-column">
                          <div className="footer-title m-t-5 m-b-20 p-b-8">
                              Company
                          </div>	
                          <div className="footer-links">
                              <a href="#">
                                  About us
                              </a>
                              <a href="#">
                                  Contact us
                              </a>
                              <a href="#">
                                  Products
                              </a>
                              <a href="#">
                                  Login
                              </a>
                              <a href="#">
                                  Sign Up
                              </a>
                              <a href="#">
                                  FAQ
                              </a>
                          </div>
                      </div>
                      <div className="col-md-3 m-b-30">
                          <div className="footer-title m-t-5 m-b-20 p-b-8">
                              Get in Touch with Us
                          </div>	
                          <div className="footer-links">
                              <a href="#">
                                 832  Thompson, San Fransisco
                                CA 94107, United States
                              </a>
                              <a href="#">
                                 394-091-3312
                              </a>
                              <a href="#">
                                support@elevate.com
                              </a>
                          </div>
      

                      </div>
                  </div>
              </div>
          </footer>
          <div className="footer-bottom">
              Copyright © 2021, All Rights Reserved
          </div>
              </div>
          </div>
      </div>
    );
}

export default Footer