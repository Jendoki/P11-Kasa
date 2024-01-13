import React, { useState } from "react";
import '../../css/Collapse.css';

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id="collapse">
            <div id="collapse-title">
                <p>{props.title}</p>
                <button onClick={() => setIsOpen(!isOpen)} type="button" id="collapse-button">
                    {!isOpen && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="12 6.586 3.293 15.293 4.707 16.707 12 9.414 19.293 16.707 20.707 15.293 12 6.586" fill="#ffffff" />
                    </svg>}
                    {isOpen && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" fill="#ffffff" />
                    </svg>}
                </button>
            </div>
            {isOpen && <div id="collapse-content">
                {props.children}
            </div>}
        </div>
    )
}

export default Collapse;