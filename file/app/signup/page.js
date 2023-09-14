"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const SignUp = () => {
  const trySignUp = (e) => {
    e.preventDefault();
    const signUpData = {
      Username: document.getElementById("Username").value,
      Password: document.getElementById("Password").value,
      Email: document.getElementById("Email").value,
    };
    console.log(signUpData);
  };
  return (
    <div>
      <Navbar />
      <main className="grid loginFormParent">
        <div className="loginForm">
          <Image
            width={100}
            height={200}
            className="FormImage"
            alt="Leetcode-Image"
            src="data:image/png;base64,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"
          />
          <center className="loginFormText">leetCode</center>
          <form onSubmit={trySignUp} className="loginFormForm">
            <input type="text" name="" placeholder="Email" id="Email" /> <br />
            <input
              type="text"
              name=""
              placeholder="UserName"
              id="Username"
            />{" "}
            <br />
            <input
              type="password"
              name=""
              placeholder="Password"
              id="Password"
            />
            <br />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
