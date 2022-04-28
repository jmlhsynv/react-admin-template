import React from "react";
import { useDispatch } from "react-redux";
import { toggler } from "../store/toggle";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={() => dispatch(toggler())}
      >
        <i className="fa fa-bars"></i>
      </button>
    </nav>
  );
}

export default Navbar;
