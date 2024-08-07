import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column ">
                            <h4 className="mb-4 text-white">Get In Touch</h4>
                            <a href="#"><i className="fas fa-home me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="tel:+01234567890"><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="fax:+01234567890" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-white me-2"></i>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn-square btn btn-primary rounded-circle mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-2 text-white">Book your trip</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Book flight</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Charter booking</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Group booking</a>

                            
                        </div>
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-2 mt-3 text-white">Fly with us</h4>

                          <a href="#"><i className="fas fa-angle-right me-2"></i> Press</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Gift Cards</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Magazine</a>
                            </div>
                             </div>
                             
               
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-2 text-white">Loyalty</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Join air rewards</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> About air rewards</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> General</a>
                            
                        </div>
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-2 mt-3 text-white">Blogs</h4>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> General</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Destination</a>
                            <a href="#"><i className="fas fa-angle-right me-2"></i> Air rewards</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item">
                           
                            <h4 className="text-white mb-3">Payments</h4>
                            <div className="footer-bank-card">
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-amex fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-visa fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fas fa-credit-card fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-mastercard fa-2x"></i></a>
                                <a href="#" className="text-white me-2"><i className="fab fa-cc-paypal fa-2x"></i></a>
                                <a href="#" className="text-white"><i className="fab fa-cc-discover fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
