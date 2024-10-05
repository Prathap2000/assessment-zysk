import React from "react";

const CTASection = () => {
  return (
    <section
      className="text-center py-5"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3">Start your free trial</h2>
        <p className="text-muted mb-4">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        <div>
          <a href="#learn-more" className="btn btn-outline-primary me-3">
            Learn more
          </a>
          <a
            href="#get-started"
            className="btn btn-primary"
            style={{ backgroundColor: "#6A3ECA" }}
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
