import Modal from "components/Modal";
import React from "react";
import { useAppDispatch, useAppSelector } from "redux/hook";
import Banner from "./Banner";
import Bathroom from "./Bathroom";
import BedRoom from "./Bedroom";
import DetailProduct from "./DetailProduct";
import Living from "./Living";
import Sale from "./Sale";
import { handleDetailProduct, homeSelector } from "./store";
import { SHome } from "./styles";

const Home = () => {
  const { productDetail } = useAppSelector(homeSelector);
  const dispatch = useAppDispatch();
  return (
    <SHome className="container">
      <Banner />
      <Living />
      <BedRoom />
      <Bathroom />
      <Sale />
      <Modal
        title="Product Detail"
        isOpen={!!productDetail}
        toggle={() => dispatch(handleDetailProduct(null))}
      >
        <DetailProduct />
      </Modal>
    </SHome>
  );
};

export default Home;
