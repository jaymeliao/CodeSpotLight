import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";


function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;

  /*
   * Component Mount, if JWT token is set the user is still considered logged in
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUserData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoggedIn(true);
        setUser(response.data.user);
        setLoading(false); // Set loading to false after successful fetch
      } catch (err) {
        console.error(err.response.data.message);
        setError("Error getting user data");
        setLoading(false); // Set loading to false on error as well
      }
    };
    if (token) {
      getUserData();
    } else {
      setLoading(false); // If no token, set loading to false
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      localStorage.setItem("token", response.data.token); // save token in localStorage

      if (response.data.token) {
        // get user data using token
        const userResponse = await axios.get(`${apiUrl}/user`, {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });

        setLoggedIn(true);
        setUser(userResponse.data.user); // save decoded user data in state
        setError("");
      }
    } catch (err) {
      setError("Error Login: Please check your username or password.");
    }
  };

  const handleLoginAfterSignup = async (username, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      const userResponse = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      setLoggedIn(true);
      setUser(userResponse.data.user);
    } catch (err) {
      console.error(
        err.response?.data?.message || "Automatic login after signup failed"
      );
      setError("Automatic login after signup failed");
    }
  };

  /*
   * Logout of application, clears localStorage JWT token and set state to logged out
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser({});
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        {loading ? ( // Show a loading indicator while fetching user data
          <Route path="/" element={<></>} /> // Render the Loading component
          ) : (
          loggedIn ? (
            <Route
              path="/"
              element={<HomePage user={user} setUser={setUser} handleLogout={handleLogout} />}
            />
          ) : (
            <Route
              path="/"
              element={<LoginPage handleLogin={handleLogin} error={error} />}
            />
          )
        )}
        <Route
          path="/signup"
          element={<SignUpPage handleLoginAfterSignup={handleLoginAfterSignup} />}
        />
        <Route
          path="*"
          element={<h1>Wrong Way : 404 not found</h1>}
        />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
