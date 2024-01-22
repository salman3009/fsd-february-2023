import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Header from './Header';
import Library from './Library';
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserProvider';

function ProtectedRoute({ children }) {
  const { getUser } = useUser();
  if (getUser && getUser.status == "success") {
    return children;
  }
  else {
    return <Navigate to={"/login"} />
  }
}


function App() {

  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "f104bi07c490";
    return config;
  })

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<ProtectedRoute>
            <Library />
          </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
