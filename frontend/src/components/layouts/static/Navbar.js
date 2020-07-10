import React from "react";
import styled from "styled-components";
import colors from "../../../images/colors.jpeg";

function Navbar() {
  return (
    <NavbarContainer>
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
        <a className="navbar-brand" href="#">
          <img style={{ width: "50px" }} src={colors} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Features<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  background: var(--dark-green);
  .nav-link {
    color: #fff !important;
    &:hover {
      background: var(--light-green);
    }
  }
`;
