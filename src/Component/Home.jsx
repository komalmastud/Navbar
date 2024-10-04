import React from "react";
import Slide from "./Slide";
import Icons from "./Icons";
import Bestrate from "./Bestrate";
import Card from "./Cards";
import Collection from "./Collection";
import Trending from "./Trending";
import Rate from "./Rate";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Slide />
      <Icons />
      <Bestrate />
      <Card />
      <Collection />
      <Trending />
      <Rate />
      <Footer />
    </div>
  );
};

export default Home;
