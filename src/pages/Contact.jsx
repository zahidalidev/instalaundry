import Button from '@material-ui/core/Button';

export default function Contact() {
  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-2 mb-5">
        <div className="container py-1">
          <div className="row  align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1
                className="mb-4 mb-md-0 text-white"
                className="sliderMainHeading"
                style={{ fontSize: '2.5rem', marginTop: '6rem' }}
              >
                Contact Us
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white">Home</a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled">Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Contact Start -- */}
      <div className="container-fluid py-5">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: '100px',
                        height: '100px',
                        borderWidth: '15px !important',
                      }}
                    >
                      <i
                        class="fa fa-map-marker"
                        aria-hidden="true"
                        style={{ fontSize: '2.5rem', color: '#62c7ce' }}
                      ></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">
                      123 Street, New York, USA
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: '100px',
                        height: '100px',
                        borderWidth: '15px !important',
                      }}
                    >
                      <i className="fa fa-2x fa-envelope-open text-secondary"></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">
                      Support@instalaundry.ca
                    </h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center mb-5">
                    <div
                      className="d-inline-flex align-items-center justify-content-center bg-white border border-light shadow rounded-circle mb-4"
                      style={{
                        width: '100px',
                        height: '100px',
                        borderWidth: '15px !important',
                      }}
                    >
                      <i
                        class="fa fa-phone"
                        aria-hidden="true"
                        style={{ fontSize: '2.5rem', color: '#62c7ce' }}
                      ></i>
                    </div>
                    <h5 className="font-weight-medium m-0 mt-2">
                      +012 345 6789
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="contact-form">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  novalidate="novalidate"
                >
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="control-group">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required="required"
                          data-validation-required-message="Please enter your name"
                          style={{ borderRadius: '0.5rem', height: '2.7rem' }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="control-group">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required="required"
                          data-validation-required-message="Please enter your email"
                          style={{ borderRadius: '0.5rem' }}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                      style={{ borderRadius: '0.5rem', height: '2.7rem' }}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows="6"
                      id="message"
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                      style={{ borderRadius: '0.5rem', height: '12rem' }}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <Button
                      style={{
                        backgroundColor: '#194376',
                        color: 'white',

                        borderRadius: '0.5rem',
                      }}
                      className="btn btn-primary py-md-3 px-md-2 mt-2"
                      variant="contained"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- Contact End -- */}
    </>
  );
}