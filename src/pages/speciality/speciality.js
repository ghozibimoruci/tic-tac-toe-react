import React, { useState } from "react";
import "./speciality.css";
import exhaust from "../../assets/img/speciality-icon/exhaust.svg";
import accesories from "../../assets/img/speciality-icon/accesories.svg";
import speed_improvement from "../../assets/img/speciality-icon/speed-improvement.svg";
function Speciality(){
    const [activeIndex, setActiveIndex] = useState(0);
    const logoArray = [
        {
            caption: "Accesories",
            url: accesories
        },
        {
            caption: "Speed Improvement",
            url: speed_improvement
        },
        {
            caption: "Exhaust",
            url: exhaust
        }
    ]
    function clickPrevNext(isNext){
        let currentIndex = activeIndex;
        if(isNext){
            currentIndex++;
        }else{
            currentIndex--;
        }
        setActiveIndex(currentIndex);
    }
    let specialityIntro = "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. Duis euismod libero vel leo auctor,\nin venenatis nulla consequat. Sed commodo nunc\nsit amet congue aliquam."
    return (
        <div className="speciality-wrapper">
            <div id="speciality-wrapper" className="speciality-white-wrapper">
                <div className="speciality-title">
                OUR SPECIALITY
                </div>
                <div className="speciality-intoduction">
                {specialityIntro}
                </div>
                <div className="list-speciality-logo">
                    {logoArray.map(
                        (logo, idx) => {
                            return (
                                <div key={idx} className={'speciality-logo-wrapper'+
                                (idx<1?' left-balance':idx===logoArray.length - 1?' right-balance':'')}
                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                    <div className={'speciality-logo'+(idx === activeIndex ? ' logo-active': '')}>
                                        <img alt={logo.caption} src={logo.url} />
                                    </div>
                                    <div className="speciality-logo-caption">
                                        {logo.caption}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>
                <div className="speciality-footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                </div>
                <div className="speciality-navigation-wrapper">
                    <button className="speciality-prev-next-button" disabled={activeIndex<1} onClick={()=>{clickPrevNext(false)}}>&larr;</button>
                    <div className="navigation-index-wrapper">
                        {logoArray.map(
                            (logo, idx) => {
                                return (
                                    <button key={idx} onClick={()=>{setActiveIndex(idx)}}
                                    className={'navigation-circle' + (idx===activeIndex?' active-circle':'')}></button>
                                )
                            }
                        )}
                    </div>
                    <button className="speciality-prev-next-button" disabled={activeIndex===logoArray.length - 1} onClick={()=>{clickPrevNext(true)}}>&rarr;</button>
                </div>
            </div>
        </div>
    )
}

export default Speciality;