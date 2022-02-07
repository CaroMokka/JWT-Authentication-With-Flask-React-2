import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="bg-light">
      <div className="container-fluid p-2">
        <div className="row d-flex justify-content-around">
          <div className="col-6">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">Menu</span>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <div className="col-3">
              <Link to="/registro">
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
            {/* ---------->>>>> */}
            <div className="col-3 d-flex flex-direction-">
              {!store.token ? (
                <Link to="/login">
                  <button className="btn btn-primary">Log In</button>
                </Link>
              ) : (
                <button className="btn btn-primary" onClick={()=> actions.logout()}>Log Out</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
