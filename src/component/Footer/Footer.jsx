import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue pt-4" style={{backgroundColor:"black"}} >
            <div className="container-fluid text-center text-md-left">
              <div className="row">
                <div className="col-md-6 mt-md-0 mt-3 offset-2">
                  <h5 className="text-uppercase">
                      <img src="/img/footer/footer_logi.png" alt="/" style={{width : "200px"}}/>
                  </h5>
                </div>
                <hr className="clearfix w-100 d-md-none pb-3" />
                <div className="col-md-3 mb-md-0 mb-3" style={{color:"orange"}}>
                  <h5 className="text-uppercase">Address</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">479/2a Tân Hòa Đông , Quận Bình tân</a>
                    </li>
                    <li>
                      <a href="#!">Ho Chi Minh, Vietnam</a>
                    </li>
                    <li>
                      <a href="#!">0907386696</a>
                    </li>
                    <li>
                      <a href="#!">haipmse130332@fpt.edu.vn</a>
                    </li>
                  </ul>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
            {/* Footer Links */}
            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
              <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            {/* Copyright */}
          </footer>
        );
    }
}

export default Footer;