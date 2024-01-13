import React from "react";
import '../../css/Card.css';
import { Link } from "react-router-dom";


function Card(props) {
    return (
        <>
            <div className="card">
                <div className="overlay"></div>
                <Link style={{ textDecoration: 'none' }} to={"/logement/" + props.id}>
                    <div className="card-content">
                        <img className="card-img" src={props.pictures[0]} alt={props.title} />
                        <p className="card-title">{props.title}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card;