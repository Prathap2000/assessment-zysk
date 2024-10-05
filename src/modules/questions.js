import React from "react";
import wrap from "../assets/Icon_wrap.svg";
import plus from "../assets/plus.svg";
import avatar from "../assets/Avatar_group.svg";

function Questions() {
  return (
    <div className="main">
      <div className="div1">
        <div id="div2">
          <h1 className="asked">Frequently asked questions</h1>
          <p id="all" className="mt-3">
            Everything you need to know about the product and billing.
          </p>
        </div>
      </div>
      <div className="d-inline-block w-50 justify-content-center">
        <div >
          <div className="d-flex  justify-content-between">
            <h6>Is there a free trial available?</h6>
            <img
              src={wrap}
              roundedCircle
              width="24"
              height="24"
              alt="wrap"
              
            />
          </div>

          <p className="text-start d-flex">
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized
            <br /> 30-minute onboarding call to get you up and running as soon
            as possible.
          </p>
          <hr />
          <div className="d-flex  justify-content-between">
            <h6 className="text-start"> Can I change my plan later? </h6>
            <img
              src={plus}
              roundedCircle
              width="24"
              height="24"
              alt="wrap"
            />
          </div>
          <hr />
          <div className="d-flex  justify-content-between">
            <h6 className="text-start">What is your cancellation policy?</h6>
            <img
              src={plus}
              roundedCircle
              width="24"
              height="24"
              alt="wrap"
            />
          </div>
          <hr />
          <div className="d-flex  justify-content-between">
            <h6 className="text-start">Can other info be added to an invoice? </h6>
            <img
              src={plus}
              roundedCircle
              width="24"
              height="24"
              alt="wrap"
            />
          </div>
          <hr />
          <div className="d-flex  justify-content-between">
            <h6 className="text-start"> How does billing work?</h6>
            <img
              src={plus}
              roundedCircle
              width="24"
              height="24"
              alt="wrap"
            />
          </div>
          <hr />
        </div>
      </div>
      <div id="threePhoto" className="mt-5">
        <img
          src={avatar}
          roundedCircle
          width="120px"
          height="56px"
          alt="wrap"
        />
        <h4 className="justify-content-center mt-3">Still have questions?</h4>
        <p className="" style={{ color: "#475467" }}>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <div className="me-2 align-items-center mt-5 ">
          <button className="get_in_touch">Get in touch</button>
        </div>
      </div>
    </div>
  );
}
export default Questions();
