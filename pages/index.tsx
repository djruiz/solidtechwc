import React from "react"
import Image, { StaticImageData } from "next/image"
import Lightning from "../img/lightning.png"
import Tossed from "../img/tossed.jpg"
import Mental from "../img/mental.png"
import Physical from "../img/physical.png"
import Education from "../img/education.png"
import useScreenSize from 'use-screen-size'

interface HeaderProps {
  children: React.ReactNode
  color: string
  flip?: boolean
  className?: string
  style?: React.CSSProperties
  pre?: React.ReactNode
}

interface FeatureProps {
  img: StaticImageData
  heading: string
  subHeading: string
  description: string
}

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{ flexDirection: props.flip ? "row-reverse" : "row", zIndex: 1, width: "100vw", ...props.style }}
      className={"d-flex align-items-center position-relative bg-dark px-4 " + (props.className || "")}
    >
      <span className="d-flex" style={{ color: props.color, flexShrink: 0 }}>
        {props.children}
      </span>
      <div
        style={{ width: "100%", height: "3px", backgroundColor: props.color }}
      ></div>
      {props.pre}
    </div>
  )
}

const Feature = (props: FeatureProps) => {
  return (
    <div className="my-3 position-relative">
      <div
        className="row m-0 feature-background rounded shadow border border-primary p-3"
        style={{ backgroundColor: "#000000d0" }}
      >
        <div className="col-sm-12 col-lg-3 d-flex align-items-center justify-content-center">
          <div
            className="image-background d-flex align-items-center justify-content-center p-2"
            style={{
              backgroundColor: "white",
              borderRadius: "100%",
            }}
          >
            <Image src={props.img} width={50} height={50} />
          </div>
        </div>
        <div className="col-sm-12 col-lg-9 feature-text">
          <h2 className="open-sans m-0" style={{ color: "white", fontSize: 24 }}>
            {props.heading}
          </h2>
          <p
            className="londrina m-0 text-primary"
            style={{ fontSize: "20px", paddingLeft: "2px" }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default () => {
  const size = useScreenSize()
  const sm = size.width <= 992
  const xs = size.width <= 576

  return (
    <div className="mh-100 bg-darkish">
      <div>
        <div className="position-relative shadow-max" style={{ zIndex: 2 }}>
          <Header color="#fff" className="pt-4">
            <h1 style={{ fontSize: 28 }} className="m-0 mr-4 open-sans p-0">Solid Tech</h1>
          </Header>
          <Header color="#ff0505" className="pb-4">
            <div className="d-flex align-items-center" style={{ width: "100%" }}>
              <h1 style={{ fontSize: 24 }} className="exo p-0 m-0">Wrestling Club</h1>
              <Image width={40} height={30} src={Lightning} />
            </div>
          </Header>
        </div>
        <div>
          <div
            className={sm ? "" : "shadow-max "}
            style={{ width: "100vw", height: "100%", minHeight: sm ? 800 : 600, maxHeight: sm ? "none" : "calc(100vh - 100px)", position: "absolute", top: 100, left: 0 }}
          >
            <div className={"position-absolute " + (sm ? "shadow" : "")} style={{ width: "100%", height: "100%", backgroundColor: xs ? "#000000d0" : "", backgroundImage: xs ? "" : "linear-gradient(to right, #00000000, #200000a0)", zIndex: 1 }}></div>
            <div className="position-relative overflow-hidden" style={{ width: "100%", height: "100%", zIndex: 0 }}>
              <Image objectFit="cover" objectPosition="left" layout={"fill"} src={Tossed} />
            </div>
          </div>
          <div className="position-relative" style={{ zIndex: 2 }}>
            <div className={"features text-primary d-flex " + (xs ? "justify-content-center" : "justify-content-end")} style={{ minHeight: "calc(100vh - 140px)", height: "100%", marginRight: sm ? 0 : "10vw", marginTop: sm ? 0 : "5vh" }}>
              <div className="m-4">
                <Feature
                  heading="Mental Fortitude"
                  subHeading="Lorem"
                  description="LOremLoremLoREMLoremLoReM"
                  img={Mental}
                />

                <Feature
                  heading="Physical Strength"
                  subHeading="Lorem"
                  description="LOremLoremLoREMLoremLoReM"
                  img={Physical}
                />

                <Feature
                  heading="Education"
                  subHeading="Lorem"
                  description="LOremLoremLoREMLoremLoReM"
                  img={Education}
                />
                <a href="">
                  <button className="position-relative btn btn-primary btn-lg w-100 shadow-med exo" style={{ fontSize: 24 }}>JOIN TODAY</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Header pre={<p className="m-0 mr-4 exo" style={{ minWidth: "260px", color: "#aa0000", position: "relative", top: -1 }}>Practice Times: Wed &amp; Thur @4pm</p>} color="#fff" flip className="py-2 shadow-max position-fixed bottom-0" style={{ bottom: 0, zIndex: 2 }}>
          <h2 style={{ fontSize: 20, position: "relative", top: -1 }} className="m-0 ml-4 londrina">
            Stay. <span className="text-primary">Solid.</span>
          </h2>
        </Header>
      </div>
    </div>
  )
}
