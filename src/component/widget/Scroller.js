import React, { Component } from "react";
import style from "./scroller.css";
import { Link } from "react-router-dom";

export default class Scroller extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginBottom: "50px", marginTop: "50px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          <div
            className="display-5"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            {this.props.topic}
          </div>
          <Link
            to={this.props.buttonLink}
            className="btn btn-sm btn-dark"
            // onClick={() => props.getItem(props.id)}
          >
            {this.props.buttonText}
          </Link>
        </div>
        <nav className={style.navBar}>
          <div className={style.container}>
            <ul className={style.nav}>{this.props.children}</ul>
          </div>
        </nav>
      </div>
    );
  }
}
