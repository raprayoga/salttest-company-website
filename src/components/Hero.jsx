/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import HeroImage from "assets/image/benjamin-wong-4-ka5rdCesI-unsplash.png";

export default function Hero() {
  const clip1Style = css`
    display: block;
    box-sizing: border-box;
    height: 500px;
    background-color: #4097db;
    clip-path: polygon(0 15%, 100% 25%, 100% 100%, 0% 100%);
    position: relative;
    z-index: 3;
    top: -275px;
  `;

  const clip2Style = css`
    display: block;clip2Style
    box-sizing: border-box;
    height: 130px;
    background-color: #53A7E9;
    clip-path: polygon(0 94%, 100% 0, 100% 100%, 0 100%);
    position: relative;
    z-index: 2;
    top: -50px;
  `;

  const titleStyle = css`
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 34px;
    position: absolute;
    width: 221.21px;
    height: 68px;
    left: 40.78px;
    top: 180px;
  `;

  const textStyle = css`
    position: absolute;
    width: 337.43px;
    height: 95px;
    left: 40.78px;
    top: 290px;

    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    letter-spacing: 0.01em;
  `;

  return (
    <>
      <div className="container-fluid px-4 py-5 d-none d-md-block">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          style={{ backgroundColor: "#4097db", height: "100vh" }}
        >
          <div className="col-lg-6">
            <img
              src={HeroImage}
              className="d-block img-fluid rounded-3 m-auto"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-light">
              Discover Your Wonder
            </h1>
            <p className="lead text-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>

      <div
        className="pb-5 mb-5 d-md-none"
        style={{ position: "relative", height: "600px" }}
      >
        <img
          className="d-block mx-auto mb-4"
          src={HeroImage}
          alt=""
          width="100%"
        />
        <div css={clip2Style}></div>
        <div css={clip1Style} className="px-3">
          <h1 className="text-light" css={titleStyle}>
            Discover <br />
            Your Wonder
          </h1>
          <p className="text-light" css={textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </>
  );
}
