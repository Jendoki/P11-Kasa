import React from "react";
import '../../css/Banner.css';


function Banner(props) {
    return (
        <div className="bannerImageContainer">
            <div className="imageOverlay">
                {props.text && <p id="bannerText">{props.text}</p>}
            </div>
            <img id="bannerImage" src={props.img} alt="banner" />
        </div>
    );
}

export default Banner;