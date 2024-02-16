import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, userName: action.payload }
    case "PASSWORD":
      return { ...state, password: action.payload }
    case "LOGIN":
      return { ...state, isLogged: action.payload }
    case "LOGOUT":
      return { ...state, userName: '', password: '', isLogged: false, error: false }
    case "ERROR":
      return { ...state, error: true }
  }
};


export default function Home() {

  const initialState = { userName: '', password: '', isLogged: false, error: false };



  const [updateState, dispatch] = useReducer(reducer, initialState);

  const onChangeUserNameHandler = (event) => {
    dispatch({ type: "USERNAME", payload: event.target.value });
  }

  const onChagePasswordHandler = (event) => {
    dispatch({ type: "PASSWORD", payload: event.target.value });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (updateState.userName.length != 0 && updateState.password.length != 0) {
      dispatch({ type: "LOGIN", payload: true })
    }
    else {
      dispatch({ type: "ERROR" });
    }


  }

  const onLogoutHandler = () => {
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div id="main">
      {updateState.isLogged && <section className="logout-section">
        <h2>Logged in successfully!</h2>
        <p>Welcome {updateState.userName}!</p>
        <button onClick={onLogoutHandler} className="logout-btn">Logout</button>
      </section>
      }

      {!updateState.isLogged && <form className="login-form" >
        {updateState.error && <p className='invalid-error'>Invalid username or password!</p>}
        <section className="username-input">
          <label>Username: </label>
          <input type="text" placeholder="Username" className="username" onChange={onChangeUserNameHandler} />
        </section>
        <section className="password-input">
          <label>Password: </label>
          <input type="password" placeholder="Password" className="password" onChange={onChagePasswordHandler} />
        </section>
        <button className="login-btn" onClick={onSubmitHandler}>Login</button>
      </form>}

    </div>
  );
}
