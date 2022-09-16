import React from "react"
import Image from "next/image"

export default () => {
  return (
    <div className="text-light">
      <div style={{ width: "100vw", minHeight: "100vh" }} className="bg-dark">
        <div style={{ filter: "drop-shadow(5px 5px 5px #00000050)" }} className="text-center pt-4 d-flex justify-content-center w-100">
          <div className="pt-4 text-center d-flex align-items-center flex-column">
            <h1 className="marker">Solid Tech</h1>
            <h2 className="marker pb-2 text-danger" style={{ fontSize: "20px" }}>Wrestling Club</h2>
            <div style={{ height: 200, width: 200, filter: "drop-shadow(5px 5px 5px #00000050)" }} className="rounded-circle bg-light d-flex align-items-center justify-content-center">
              <Image width={200} height={200} src={"/logo.png"} />
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 py-4" style={{ maxWidth: "600px" }} >
          <div className="d-flex justify-content-center text-danger">
            <a href="#">Practice Times</a>
            <span className="mx-2 text-white">&#8226;</span>
            <a href="#">Gallery</a>
            <span className="mx-2 text-white">&#8226;</span>
            <a href="#">Memberships</a>
          </div>
          <hr />
          <div className="row">
            <div className="col col-12 col-md-4 text-center">
              <div style={{ margin: "-30px" }}>
                <Image src="/dumbbell.png" width={150} height={150} />
              </div>
              <p><b className="underline">Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col col-12 col-md-4 text-center">
              <div style={{ margin: "-30px" }}>
                <Image src="/lightbulb.png" width={150} height={150} />
              </div>
              <p><b className="underline">Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col col-12 col-md-4 text-center">
              <div style={{ margin: "-30px" }}>
                <Image src="/medal.png" width={150} height={150} />
              </div>
              <p><b className="underline">Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <div className="pb-4">
              <a href="https://buy.stripe.com/test_6oEbJ362deve6bK6oo">
                <button className="btn btn-danger btn-lg shadow">Join Today</button>
              </a>
            </div>
            <small><i>Classes starting at $99/session!</i></small>
          </div>
        </div>
      </div>
      <div className="bg-danger text-light inset-shadow" style={{ minHeight: "100vh" }}>
      </div>
      <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
        <div className="px-2" style={{ maxWidth: "800px", margin: "auto" }}>
          <div className="row">
            <div className="col col-md-6">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}