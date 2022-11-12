import React from "react";
import "./core-value.css";
import company_design from "../../assets/img/company-design.svg";

function CoreValues() {
    const valueTextArray = [
        {
            titleText: 'Dedication',
            containText: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.'
        },{
            titleText: 'Intellectual Honesty',
            containText: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.'
        },{
            titleText: 'Curiosity',
            containText: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.'
        },
    ];
    const valueIntro = "Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.\n\nIn mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim."
    return (
        <>
            <div id="core-value-wrapper" className="core-value-wrapper">
                <div className="values-title">Our Core Values</div>
                <div className="value-intoduction">{valueIntro}</div>
                {valueTextArray.map(
                    value => {
                        return (
                            <div className="point-wrapper" key={value.titleText}>
                                <div className="strip-icon">
                                    <div className="the-strip"></div>
                                </div>
                                <div className="value-text-wrapper">
                                    <div className="value-text-title">{value.titleText}</div>
                                    <div className="value-text-contain">{value.containText}</div>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="design-wrapper">
                <img alt="company_design" className="company_design" src={company_design} />
            </div>
        </>
    )
}

export default CoreValues;