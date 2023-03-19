import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Lightning from "../img/lightning.png";
import Tossed from "../img/tossed.jpg";
import Mental from "../img/mental.png";
import Physical from "../img/physical.png";
import Education from "../img/education.png";
import InstagramLogo from "../img/ig-logo.png";
import { InstagramEmbed } from "react-social-media-embed";
import Gallery2 from "../img/gallery/2.jpg";
import Gallery3 from "../img/gallery/3.jpg";
import Gallery4 from "../img/gallery/4.png";
import Gallery5 from "../img/gallery/5.png";
import Gallery6 from "../img/gallery/6.png";
import Gallery7 from "../img/gallery/7.jpg";
import Gallery8 from "../img/gallery/8.jpg";
import Gallery9 from "../img/gallery/9.jpg";
import Gallery10 from "../img/gallery/10.jpg";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  children: React.ReactNode;
  color: string;
  flip?: boolean;
  className?: string;
  style?: React.CSSProperties;
  pre?: React.ReactNode;
}

interface FeatureProps {
  img: StaticImageData;
  heading: string;
}

const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        flexDirection: props.flip ? "row-reverse" : "row",
        zIndex: 1,
        width: "100vw",
        ...props.style,
      }}
      className={
        "d-flex align-items-center position-relative bg-dark px-4 " +
        (props.className || "")
      }
    >
      <span className="d-flex" style={{ color: props.color, flexShrink: 0 }}>
        {props.children}
      </span>
      <div
        style={{ }}
      ></div>
      {props.pre}
    </div>
  );
};

const Feature = (props: FeatureProps) => {
  return (
    <div className="my-3 position-relative">
      <div
        className="row m-0 feature-background rounded shadow border border-primary p-3 align-items-center"
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
          <h1
            className="open-sans m-0"
            style={{ color: "white", fontSize: 32 }}
          >
            {props.heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

function useScreenSize() {
  let [sm, setSm] = useState(false);
  let [xs, setXs] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth <= 992) {
      setSm(true);
    } else {
      setSm(false);
    }

    if (window.innerWidth <= 576) {
      setXs(true);
    } else {
      setXs(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
  }, []);

  return { sm, xs };
}

export default () => {
  const { sm, xs } = useScreenSize();

  return (
    <>
      <Head>
        <title>Solid Tech Wrestling Club</title>
      </Head>
      <div className="mh-100 bg-darkish" style={{ paddingBottom: 50 }}>
        <div>
          <div className="position-relative shadow-max" style={{ zIndex: 2 }}>
            <Header color="#fff" className="pt-4">
              <h1 style={{ fontSize: 28 }} className="m-0 mr-4 open-sans p-0">
                Solid Tech
              </h1>
            </Header>
            <Header color="#ff0505" className="pb-4">
              <div
                className="d-flex align-items-center"
                style={{ width: "100%" }}
              >
                <h1 style={{ fontSize: 24 }} className="exo p-0 m-0">
                  Wrestling Club
                </h1>
                <Image width={40} height={30} src={Lightning} />
              </div>
            </Header>
          </div>
          <div>
            <div
              className={sm ? "" : "shadow-max "}
              style={{
                width: "100vw",
                height: "100%",
                minHeight: sm ? 800 : 600,
                maxHeight: sm ? "none" : "calc(100vh - 100px)",
                position: "absolute",
                top: 100,
                left: 0,
              }}
            >
              <div
                className={"position-absolute " + (sm ? "shadow" : "")}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: xs
                    ? ""
                    : "linear-gradient(to right, #00000000, #200000a0)",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="position-relative overflow-hidden"
                style={{ width: "100%", height: "100%", zIndex: 0 }}
              >
                <Image
                  objectFit="cover"
                  objectPosition={xs ? "-100px " : "left"}
                  layout={"fill"}
                  src={Tossed}
                />
              </div>
            </div>
            <div className="position-relative" style={{ zIndex: 2 }}>
              <div
                className={
                  "features text-primary d-flex " +
                  (xs ? "justify-content-center" : "justify-content-end")
                }
                style={{
                  minHeight: "calc(100vh - 140px)",
                  height: "100%",
                  marginRight: sm ? 0 : "10vw",
                  marginTop: sm ? 0 : "5vh",
                }}
              >
                <div
                  className="m-4"
                  style={{ maxWidth: sm ? "none" : "500px" }}
                >
                  <Feature heading="Strong Mind" img={Mental} />

                  <Feature heading="Strong Body" img={Physical} />

                  <Feature heading="Life Long Learners" img={Education} />

                  <p
                    style={{
                      fontSize: "20px",
                      color: "#fff",
                      textAlign: "center",
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                    }}
                  >
                    Solid Tech Wrestling Club prepares its athletes with the
                    skills, knowledge, and experience it takes to win. Join us
                    today and become a champion.
                  </p>
                  <Link href="https://buy.stripe.com/6oEg0Qc7Y7um8Gk4gi">
                    <button className="position-relative btn btn-primary btn-lg w-100 shadow-med exo">
                      JOIN TODAY
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Header
            pre={
              <p
                className="m-0 mr-4 exo"
                style={{
                  minWidth: "260px",
                  color: "#aa0000",
                  position: "relative",
                  top: -1,
                }}
              >
                Practice Times: Tuesdays 5-7pm &amp; Sundays @ 1-3pm
              </p>
            }
            color="#fff"
            flip
            className="py-2 shadow-max position-fixed bottom-0"
            style={{ bottom: 0, zIndex: 2 }}
          >
            <h2
              style={{ fontSize: 20, position: "relative", top: -1 }}
              className="m-0 ml-4 londrina"
            >
              Stay. <span className="text-primary">Solid.</span>
            </h2>
          </Header>

          <div>
            {/*
            <div className="container text-light mt-5">
              <div style={{}} className="bg-dark shadow rounded p-5">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div>
                      <h1>
                        <span className="text-primary">Solid Tech</span>
                        <br /> Youth Wrestling Program
                      </h1>
                      <h3 className="exo">Winter Session 3</h3>
                    </div>
                    <hr style={{ borderColor: "white" }} />
                    <div>
                      <div className="mt-4">
                        <div>
                          <h4 className="exo">Schedule:</h4>
                          <p>Tuesdays & Fridays 6-7pm</p>
                        </div>
                        <div>
                          <h4 className="exo">What You Get:</h4>
                          <ul>
                            <li>8 Youth Practices</li>
                            <li>Club Logo Sticker</li>
                            <li>Match Day</li>
                            <li>A Medal on Match Day</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xs-12 col-md-6">
                    <div className="bg-light shadow rounded text-dark p-4 text-center">
                      <div
                        className="d-flex justify-content-around align-items-center"
                        style={{ flexDirection: sm ? "column" : "row" }}
                      >
                        <div className="mx-2">
                          <h4 className="p-0 m-0">70$</h4>
                          <p className="p-0 m-0">Per Kid</p>
                        </div>
                        <div
                          className="bg-primary my-4"
                          style={{
                            width: sm ? "100%" : "2px",
                            height: sm ? "2px" : "50px",
                          }}
                        ></div>
                        <div className="mx-2">
                          <p className="p-0 m-0">Youth Age</p>
                          <h4 className="p-0 m-0">5-11</h4>
                        </div>
                        <div
                          className="bg-primary my-4"
                          style={{
                            width: sm ? "100%" : "2px",
                            height: sm ? "2px" : "50px",
                          }}
                        ></div>
                        <div className="mx-2">
                          <h4 className="p-0 m-0">Jan 8th-Jan 31st</h4>
                          <p className="p-0 m-0">2022-2023</p>
                        </div>
                      </div>
                    </div>
                    <p className="my-4" style={{ color: "#aaa" }}>
                      Now is the time to sign up for youth wrestling at Solid
                      Tech Wrestling Club! Our winter session 3 will consist of
                      8 youth practices, teaching the sport to beginners and
                      developing the experienced kids with opprotunities to
                      build off of what they already know. We will set up
                      matches for kids within the same weight and age limit.
                    </p>
                    <div className="mb-4">
                      <p className="exo m-0 p-0">
                        <b>Location: </b>
                        <span>
                          1519 Goshen Road @ The Fort Wrestling Facility
                        </span>
                      </p>
                      <p className="exo m-0 p-0">
                        <b>Contact: </b>
                        <span>Coach Bolden (260) 515 - 5620</span>
                      </p>
                    </div>
                    <div>
                      <Link href="https://buy.stripe.com/bIY2a01tk7um3m0aEF">
                        <button className="btn btn-primary btn-lg w-100">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          */}
            <div>
              <div
                className="container py-4"
                style={{
                  marginTop: "50px",
                }}
              >
                <div className="my-5 text-light text-center">
                  <h2 className="mb-2 display-4 exo" style={{}}>
                    GET ONE-ON-ONE COACHING
                  </h2>
                  <h5>
                    Get in contact with our head coach today and find out how
                    you can take your wrestling to the next level.
                  </h5>
                </div>
                <div className="row text-light text-center">
                  <div className="col col-md-6 col-12 mb-4 align-items-end">
                    <div className="card border border-primary shadow rounded p-4 bg-dark text-light">
                      <div className="text-primary">
                        <FontAwesomeIcon size="4x" icon={faStar} />
                      </div>
                      <h4 className="text-primary mt-4">
                        Set up a private session
                      </h4>
                      <p className="my-4">
                        Get individual coaching and attention to get the
                        instruction you need. Private sessions allow the time
                        and focus to work on the small technical details to
                        improve your wrestling. Click below to get in touch and
                        set up a session.
                      </p>
                      <div>
                        <a href="mailto:solidtechwrestlingclub@gmail.com?subject=Private coacing session&body=Hi Coach, I'm interested in setting up a private coaching session.">
                          <button
                            className="align-items-end btn btn-primary btn-lg w-100 shadow-lg exo"
                            style={{ fontSize: 24 }}
                          >
                            Private Sessions
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6 col-sm-12 mb-4">
                    <div className="card border border-primary shadow rounded p-4 bg-dark text-light">
                      <div className="text-primary">
                        <FontAwesomeIcon size="4x" icon={faVideoCamera} />
                      </div>
                      <h4 className="text-primary mt-4">
                        Set up a film review
                      </h4>
                      <p className="my-4">
                        Have film of your matches? Send our coach an email to
                        set up a review session, which can be done online or in
                        person. Our coach will study the film and provide a
                        comprehensive breakdown of what happened and where you
                        can improve!
                      </p>
                      <div className="align-items-end">
                        <a href="mailto:solidtechwrestlingclub@gmail.com?subject=Film Review session&body=Hi Coach, I'm interested in setting up a film review.">
                          <button
                            className="btn btn-primary btn-lg w-100 shadow-lg exo"
                            style={{ fontSize: 24 }}
                          >
                            Film Reviews
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-container container">
                <h1 style={{ color: "#555" }} className="text-center mb-4 pb-4">
                  Our Wrestlers
                </h1>
                <div className="row">
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      objectFit="cover"
                      width={400}
                      height={250}
                      src={Gallery3}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      width={400}
                      height={250}
                      src={Gallery7}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      width={400}
                      height={250}
                      src={Gallery8}
                      className="gallery-img shadow"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      objectFit="cover"
                      width={400}
                      height={250}
                      src={Gallery4}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      objectFit="cover"
                      width={400}
                      height={250}
                      src={Gallery5}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      objectFit="cover"
                      width={400}
                      height={250}
                      src={Gallery6}
                      className="gallery-img shadow"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      objectFit="cover"
                      width={400}
                      height={250}
                      src={Gallery2}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      width={400}
                      height={250}
                      src={Gallery10}
                      className="gallery-img shadow"
                    />
                  </div>
                  <div className="col mb-4 pb-4 col-12 col-md-4 gallery-img-container">
                    <Image
                      width={400}
                      height={250}
                      src={Gallery9}
                      className="gallery-img shadow"
                    />
                  </div>
                </div>
              </div>
              <div className="container py-4" style={{ marginTop: "50px" }}>
                <div className="row flex-row-reverse">
                  <div className="col col-12 col-md-6 mb-4 pb-4">
                    <div>
                      <InstagramEmbed
                        url="https://www.instagram.com/solidtechwrestlingclub/?hl=en"
                        height={"100%"}
                        width={"100%"}
                      />
                    </div>
                  </div>
                  <div
                    className="col col-12 col-md-6 d-flex flex-column align-items-center"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h2 className="text-light text-center">
                        Follow us on Instagram
                      </h2>
                    </div>
                    <div className="w-100 d-flex justify-content-center mt-4 pt-4">
                      <div className="drop" style={{ maxWidth: 150 }}>
                        <Image src={InstagramLogo} />
                      </div>
                    </div>
                    <a
                      target={"_blank"}
                      href="https://www.instagram.com/solidtechwrestlingclub/?utm_source=ig_embed"
                    >
                      <div
                        style={{ maxWidth: 250, marginTop: 50 }}
                        className="btn btn-primary btn-lg exo"
                      >
                        FOLLOW SOLID TECH
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
