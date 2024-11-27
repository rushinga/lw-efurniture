import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginBody from "../components/LoginBody";

const Login = () => {
  return (
    <>
      <div>
        <Header />
        <LoginBody />
        <Footer />{" "}
      </div>
    </>
  );
};

export default Login;
