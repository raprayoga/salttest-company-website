/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import LogoWhite from "assets/image/logo_white.png";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function Footer() {
  const clip1Style = css`
    display: block;
    box-sizing: border-box;
    height: 200px;
    background-color: #08385f;
    clip-path: polygon(0 6%, 100% 51%, 100% 100%, 0% 100%);
    position: relative;
    z-index: 2;
    bottom: -100px;
  `;

  const clip2Style = css`
    display: block;
    box-sizing: border-box;
    height: 200px;
    background-color: #14619d;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    position: relative;
    z-index: 3;
    bottom: -300px;
  `;

  const footerStyle = css`
    background-color: #07477a;
    height: 250px;
    @media (max-width: 572px) {
      height: 500px;
    }
  `;

  const contentFooterStyle = css`
    @media (max-width: 572px) {
      bottom: 360px;
      position: relative;
      z-index: 6;
    }
  `;

  return (
    <>
      <div className="p-0 m-0" css={footerStyle}>
        <div className="d-sm-none" css={clip2Style}></div>
        <div className="d-sm-none" css={clip1Style}></div>

        <div className="container-fluid px-5" css={contentFooterStyle}>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <img className="img-fluid" src={LogoWhite} alt="Logo Brand" />

            <div className="col-md-4 py-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <div className="card">
                <div className="card-body">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                    variant="light"
                    className="col-12"
                  >
                    <Dropdown.Item href="#/action-1">
                      TECHNOLOGY DEPARTEMENT
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">HEAD OFFICE</Dropdown.Item>
                  </DropdownButton>
                  <p
                    className="card-text"
                    css={css`
                      color: #25a0d8;
                    `}
                  >
                    Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota
                    Bandung, Jawa Barat
                  </p>
                </div>
              </div>
            </div>

            <ul className="nav col-6 col-md-4 justify-content-sm-end justify-content-start">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">
                  Who We Are
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">
                  Our Values
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">
                  The Perks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
