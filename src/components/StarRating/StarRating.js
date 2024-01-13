import React from "react";
import RedStar from "../Stars/RedStar";
import GreyStar from "../Stars/GreyStar";

function StarRating(props) {
    const rating = props.rating;
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<RedStar key={i} />);
            } else {
                stars.push(<GreyStar key={i} />);
            }
        }
        return stars;
    };

    return (
        <>
            {renderStars()}
        </>
    );
}

export default StarRating;