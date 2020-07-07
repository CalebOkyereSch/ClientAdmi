import React from "react";
import db from "../../db.json";
import Item from "../../component/widget/Item";
import HomeCards from "../../component/widget/HomeCards";
import { Link } from "react-router-dom";
import Navbar from "../../component/layout/Navbar";
import Footer from "../../component/layout/Footer";
function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <header
          className="jumbotron my-4"
          style={{
            backgroundColor: "rgb(15, 46, 64,0.7)",
          }}
        >
          <h1 className="display-3" style={{ color: "#fff" }}>
            A Warm Welcome!
          </h1>
          <p className="lead" style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
            similique quaerat nam nobis illo aspernatur vitae fugiat numquam
            repellat.
          </p>
          <Link to="#" className="btn btn-primary btn-lg">
            Get To Know Us
          </Link>
        </header>
        <HomeCards />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/products"
              style={{ fontSize: 15, fontWeight: "bolder" }}
            >
              Properties
            </Link>
          </li>
        </ul>
        <div className="row text-center">
          {db.Buildings.map((item, index) => {
            return (
              <Item
                key={index}
                picture={item.picture}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                location={item.location}
                doors={item.doors}
                price={item.price}
              />
            );
          })}
        </div>
        <Link
          to="/products"
          type="button"
          class="btn btn-primary btn-lg btn-block"
        >
          View More Properties
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
