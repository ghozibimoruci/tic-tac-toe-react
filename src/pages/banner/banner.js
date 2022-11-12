import React from "react";
import "./banner.css";
import company_tower from "../../assets/img/salt-company-tower-image.svg";
import trapezium_1 from "../../assets/img/trapezium-1.svg";
import trapezium_2 from "../../assets/img/trapezium-2.svg";

function Banner() {
    return (
        <div className="company-tower-wrapper">
            <img alt="company-tower" src={company_tower} />
            <img alt="trapezium1" className="trapezium" src={trapezium_1} />
            <img alt="trapezium2" className="trapezium" src={trapezium_2} />
            <div className="paragraph-wrapper">
                <div className="text-wrapper">
                    <div className="title-wrapper">
                        Discover Your Wonder
                    </div>
                    <div className="contain-wrapper">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;