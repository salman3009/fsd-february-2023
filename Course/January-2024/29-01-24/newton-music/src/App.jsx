import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Social } from "./pages/Social";
import { useUser } from "./Provider/UserProvider";
import { Library } from "./pages/Library";

function ProtectedRoute({ children }) {
  const { isUserLoggedIn } = useUser();
  if (!isUserLoggedIn) {
    return <Navigate to={"/signin"} />;
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "6rem" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/social" element={<Social />} />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
