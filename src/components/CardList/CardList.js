import React from "react";
import Card from "../Card/Card";
import '../../css/CardList.css';


function CardList(props) {
    return (
        <div id="cards-container">
            {props.data.map((logement) => {
                return <Card key={logement.id} id={logement.id} title={logement.title} pictures={logement.pictures} />
            })}
        </div>
    )
}

export default CardList;