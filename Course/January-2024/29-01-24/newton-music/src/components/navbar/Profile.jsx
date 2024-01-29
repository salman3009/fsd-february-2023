import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Provider/UserProvider";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const profileIconRef = useRef(null);
  const navigate = useNavigate();
  let loginUsername = sessionStorage.getItem("userInfo");
  const { isUserLoggedIn, signOutContext } = useUser();

  useEffect(() => {
    const hideModal = (e) => {
      if (profileIconRef.current.contains(e.target)) {
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  const handleSignOut = () => {
    signOutContext();
    navigate("/signin");
  };

  return (
    <section
      className="profile"
      onClick={() => {
        setShowModal(!showModal);
      }}
      ref={profileIconRef}
    >
      <section className="profile-icon">
        <ProfileIcon />
      </section>

      <p>{isUserLoggedIn ? loginUsername : ""}</p>

      {showModal && (
        <section className="auth-modal">
          {isUserLoggedIn ? (
            <button className="signin-btn" onClick={handleSignOut}>
              Sign out
            </button>
          ) : (
            <button
              className="signin-btn"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign-in
            </button>
          )}
        </section>
      )}
    </section>
  );
};
