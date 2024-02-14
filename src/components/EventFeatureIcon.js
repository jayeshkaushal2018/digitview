import React from 'react';


function EventFeatureIcon(props) {
    return (
        <>
            <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center" style={{"marginRight":"5px"}}  >
                <div className="row">
                    <div className="col-lg-12" style={{ "backgroundColor": "white", "border": "3px solid #3d9efa", "borderRadius": "12px", "padding": "25px" }}>
                        {props.icon}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <h4 className="fw-bold" style={{ "color": "#696969", "paddingTop": "15px", "textAlign": "center","fontSize":"1.2rem" }}>
                            {props.content}
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventFeatureIcon;