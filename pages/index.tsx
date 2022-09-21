import React from "react";
import Image from "next/image";
import Lightning from "../img/lightning.png";
import Tossed from "../img/tossed.jpg";

interface Props {
  children: React.ReactNode;
  color: string;
}

const Header = (props: Props) => {
  return (
    <div className="d-flex align-items-center">
      <span style={{ color: props.color }}>{props.children}</span>
      <div
        style={{ width: "100%", height: "3px", backgroundColor: props.color }}
      ></div>
    </div>
  );
};

export default () => {
  return (
    <div className="bg-light mh-100" style={{ paddingTop: "50px" }}>
      <div className="bg-dark container">
        <Header color="#ff0505">
          <h1 style={{ minWidth: "5em" }}>Solid Tech</h1>
        </Header>
        <Header color="#fff">
          <h1 style={{ minWidth: "8em" }}>Wrestling Club</h1>
          <Image src={Lightning} />
        </Header>
        <Image src={Tossed} />
      </div>
      <div className="d-flex">
        <h1></h1>
        <div></div>
      </div>
    </div>
  );
};
