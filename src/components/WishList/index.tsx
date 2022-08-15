import Overlay from "components/Overlay";
import React, { useRef } from "react";
import Item from "./Item";
import { SWishList } from "./styles";
import { RiArrowRightSFill } from "react-icons/ri";
import { useAppSelector } from "redux/hook";
import { homeSelector } from "pages/Home/store";
import useOnClickOutside from "hooks/useClickOutSide";

type Props = {
  setFalse: () => void;
  isOpen: boolean;
};

const Wishlist = ({ setFalse, isOpen = false }: Props) => {
  const classMotion = isOpen ? "show" : "hidden";
  const { wishlists } = useAppSelector(homeSelector);
  const ref = useRef(null);

  useOnClickOutside(ref, setFalse);
  return (
    <>
      <SWishList className={classMotion} ref={ref}>
        {/* <span className="close" onClick={setFalse}>
          <RiArrowRightSFill className="icon" />
        </span> */}
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

      {isOpen && <Overlay css_overlay={{ cursor: "pointer" }} />}
    </>
  );
};

export default Wishlist;
