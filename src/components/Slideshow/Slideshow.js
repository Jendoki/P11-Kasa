import React, { useState } from "react";
import ChevronLeft from "../Chevrons/ChevronLeft";
import ChevronRight from "../Chevrons/ChevronRight";
import '../../css/Slideshow.css';

function Slideshow(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function next() {
        if (currentImageIndex === props.pictures.length - 1) {
            setCurrentImageIndex(0)
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    function previous() {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        } else {
            setCurrentImageIndex(props.pictures.length - 1)
        }

    }

    return (
        <>
            <div className="slideshow">
                {props.pictures.length === 1 ? null : (
                    <button className="chevron-left" onClick={previous}><ChevronLeft /></button>
                )}
                <img className="slideshow-img" src={props.pictures[currentImageIndex]} alt='logement' />
                {props.pictures.length === 1 ? null : (
                    <p className="image-index">{currentImageIndex + 1}/{props.pictures.length}</p>
                )}
                {props.pictures.length === 1 ? null : (
                    <button className="chevron-right" onClick={next}><ChevronRight /></button>
                )}
            </div>
        </>
    );
}

export default Slideshow;