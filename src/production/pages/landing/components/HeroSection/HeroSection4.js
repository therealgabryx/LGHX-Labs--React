import React from "react";
import { connect } from "react-redux";

class HeroSection extends React.Component {
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
        <section className="hero-section hero-section-2 ptb-100" id="hero"> 
          <div className="circles"> 
            <div className="point animated-point-1"></div>
            <div className="point animated-point-2"></div>
            <div className="point animated-point-3"></div>
            <div className="point animated-point-4"></div>
            <div className="point animated-point-5"></div>
            <div className="point animated-point-6"></div>
            <div className="point animated-point-7"></div>
            <div className="point animated-point-8"></div>
            <div className="point animated-point-9"></div>
          </div>
          <div className="container" id="hero
          
        ">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content-left ptb-100 text-white"> 
                  <div className="hero-logo-img"> 
                    <img 
                      className="img-fluid"
                      src="../img/lghx/Lghx-Logo-White.svg" 
                      alt="lghxlabs"
                    />
                  </div>
                  <h1 className="text-white hero-head">
                    <span>Problem solving</span> <br />for the digital age.
                  </h1>
                  <p className="lead hero-tagline">
                    We grow businesses by stepping up their digital game.
                  </p> 

                  <a href="#services" className="btn app-store-btn page-scroll hero-cta">
                    Find out how
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="hero-animation-img">
                  <img
                    className="img-fluid d-block animation-one"
                    src="../img/hero-animation-04.svg"
                    alt="animation"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-two"
                    src="../img/hero-animation-01.svg"
                    alt="animation"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-three"
                    src="../img/hero-animation-02.svg"
                    alt="animation"
                    width="120"
                  />
                  <img
                    className="img-fluid d-none d-lg-block animation-four"
                    src="../img/hero-animation-03.svg"
                    alt="animation"
                    width="230"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(state => ({
  state
}))(HeroSection);
