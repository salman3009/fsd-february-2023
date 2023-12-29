import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return navigate("/")
  }

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Dashboard;
