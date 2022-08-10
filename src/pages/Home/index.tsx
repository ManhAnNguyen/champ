import React from "react";
import Banner from "./Banner";
import Bathroom from "./Bathroom";
import BedRoom from "./Bedroom";
import Living from "./Living";
import { SHome } from "./styles";

const Home = () => {
  return (
    <SHome className="container">
      <Banner />
      <Living />
      <BedRoom />
      <Bathroom />
    </SHome>
  );
};

export default Home;
