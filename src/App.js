import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./Components/Header/Header";
import HomeFeed from "./Pages/HomeFeed/HomeFeed";
import FeedPostsList from "./Components/FeedPostsList/FeedPostsList";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  /*
   * Component Mount, if JWT token is set the user is still considered logged in
   */
  useEffect(() => {
    // get token from localStorage if it exists/is set
    const token = localStorage.getItem("token");
    const getUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user", {
          headers: {
            Authorization: `Bearer ${token}`, // send token as auth header
          },
        });
        setLoggedIn(true);
        setUser(response.data.user);
        console.log(response.data.user+"is logged in.")
      } catch (err) {
        console.error(err.response.data.message);
        setError("Error getting user data");
      }
    };
    if (token) {
      // if the token is set fetch user data with the provided token
      getUserData();
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: event.target.username.value,
        password: event.target.password.value,
      });

      localStorage.setItem("token", response.data.token); // save token in localStorage
       
      if (response.data.token) {
        // get user data using token
        const userResponse = await axios.get("http://localhost:8080/user", {
          headers: {
            Authorization: `Bearer ${response.data.token}`,
          },
        });

        setLoggedIn(true);
        setUser(userResponse.data.user); // save decoded user data in state
        setError("");
      }
    } catch (err) {
      console.error(err.response.data.message);
      setError("error logging in");
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
        <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<FeedPostsList/>}/>
        </Routes>

        {!loggedIn && (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="username"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
          </form>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;