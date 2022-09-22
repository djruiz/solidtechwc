import React from "react";
import Image from "next/image";
import Lightning from "../img/lightning.png";
import Tossed from "../img/tossed.jpg";

interface Props {
  children: React.ReactNode;
  color: string;
  flip?: boolean;
}

const Header = (props: Props) => {
  return (
    <div
      style={{ flexDirection: props.flip ? "row-reverse" : "row" }}
      className="d-flex align-items-center"
    >
      <span className="d-flex" style={{ color: props.color, flexShrink: 0 }}>
        {props.children}
      </span>
      <div
        style={{ width: "100%", height: "3px", backgroundColor: props.color }}
      ></div>
    </div>
  );
};

export default () => {
  return (
    <div className="bg-dark mh-100" style={{ paddingTop: "50px" }}>
      <div className="bg-dark container" style={{ maxWidth: "750px" }}>
        <Header color="#fff">
          <h1 className="mr-4 open-sans">Solid Tech</h1>
        </Header>
        <Header color="#ff0505">
          <div className="d-flex align-items-center" style={{ width: "100%" }}>
            <h1 className="exo">Wrestling Club</h1>
            <Image width={72.5} height={55.5} src={Lightning} />
          </div>
        </Header>
        <div className="d-flex justify-content-end my-4">
          <div
            className="rounded overflow-hidden shadow"
            style={{ maxWidth: 650, width: "100%" }}
          >
            <Image layout="responsive" src={Tossed} />
          </div>
        </div>
        <Header color="#fff" flip>
          <h2 className="ml-4 londrina">
            Stay. <span className="text-primary">Solid.</span>
          </h2>
        </Header>
      </div>
    </div>
  );
};
