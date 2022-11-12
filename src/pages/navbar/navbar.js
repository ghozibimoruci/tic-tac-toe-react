import React from "react";
import "./navbar.css";
import logo1 from "../../assets/img/logo-vector-1.svg";
import logo2 from "../../assets/img/logo-vector-2.svg";
function Navbar() {
    return (
        <div className="salt-navbar-wrapper">
            <div className="salt-company-name">
                <div className="company-logo-wrapper">
                    <img alt="salt-company-logo1" className="salt-company-logo1" src={logo1}/>
                    <img alt="salt-company-logo2" className="salt-company-logo2" src={logo2}/>
                </div>
                <div className="salt-company-text">COMPANY</div>
                <div className="salt-dropdown-menu">
                    <div className="dropdown-wrapper">
                        <div className="dropdown-line"></div>
                        <div className="dropdown-line"></div>
                        <div className="dropdown-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;