import React from "react";
import Image from '../../assets/img/BannerImage.png'
import '../../css/BannerImage.css';


function BannerImage() {
    return (
        <img id="bannerImage" src={Image} alt="banner" />
    )
}

export default BannerImage;