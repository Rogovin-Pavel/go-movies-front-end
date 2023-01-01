import React, { useState } from "react";
import Input from "./form/Input";
import { useOutletContext, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setJwtToken, setAlertMessage, setAlertClassName } =
    useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email === "rogovin.pavel@gmail.com") {
      setJwtToken("abc");
      setAlertMessage("");
      setAlertClassName("d-none");
      navigate("/");
      return;
    }

    setAlertMessage("Invalid credantials");
    setAlertClassName("alert-danger");
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          value={email}
          title="Email Address"
          type="email"
          name="email"
          autoComplete="email-new"
          className="form-control"
          whenChange={setEmail}
        />
        <Input
          value={password}
          title="Password"
          type="password"
          name="password"
          autoComplete="password-new"
          className="form-control"
          whenChange={setPassword}
        />
        <hr />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};
