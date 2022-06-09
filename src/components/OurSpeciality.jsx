/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "assets/image/ARROW_right.png";
import ArrowLeft from "assets/image/ARROW_left.png";

import Accesories from "assets/image/speciality/Accesories.png";
import Exhaust from "assets/image/speciality/Exhaust.png";
import SpeedImprovement from "assets/image/speciality/SpeedImprovement.png";

export default class OurSpeciality extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    console.log("CLICK");
    this.slider.slickNext();
  }

  previous() {
    console.log("CLICK");
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    };

    const h3Style = css`
      font-family: "Rubik-Medium";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      text-transform: uppercase;
      color: #029fe4;
      margin-bottom: 2rem;
    `;

    return (
      <div className="px-4 py-5" style={{ backgroundColor: "#509FDD" }}>
        <div className="container py-5" style={{ backgroundColor: "#FFFFFF" }}>
          <h3 css={h3Style}>Our Speciality</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            euismod libero vel leo auctor, in venenatis nulla consequat. Sed
            commodo nunc sit amet congue aliquam.
          </p>

          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <img
                className="img-fluid py-5 m-auto text-center"
                src={Accesories}
                alt="Accesories"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
            </div>
            <div key={2}>
              <img
                className="img-fluid py-5 m-auto text-center"
                src={Exhaust}
                alt="Exhaust"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
            </div>
            <div key={3}>
              <img
                className="img-fluid py-5 m-auto text-center"
                src={SpeedImprovement}
                alt="SpeedImprovement"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
            </div>
          </Slider>
          <div
            className="row d-flex justify-content-between"
            style={{ position: "relative", zIndex: 5 }}
          >
            <div
              className="col-2 col-md-1"
              onClick={this.previous}
              style={{ cursor: "pointer" }}
            >
              <img src={ArrowLeft} alt="Arrow left" />
            </div>
            <div
              className="col-2 col-md-1 text-end"
              onClick={this.next}
              style={{ cursor: "pointer" }}
            >
              <img src={ArrowRight} alt="Arrow right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
