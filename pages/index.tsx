import React from "react";
import Image, { StaticImageData } from "next/image";
import Lightning from "../img/lightning.png";
import Tossed from "../img/tossed.jpg";
import Mental from "../img/mental.png";
import Physical from "../img/physical.png";
import Education from "../img/education.png";

interface Props {
  children: React.ReactNode;
  color: string;
  flip?: boolean;
}

interface FeatureProps {
  img: StaticImageData;
  heading: string;
  subHeading: string;
  description: string;
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

const Feature = (props: FeatureProps) => {
  return (
    <div className="feature-border">
      <div
        className="row mx-2 feature-background"
        style={{ backgroundColor: "gray" }}
      >
        <div className="col-sm-12 col-md-3 d-flex align-items-center justify-content-center">
          <div
            className="image-background d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "white",
              borderRadius: "100%",
              height: "125px",
              width: "125px",
            }}
          >
            <Image src={props.img} width={100} height={100} />
          </div>
        </div>
        <div className="col-sm-12 col-md-9 feature-text">
          <h1 className="open-sans m-0" style={{ color: "white" }}>
            {props.heading}
          </h1>
          <h2 className="exo m-0" style={{ color: "#ff0505" }}>
            {props.subHeading}
          </h2>
          <p
            className="londrina m-0 "
            style={{ color: "black", fontSize: "20px", paddingLeft: "2px" }}
          >
            {props.description}
          </p>
        </div>
      </div>
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
        <div className="features text-primary mt-4">
          <div className="m-0 py-4">
            <Feature
              heading="Mental Fortitude"
              subHeading="Lorem"
              description="LOremLoremLoREMLoremLoReM"
              img={Mental}
            />

            <div>
              <Feature
                heading="Physical Strength"
                subHeading="Lorem"
                description="LOremLoremLoREMLoremLoReM"
                img={Physical}
              />
            </div>

            <Feature
              heading="Education"
              subHeading="Lorem"
              description="LOremLoremLoREMLoremLoReM"
              img={Education}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
