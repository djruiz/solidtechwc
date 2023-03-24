import Link from "next/link"

export default () => {
    return  <div className="container text-center mt-4">
        <h1>
            Services
        </h1>
        <div className="service" id="drop-in">
            <Link href="https://buy.stripe.com/8wM3e40pgg0S3m028b">
                <button className="mt-4 position-relative btn btn-primary btn-lg w-100 shadow-med exo">Drop-In Class</button>
            </Link>
        </div>
        <div className="service" id="drop-in">
            <Link href="https://buy.stripe.com/5kA5mc4Fw7um3m06os">
                <button className="mt-4  position-relative btn btn-primary btn-lg w-100 shadow-med exo">Order a Singlet</button>
            </Link>
        </div>

        <div className="service" id="drop-in">
            <Link href="https://buy.stripe.com/28o3e4b3UdSK09O5kq">
                <button className="mt-4 position-relative btn btn-primary btn-lg w-100 shadow-med exo">Virginia Beach</button>
            </Link>
        </div>

        <div className="service" id="drop-in">
            <Link href="https://buy.stripe.com/7sIg0Q8VMbKCe0EcMR">
                <button className="mt-4 position-relative btn btn-primary btn-lg w-100 shadow-med exo">Virginia Beach with transportation and Airbnb</button>
            </Link>
        </div>
    </div>   
}