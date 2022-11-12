import React from "react";
import Banner from "../banner/banner";
import Navbar from "../navbar/navbar";
import "./company-tower.css";
import VisionMission from "../vision-mission/vision-mission";
import doubleDownArrow from "../../assets/img/double-down-arrow.svg";
import CoreValues from "../core-value/core-value";
import Speciality from "../speciality/speciality";
import Footer from "../footer/footer";

export class CompanyTower extends React.Component {
    scrollToVision() {
        document.getElementById('vision-mission-wrapper').scrollIntoView();
    }
    render() {
        return <div className="scrollSmooth">
            <Navbar/>
            <Banner/>
            <div className="arrow-button-wrapper">
                <button className="double-arrow-button" onClick={this.scrollToVision}>
                    <img alt="double-down-arrow" className="double-down-arrow" src={doubleDownArrow} />
                </button>
            </div>
            <VisionMission/>
            <CoreValues/>
            <Speciality/>
            <Footer/>
        </div>
    }
}