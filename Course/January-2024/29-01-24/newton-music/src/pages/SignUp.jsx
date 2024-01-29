import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Provider/UserProvider";

export const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate("");
  const { signUpContext } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const signUp = async (userInfo) => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
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

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const {
          token,
          data: { name },
        } = data;
        sessionStorage.setItem("authToken", token);
        sessionStorage.setItem("userInfo", JSON.stringify(name));
        signUpContext(token);
        navigate("/");
      }
    } catch (err) {
      if (err) {
        console.log(err.response.data.message);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(userInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={userInfo.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        id="email"
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
      <input type="submit" value="Sign Up" />
      <p>Already have an account? </p>
      <button onClick={() => navigate("/signin")}>SignIn here!</button>
    </form>
  );
};
