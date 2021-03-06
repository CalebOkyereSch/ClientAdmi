import React from "react";
import { Link } from "react-router-dom";
export const AdmiSideNav = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar position-fixed h-100">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link text-secondary "
              to="/"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-secondary "
              to="/add-item"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file"
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>
              Add Property
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link text-secondary "
              to="/cart"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-shopping-cart"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Orders
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-secondary "
              to="/customers"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-secondary "
              to="/admin"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bar-chart-2"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Admins
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-secondary "
              to="/products"
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "5px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                style={{ marginRight: "20px" }}
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Properties
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
