/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import ListImage from "assets/image/Rectangle92.png";
import CoreValuesIllustration from "assets/image/CoreValuesIllustration.png";

export default function CoreValue() {
  const h3Style = css`
    font-family: "Rubik-Medium";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 30px;
    color: #029fe4;
  `;

  const h5Style = css`
    font-family: "Rubik-Medium";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    align-items: center;
  `;

  const listStyle = css`
    list-style-image: url(${ListImage});
  `;

  const illustrationStyle = css`
    position: relative;
    left: 50px;
  `;

  return (
    <>
      <div className="container pt-5" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="px-4">
          <h3 className="text-center py-3" css={h3Style}>
            Our Core Values
          </h3>
          <p>
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </p>
          <p>
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>

        <div className="px-3">
          <ul css={listStyle}>
            <li className="py-3">
              <h5 css={h5Style}>Dedication</h5>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat.
              </p>
            </li>
            <li className="py-3">
              <h5 css={h5Style}>Intellectual Honesty</h5>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias conse.
              </p>
            </li>
            <li className="py-3">
              <h5 css={h5Style}>Curiosity</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>
            </li>
          </ul>
        </div>

        <div className="pt-3 text-end overflow-hidden">
          <img
            className="img-fluid col-10"
            src={CoreValuesIllustration}
            alt="Core Values Illustration"
            css={illustrationStyle}
          />
        </div>
      </div>
    </>
  );
}
