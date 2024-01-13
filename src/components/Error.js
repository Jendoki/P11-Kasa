import React from "react";
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Link } from "react-router-dom";
import '../css/Error.css';



function Error() {
    return (
        <>
            <Header />
            <div id="error-content">
                <h1>404</h1>
                <p id="comment">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">
                    <p id="link">Retourner sur la page d'accueil</p>
                </Link >
            </div >
            <Footer />
        </>
    );
}

export default Error;