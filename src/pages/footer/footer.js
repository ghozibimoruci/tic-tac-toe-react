import React from "react";
import "./footer.css";
import company_white_logo from  "../../assets/img/logo-company-white.svg";
function Footer(){
    const linkArray = [
        {
            text: "Who We Are",
            targetId: "vision-mission-wrapper"
        },{
            text: "Our Values",
            targetId: "core-value-wrapper"
        },{
            text: "The Perks",
            targetId: "speciality-wrapper"
        }
    ]
    let deptAddress = "Jl. Lembong No 8\nKel. Braga Kec. Sumur\nBandung, Kota\nBandung, Jawa Barat"
    return (
        <div className="footer-wrapper">
            <div className="footer-title">
                <img alt="company-white-logo" className="company-white-logo" src={company_white_logo} />
            </div>
            <div className="footer-white-wrapper">
                <div className="dept-name-wrapper">
                TECHNOLOGY DEPARTMENT
                </div>
                <div className="dept-address-wrapper">
                {deptAddress}
                </div>
            </div>
            {linkArray.map(
                (link, idx) => {
                    return (
                        <div className="goto-link" onClick={()=>{document.getElementById(link.targetId).scrollIntoView()}}>
                            {link.text}
                        </div>
                    )
                }
            )}
            <div className="dark-blue-wrapper">
                <div className="triangle-dark"></div>
                <div className="rectangle-dark"></div>
            </div>
            <div className="triangle-light"></div>
            <div className="rectangle-wrapper"></div>
        </div>
    )
}

export default Footer;