import React from "react";
import wrap from "../assets/Icon_wrap.svg";
import plus from "../assets/plus.svg";
import avatar from "../assets/Avatar_group.svg";

import React from 'react'

export default function Questions() {
  return (
<div className="main">
      <div className="div1">
        <div id="div2">
          <h1 className="asked">Frequently Asked Questions</h1>
          <p id="all" className="mt-3">
            Everything you need to know about the product and billing.
          </p>
        </div>
      </div>
      <div className="d-inline-block w-50 justify-content-center">
        <div>
          {[
            {
              question: "Is there a free trial available?",
              answer:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
              icon: wrap,
            },
            {
              question: "Can I change my plan later?",
              answer: "",
              icon: plus,
            },
            {
              question: "What is your cancellation policy?",
              answer: "",
              icon: plus,
            },
            {
              question: "Can other info be added to an invoice?",
              answer: "",
              icon: plus,
            },
            {
              question: "How does billing work?",
              answer: "",
              icon: plus,
            },
          ].map(({ question, answer, icon }, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between">
                <h6 className="text-start">{question}</h6>
                <img
                  src={icon}
                  width="24"
                  height="24"
                  alt="Icon"
                />
              </div>
              {answer && (
                <p className="text-start d-flex">
                  {answer}
                  <br />
                </p>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div id="threePhoto" className="mt-5 text-center">
        <img
          src={avatar}
          width="120px"
          height="56px"
          alt="Avatar group"
        />
        <h4 className="mt-3">Still have questions?</h4>
        <p style={{ color: "#475467" }}>
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
        <div className="me-2 align-items-center mt-5">
          <button className="get_in_touch">Get in touch</button>
        </div>
      </div>
    </div>
  )
}

