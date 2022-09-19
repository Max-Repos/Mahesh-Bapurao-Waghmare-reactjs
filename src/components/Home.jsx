import React from "react";
import Products from "./Products";
import bg from "../assests/bg.jpg";

function Home() {
  return (
    <div className="Hero">
      <div className="card text-bg-dark border-0">
        {/* <!-- <img src="bg.jpg"/> --> */}
        <img src={bg} className="card-img" alt="Background" height="900px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">U-PAYMENT</h5>
            <p className="card-text lead fs-2">
              Check out our products...
            </p>
          </div>
        </div>
      </div>
    <Products/>
    </div>
  );
}

export default Home;
