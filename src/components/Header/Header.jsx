import React from "react";
import { AppIcon, ArrowDownIcon } from "../../Assets/allsvg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <div className="header-title-section">
          <div className="app-title">
            <AppIcon />
            Estatery
          </div>
          <div className="nav-container">
            <ul>
              <li className="nav-item active-link">Rent</li>
              <li className="nav-item">Buy</li>
              <li className="nav-item">Sell</li>
              <li className="nav-item">
                Manage Property
                <ArrowDownIcon />
              </li>
              <li className="nav-item">
                Resources
                <ArrowDownIcon />
              </li>
            </ul>
          </div>
        </div>

        <div className="btn-action">
          <button className="btn btn-outlined">Login</button>
          <button type="button" class="btn action-btn">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export { Header };
