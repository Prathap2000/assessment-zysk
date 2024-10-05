import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import message_icon from "../assets/messageIcon.svg";
import answers_icon from "../assets/answers.svg";
import manage_icon from "../assets/manage.svg";
import connect_icon from "../assets/connect.svg";
import alreadyUsed_icon from "../assets/alreadyUsed.svg";
import ourPeople_icon from "../assets/ourPeople.svg";

const companies = [
  { logo: logo1, color: "text-muted" },
  { logo: logo2, color: "text-muted" },
  { logo: logo3, color: "text-muted" },
  { logo: logo4, color: "text-muted" },
  { logo: logo5, color: "text-muted" },
  { logo: logo6, color: "text-muted" },
];

const SocialProof = () => {
  return (
    <div className="container-fluid py-5">
      <div className="text-center mb-5">
        <p className="text-muted">Join 4,000+ companies already growing</p>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="row justify-content-center align-items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="col-6 col-sm-4 col-md-2 text-center mb-3"
              style={{
                width: "150px",
                height: "auto",
              }}
            >
              <img
                src={company.logo}
                alt={`Company ${index + 1}`}
                className="img-fluid mb-2"
                style={{ maxHeight: "48px" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mb-5">
        <div className="pb-4">
          <h6 style={{ color: "#6941C6", fontWeight: "600" }}>Features</h6>
          <h2
            className="mb-3"
            style={{
              fontSize: "36px",
              fontWeight: "600",
              lineHeight: "44px",
              letterSpacing: "-0.02em",
            }}
          >
            Analytics that feel like they’re from the future
          </h2>
          <p
            className="mx-auto text-muted"
            style={{
              maxWidth: "800px",
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-4 mb-4">
            <img src={message_icon} style={{ height: "48px", width: "48px" }} />
            <p className="mt-3 fw-bold">Share team inboxes</p>
            <p className="text-muted">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img src={answers_icon} style={{ height: "48px", width: "48px" }} />
            <p className="mt-3 fw-bold">Deliver instant answers</p>
            <p className="text-muted">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img src={manage_icon} style={{ height: "48px", width: "48px" }} />
            <p className="mt-3 fw-bold">Manage your team with reports</p>
            <p className="text-muted">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drill down on the data in a couple of clicks.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <img src={connect_icon} style={{ height: "48px", width: "48px" }} />
            <p className="mt-3 fw-bold">Connect with customers</p>
            <p className="text-muted">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img
              src={alreadyUsed_icon}
              style={{ height: "48px", width: "48px" }}
            />
            <p className="mt-3 fw-bold">Connect the tools you already use</p>
            <p className="text-muted">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img
              src={ourPeople_icon}
              style={{ height: "48px", width: "48px" }}
            />
            <p className="mt-3 fw-bold">Our people make the difference</p>
            <p className="text-muted">
              We’re an extension of your customer service team, and all of our
              resources are free. Chat with our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
