import React from "react";
import Banner from "./Banner";
import Living from "./Living";
import { SHome } from "./styles";

const Home = () => {
  return (
    <SHome className="container">
      <Banner />
      <Living />
    </SHome>
  );
};

export default Home;
