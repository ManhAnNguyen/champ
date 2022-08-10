import React from "react";
import Banner from "./Banner";
import Bathroom from "./Bathroom";
import BedRoom from "./Bedroom";
import Living from "./Living";
import Sale from "./Sale";
import { SHome } from "./styles";

const Home = () => {
  return (
    <SHome className="container">
      <Banner />
      <Living />
      <BedRoom />
      <Bathroom />
      <Sale />
    </SHome>
  );
};

export default Home;
