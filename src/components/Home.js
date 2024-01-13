import React from "react";
import Header from './Header/Header'
import CardList from './CardList/CardList'
import Banner from "./Banner/Banner";
import Image from '../assets/img/BannerImage.png'
import Footer from "./Footer/Footer";
import '../css/Home.css';


import logements from "../assets/logements.json"


function Home() {
  return (
    <>
      <Header />
      <Banner text={"Chez vous, partout et ailleurs"} img={Image} />
      <div id="home-content">
        <CardList data={logements} />
      </div>
      <Footer />
    </>

  );
}

export default Home;