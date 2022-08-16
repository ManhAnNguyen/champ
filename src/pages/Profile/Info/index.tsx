import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SInfo } from "./styles";
import { CgProfile } from "react-icons/cg";

const Info = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    setUser(currentUser);
  }, []);

  if (!user) return <></>;
  return (
    <SInfo>
      <div className="content">
        <span className="icon">
          <CgProfile />
        </span>
        <h3 className="info_item">Name : {user.name}</h3>
        <h3 className="info_item">Phone : {user.phone}</h3>
        <h3 className="info_item">Address : {user.address}</h3>
      </div>
    </SInfo>
  );
};

export default Info;
