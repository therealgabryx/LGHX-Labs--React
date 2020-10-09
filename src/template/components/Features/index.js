import React from "react";

class Feature extends React.Component {
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
        <section id="features" className="feature-section ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4">
                <div className="download-img d-flex align-bottom">
                  <img
                    src="img/image-14.png"
                    alt="download"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="feature-contents section-heading">
                  <h2>
                    Share your photos with <br />
                    <span>friends easily</span>
                  </h2>
                  <p>
                    Objectively deliver professional value with diverse
                    web-readiness. Collaboratively transition wireless customer
                    service without goal-oriented catalysts for change.
                    Collaboratively.
                  </p>
                  <p>
                    Uniquely simplify sustainable applications whereas adaptive
                    schemas. Competently brand performance based content and.
                  </p>

                  <ul className="list-inline mt-5">
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/image-icon-2.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/image-icon-3.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/image-icon-4.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="mr-3 icon-box border">
                        <img
                          src="img/image-icon-1.png"
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
