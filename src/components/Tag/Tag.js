import React from "react";
import '../../css/Tag.css';

function Tag(props) {
    return (
        <>
            <div className="tag">
                <p className="tag-text">{props.tagName}</p>
            </div>
        </>
    )
}

export default Tag;
