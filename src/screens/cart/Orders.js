import React, { Component } from "react";
import db from "../../db.json";
import CartItem from "../../component/widget/CartItem";
import Layout from "../../component/layout/Layout";

export default class Orders extends Component {
  render() {
    return (
      <Layout heading="Orders">
        <div className="container-fluid row">
          {db.Buildings.map((item, index) => {
            return (
              // <Item
              //   key={index}
              //   picture={item.main}
              //   bedrooms={item.bed}
              //   bathrooms={item.bath}
              //   location={item.location}
              //   doors={item.rooms}
              //   price={item.price}
              //   id={item._id}
              // />

              <CartItem
                key={item.id}
                picture={item.picture}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                location={item.location}
                doors={item.doors}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}
