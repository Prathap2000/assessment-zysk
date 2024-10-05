import React from "react";
import ui from "../assets/ui.svg";
import api from "../assets/api.svg";
import migrate from "../assets/migrate.svg";
import profile1 from "../assets/profile-img1.svg";
import profile2 from "../assets/profile-img2.svg";
import profile3 from "../assets/profile-img3.svg";

export default function Blog() {
  return (
    <div className="d-flex flex-column pt-5">
      <div className="mx-5 mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-12 col-md-8 text-start mb-3 mb-md-0">
            <span
              className="d-block"
              style={{ color: "#6941C6", fontWeight: "500" }}
            >
              Our Blog
            </span>
            <h3 className="mt-2">Latest Blog Posts</h3>
            <p className="mt-2" style={{ color: "grey" }}>
              Tools and strategies modern teams need to help their companies
              grow.
            </p>
          </div>
          <div className="text-md-end text-center w-100">
            <button className="view_button py-2 px-4">View all posts</button>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-wrap justify-content-evenly w-100 mt-4 text-start"
        style={{ font: "Inter" }}
      >
        {imageData.map((item, index) => (
          <div
            className="card mx-3 my-3"
            style={{
              width: "30rem",
              border: "none",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            key={index}
          >
            <img
              src={item.image}
              className="card-img-top"
              alt={item.title}
              style={{ height: "70%" }}
            />

            <div className="card-body d-flex flex-column justify-content-between m-0 p-0 mt-2">
              <div>
                <p
                  className="card-title"
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#6941C6",
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="card-subtitle mb-2 text-muted"
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  {item.subTitle}
                </p>
                <p
                  className="card-text"
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#475467",
                  }}
                >
                  {item.description}
                </p>
              </div>

              <div className="d-flex align-items-center mt-3">
                <img
                  src={item.profile_image}
                  alt={item.name}
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
                <div className="ms-3">
                  <span className="fw-bold">{item.name}</span>
                  <br />
                  <small className="text-muted">{item.dob}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const imageData = [
  {
    image: ui,
    title: "Design",
    subTitle: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    profile_image: profile1,
    name: "Olivia Rhye",
    dob: "20 Jan 2024",
  },
  {
    image: migrate,
    title: "Product",
    subTitle: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    profile_image: profile2,
    name: "Phoenix Baker",
    dob: "19 Jan 2024",
  },
  {
    image: api,
    title: "Software Engineering",
    subTitle: "Building your API stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    profile_image: profile3,
    name: "Lana Steiner",
    dob: "10 Jan 2024",
  },
];
