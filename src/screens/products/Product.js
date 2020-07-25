import React, { Component } from "react";
import Layout from "../../component/layout/Layout";
import Item from "../../component/widget/Item";
import db from "../../db.json";

export default class Products extends Component {
  render() {
    return (
      <Layout heading=" Properties Available">
        <div className="container-fluid">
          <div className="row">
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

                <Item
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
        </div>
      </Layout>
    );
  }
}
