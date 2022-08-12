import Overlay from "components/Overlay";
import React from "react";
import Item from "./Item";
import { SWishList } from "./styles";
import { RiArrowRightSFill } from "react-icons/ri";
import { useAppSelector } from "redux/hook";
import { homeSelector } from "pages/Home/store";

type Props = {
  setFalse: () => void;
  isOpen: boolean;
};

const Wishlist = ({ setFalse, isOpen = false }: Props) => {
  const classMotion = isOpen ? "show" : "hidden";
  const { wishlists } = useAppSelector(homeSelector);
  return (
    <>
      <SWishList className={classMotion}>
        <span className="close" onClick={setFalse}>
          <RiArrowRightSFill className="icon" />
        </span>
        <h3 className="title-wishlist">Wishlist({wishlists.length})</h3>
        {wishlists.length === 0 ? (
          <h1 className="no">No wishlist available here</h1>
        ) : (
          <div className="item-groups">
            {wishlists.map((product, index) => (
              <Item key={`wish-${index}`} product={product} />
            ))}
          </div>
        )}
      </SWishList>

      {isOpen && <Overlay />}
    </>
  );
};

export default Wishlist;
