/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRight from "assets/image/ARROW_right.png";
import ArrowLeft from "assets/image/ARROW_left.png";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.state.position < 3) {
      this.setState({ position: this.state.position + 1 });
    }
    this.slider.slickNext();
  }

  previous() {
    if (this.state.position > 1) {
      this.setState({ position: this.state.position - 1 });
    }
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    const h3Style = css`
      font-family: "Rubik-Medium";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 30px;
      color: #029fe4;
      margin-bottom: 2rem;
    `;

    const countStyle = css`
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      color: #303030;
    `;

    return (
      <div className="container px-5 py-3 my-5">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3 css={h3Style}>Who we are</h3>
            <h5 className="fw-bold">Technology Company</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div key={2}>
            <h3 css={h3Style}>What we do</h3>
            <h5 className="fw-bold">Professional Brand Management</h5>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div key={3}>
            <h3 css={h3Style}>How we do</h3>
            <h5 className="fw-bold">Strategize, Design, Collaborate</h5>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse sequam nihil molestiae consequatur.
            </p>
          </div>
        </Slider>
        <div className="row mt-5">
          <div className="col-6">
            <p css={countStyle}>
              <span className="fw-bolder" style={{ fontSize: "32px" }}>
                0{this.state.position}
              </span>
              /03
            </p>
          </div>
          <div className="col-6 text-end">
            <button
              className="btn"
              onClick={this.previous}
              style={{
                backgroundColor: "#F1F1F1",
                height: "46.94px",
                width: "51.98px",
              }}
            >
              <img src={ArrowLeft} alt="Arrow left" />
            </button>
            <button
              className="btn"
              onClick={this.next}
              style={{
                backgroundColor: "#1BA0E1",
                height: "46.94px",
                width: "51.98px",
              }}
            >
              <img src={ArrowRight} alt="Arrow right" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
