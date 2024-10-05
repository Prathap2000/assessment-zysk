import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logomark.svg";

const Footer = () => {
  return (
    <footer className="py-5 mt-5">
      <div className="container">
        <div className="row text-start mb-4">
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#overview" className="text-muted">Overview</a></li>
              <li><a href="#features" className="text-muted">Features</a></li>
              <li><a href="#solutions" className="text-muted">Solutions <span className="badge bg-success">New</span></a></li>
              <li><a href="#tutorials" className="text-muted">Tutorials</a></li>
              <li><a href="#pricing" className="text-muted">Pricing</a></li>
              <li><a href="#releases" className="text-muted">Releases</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-muted">About us</a></li>
              <li><a href="#careers" className="text-muted">Careers</a></li>
              <li><a href="#press" className="text-muted">Press</a></li>
              <li><a href="#news" className="text-muted">News</a></li>
              <li><a href="#media-kit" className="text-muted">Media kit</a></li>
              <li><a href="#contact" className="text-muted">Contact</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#blog" className="text-muted">Blog</a></li>
              <li><a href="#newsletter" className="text-muted">Newsletter</a></li>
              <li><a href="#events" className="text-muted">Events</a></li>
              <li><a href="#help-centre" className="text-muted">Help centre</a></li>
              <li><a href="#tutorials" className="text-muted">Tutorials</a></li>
              <li><a href="#support" className="text-muted">Support</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Use cases</h6>
            <ul className="list-unstyled">
              <li><a href="#startups" className="text-muted">Startups</a></li>
              <li><a href="#enterprise" className="text-muted">Enterprise</a></li>
              <li><a href="#government" className="text-muted">Government</a></li>
              <li><a href="#saas" className="text-muted">SaaS centre</a></li>
              <li><a href="#marketplaces" className="text-muted">Marketplaces</a></li>
              <li><a href="#ecommerce" className="text-muted">Ecommerce</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Social</h6>
            <ul className="list-unstyled">
              <li><a href="#twitter" className="text-muted">Twitter</a></li>
              <li><a href="#linkedin" className="text-muted">LinkedIn</a></li>
              <li><a href="#facebook" className="text-muted">Facebook</a></li>
              <li><a href="#github" className="text-muted">GitHub</a></li>
              <li><a href="#angellist" className="text-muted">AngelList</a></li>
              <li><a href="#dribbble" className="text-muted">Dribbble</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#terms" className="text-muted">Terms</a></li>
              <li><a href="#privacy" className="text-muted">Privacy</a></li>
              <li><a href="#cookies" className="text-muted">Cookies</a></li>
              <li><a href="#licenses" className="text-muted">Licenses</a></li>
              <li><a href="#settings" className="text-muted">Settings</a></li>
              <li><a href="#contact" className="text-muted">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-bottom mb-4" style={{ borderColor: "#ccc" }}></div>

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="40" height="40" />
            <span className="ms-2 d-inline d-sm-none" style={{fontWeight:"bold"}}>Untitled UI</span> 
            <span className="ms-2 d-none d-sm-inline fw-bold">Untitled UI</span>
          </div>
          <div className="text-center text-sm-end">
            <p className="text-muted mb-0">&copy; 2077 Untitled UI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;