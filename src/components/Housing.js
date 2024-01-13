import React from "react";
import Header from './Header/Header'
import Slideshow from './Slideshow/Slideshow'
import Tag from './Tag/Tag'
import StarRating from './StarRating/StarRating'
import Collapse from './Collapse/Collapse'
import Footer from './Footer/Footer'
import { useParams, Navigate } from 'react-router-dom';
import logements from "../assets/logements.json";
import '../css/Housing.css';


function Housing() {
    const { id } = useParams();
    const foundHousing = findLogementById(id);
    if (foundHousing) {
        return (
            <>
                <Header />
                <div>
                    <Slideshow pictures={foundHousing.pictures} />
                    <div className="housing-container">
                        <div>
                            <h1>{foundHousing.title}</h1>
                            <p className="housing-location">{foundHousing.location}</p>
                            <div className="tags-container">
                                {foundHousing.tags.map((tag) => { return (<Tag tagName={tag} />) })}
                            </div>
                        </div>
                        <div className="host-and-rating-container">
                            <div className="housing-host">
                                <p className="housing-host-name">{foundHousing.host.name}</p>
                                <img className="housing-host-img" src={foundHousing.host.picture} alt="Host" />
                            </div>
                            <div className="housing-rating">
                                <StarRating rating={foundHousing.rating} />
                            </div>
                        </div>
                    </div>
                    <div className="housing-collapses">
                        <Collapse style={{ width: '300px' }} title="Description">{foundHousing.description}</Collapse>
                        <Collapse style={{ width: '600px' }} title="Equipements">{foundHousing.equipments.map(equipment => <p>{equipment}</p>)}</Collapse>
                    </div>

                </div >
                <Footer />
            </>
        );
    } else {
        return <Navigate to="/not-found" replace={true} />;
    }
}

function findLogementById(id) {
    return logements.find(logement => logement.id === id);
}

export default Housing;