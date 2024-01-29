import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

export const SignIn = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { signInContext } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const signIn = async (userInfo) => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            projectID: "8nbih316dv01",
          },
          body: JSON.stringify({
            ...userInfo,
            appType: "music",
          }),
        }
      );
      console.log("response", response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const {
          token,
          data: { name },
        } = data;
        console.log(token, name);
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", name);
        signInContext(token);
        navigate("/");
      } else {
        console.error("SignUp Failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="username"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <input type="submit" value="Sign in" />
      </form>
      <p>Don't have an account?</p>
      <button onClick={() => navigate("/signup")}>SignUp here!</button>
    </section>
  );
};
