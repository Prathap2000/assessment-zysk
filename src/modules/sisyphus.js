import React from "react";
import Sisyphus_image from "../assets/sisyphus.svg";
import CandiceImage from "../assets/CandiceImage.svg";
import Features from "./features";

export default function Sisyphus() {
  return (
    <>
      <div className="w-100 d-flex justify-content-center px-4 mt-5">
        <div className="px-5">
          <img src={Sisyphus_image} />
          <h1 className="display-lg-medium mt-4 ">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it
          </h1>
          <img src={CandiceImage} className="mt-2" />
          <p className="Candice mt-3">Candice Wu</p>
          <p className="Product" style={{ marginTop: "-15px" }}>
            Product Manager, Sisyphus
          </p>
        </div>
      </div>

      <Features />
    </>
  );
}
