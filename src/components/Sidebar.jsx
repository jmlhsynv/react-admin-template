import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggler } from "../store/toggle";

function Sidebar() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.toggle);

  const [dropdown, setDropdown] = useState({
    first: false,
    second: false,
  });

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        toggle ? "toggled" : ""
      }`}
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <NavLink className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <span
          className={dropdown.first ? "nav-link" : "nav-link collapsed"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
          onClick={() => setDropdown({ ...dropdown, first: !dropdown.first })}
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </span>
        <div
          id="collapseTwo"
          style={{ transition: "0.15s ease" }}
          className={dropdown.first ? "collapse show" : "collapse"}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Products:</h6>
            <Link className="collapse-item" to="/">
              Product List
            </Link>
            <Link className="collapse-item" to="/">
              New Product
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() => dispatch(toggler())}
        ></button>
      </div>
    </ul>
  );
}

export default Sidebar;
