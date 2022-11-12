import React, {useState} from "react";
import "./vision-mission.css";

function VisionMission() {
    const visionMissionArray = [
        {
            title: 'Who we are',
            subtitle: 'Technology Company',
            containText: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
        },{
            title: 'What we do',
            subtitle: 'Professional Brand Management',
            containText: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },{
            title: 'How we do',
            subtitle: 'Strategize, Design, Collaborate',
            containText: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
        }
    ];
    const [isLoad, setIsLoad] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(visionMissionArray[0]);
    let 
    clickNavigation = (isNext) => {
        setIsLoad(true);
        setTimeout(()=>{
            let currentIndex = activeIndex;
            if(isNext){
                currentIndex++;
            }else{
                currentIndex--;
            }
            setActiveIndex(currentIndex);
            setSelectedItem(visionMissionArray[activeIndex]);
            setIsLoad(false);
        }, 300);
    }
    return (
        <div id="vision-mission-wrapper" className="vision-mission-wrapper">
            <div className={"vis-miss-wrapper"+(isLoad?" hidden":"")}>
                <div className="vismis-title-wrapper">{selectedItem.title}</div>
                <div className="sub-title-wrapper">{selectedItem.subtitle}</div>
                <div className="container-wrapper">
                    {selectedItem.containText}
                </div>
                <div className="button-wrapper">
                    <div className="index-wrapper">
                        <span className="active-index">0{activeIndex + 1}</span>
                        <span className="slice-icon"> / </span>
                        <span className="max-index">0{visionMissionArray.length}</span>
                    </div>
                    <div className="navigation-button-wrapper">
                        <button className="index-button" onClick={()=>{clickNavigation(false)}} disabled={isLoad||activeIndex<1}>&larr;</button>
                        <button className="index-button" onClick={()=>{clickNavigation(true)}} disabled={isLoad||activeIndex === visionMissionArray.length - 1}>&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionMission;