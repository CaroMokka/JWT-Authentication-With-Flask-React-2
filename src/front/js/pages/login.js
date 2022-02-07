import React, { useState } from "react";

export const Login = () => {
    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = () => {}
  return (
    <div className="container bg-light p-4 mt-4 shadow-sm">
      <form className="form">
        <h2 className="text-center mt-4">Login</h2>
        <div className="container w-50">
          <div className="row">
            <label>Email</label>
            <input type="email" className="form-control" name="email" />
          </div>

          <div className="row">
            <label>Password</label>
            <input type="password" className="form-control" name="password" />
          </div>

          <div className="row mt-3">
            <button type="submit" className="btn btn-dark btn-sm m-auto w-25">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
