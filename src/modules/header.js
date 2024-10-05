import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/Logomark.svg";
import profile from "../assets/profile-img1.svg";
import content from "../assets/Content.svg";
import rightArrow from "../assets/rightArrow.svg";
import play from "../assets/Icon.svg";


export default function Header() {
  return (
    <div>
      <div id="menu">
        <Navbar bg="light" variant="light" expand="lg" className="px-5">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
              alt="Logo"
            />
            <span className="d-none d-lg-inline fw-bold">Untitled UI</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav>
              <Nav.Link href="#home" className="menu-item">
                Home
              </Nav.Link>
              <NavDropdown
                title="Products"
                id="products-dropdown"
                className="menu-item"
              >
                <NavDropdown.Item href="#product">
                  List of Products
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Resources"
                id="resources-dropdown"
                className="menu-item"
              >
                <NavDropdown.Item href="#resource">
                  List of Resource
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="menu-item">
                Pricing
              </Nav.Link>
            </Nav>

            <Nav className="ms-auto">
              <Image
                src={profile}
                roundedCircle
                width="40"
                height="40"
                alt="Profile"
                className="ms-2"
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="main d-flex flex-column justify-content-center align-items-center">
        <div
          className="d-flex align-items-center"
          style={{
            border: "1px solid #E9D7FE",
            borderRadius: "50px",
            width: "24%",
            height: "32px",
            backgroundColor: "#F9F5FF",
          }}
        >
          <div className="d-flex w-100 mx-1">
            <div
              className="d-flex justify-content-center align-items-center bg-light my-2"
              style={{
                color: "#6941C6",
                border: "1px solid #E9D7FE",
                borderRadius: "50px",
                width: "8rem",
                height: "25px",
              }}
            >
              <span
                className="mx-2 my-2 text-nowrap w-100"
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                  fontFamily: "Inter",
                }}
              >
                New feature
              </span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span
                className="text-nowrap mx-2"
                style={{
                  color: "#6941C6",
                  fontSize: "14px",
                  fontWeight: "normal",
                  fontFamily: "Inter",
                }}
              >
                Check out the team dashboard <img src={rightArrow} alt="Right Arrow" />
              </span>
            </div>
          </div>
        </div>
        <div>
          <p id="grow">Beautiful analytics to grow smarter</p>
          <p className="powerful">
            Powerful, self-serve product and growth analytics to help you
            convert, engage,
            <br /> and retain more users. Trusted by over 4,000 startups.
          </p>

          <div className="d-flex justify-content-center align-items-center">
            <button className="me-2 d-flex align-items-center" id="demo">
              <img
                src={play}
                alt="Demo"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              Demo
            </button>
            <button className="signup">Sign Up</button>
          </div>
        </div>

        <div className="mt-5">
          <Image src={content} fluid alt="Content illustration" className="ms-2" />
        </div>
      </div>
    </div>
  )
}

