import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment> 
        <footer className="footer-section">
          <div
            className={"footer-top " + (this.props.noSubscription ? 'py-5' : 'pt-150 pb-5')} 
            style={{
              backgroundColor: "#202020",
              paddingTop:"7.5vh"
            }}
          > 
            <div className="container">
              <div className="row justify-content-between">

                <div className="col-lg-3 mb-3 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <img
                      src="../img/lghx/Lghx-Logo-White.svg"
                      alt="footer logo"
                      width="180"
                      className="img-fluid mb-3"
                    />
                    <p>
                      Problem solving for the digital age. 
                    </p>

                    {/* 
                    <div className="social-list-wrap">
                      <ul className="social-list list-inline list-unstyled">
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Facebook">
                            <span className="ti-facebook"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Twitter">
                            <span className="ti-twitter"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="Instagram">
                            <span className="ti-instagram"></span>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/#" target="_blank" title="printerst">
                            <span className="ti-pinterest"></span>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div> 
                </div> 

                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-3 text-white spaced-text">Links.</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <a href="#hero">About us</a>
                      </li>
                      <li className="mb-2">
                        <a href="#features">Services</a>
                      </li>
                      {/* <li className="mb-2">
                        <a href="/ecommerce">Ecommerce</a>
                      </li>
                      <li className="mb-2"> 
                        <a href="/webapps">Web Applications</a>
                      </li>
                      <li className="mb-2">
                        <a href="/advertising">Digital Marketing</a>
                      </li> */}
                      <li className="mb-2">
                        <a href="/#">Privacy Policy</a>
                      </li>
                      <li className="mb-2">
                        <a href="/#">Terms and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 ml-auto mb-4 mb-lg-0">
                  <div className="footer-nav-wrap text-white">
                    <h5 className="mb-3 text-white spaced-text">Get in touch.</h5>
                    <ul className="list-unstyled support-list">
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-location-pin mr-2"></span>
                        Trento, Italy
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-email mr-2"></span>{" "}
                        <a href="mailto:business@lghxlabs.com">business@lghxlabs.com</a>
                      </li>
                      <li className="mb-2 d-flex align-items-center">
                        <span className="ti-mobile mr-2"></span>
                        <a href="tel:+393791092939">+39 379 109 2939</a>
                      </li> 
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          <div className="footer-bottom gray-light-bg pt-4 pb-4" style={{backgroundColor:"#101010"}}>
            <div className="container">
              <div className="row text-center justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <p className="copyright-text pb-0 mb-0">
                    Copyrights © 2020-2021 | 
                    <a href="/#" style={{color:"inherit"}}> Powered by LGHX Labs.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
