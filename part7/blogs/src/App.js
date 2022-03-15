import React, { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import Login from "./components/Login";
import blogService from "./services/blogs";
import loginService from "./services/login";
import NewBlog from "./components/NewBlog";
import Togglable from "./components/Togglable";
import { ErrorMsg, SuccessMsg } from "./components/Notification";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "./reducers/blogreducer";
const App = () => {
  const blogs = useSelector((state) => state.blogs);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [sucMessage, setSucMessage] = useState(null);
  const [user, setUser] = useState(null);
  const blogRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  useEffect(() => {
    const loggedUserJSon = window.localStorage.getItem("loggedBlogUser");
    if (loggedUserJSon) {
      const user = JSON.parse(loggedUserJSon);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in with", username, password);
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  const deleteBlog = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      try {
        const response = await blogService.deletion(blog.id);
        console.log(response);
      } catch (e) {
        setErrorMessage(
          "maybe your token expired, tryna delete others' blogs? error happened dumbo"
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      }
    }
  };
  const newLike = async (blog) => {
    const newBlog = {
      user: blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url,
    };
    await blogService.update(blog.id, newBlog);
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
  };
  const LogOut = () => {
    setUser(null);
    window.localStorage.removeItem("loggedBlogUser");
  };
  const loginForm = () => {
    return (
      <Login
        username={username}
        handleLogin={handleLogin}
        password={password}
        setPassword={setPassword}
        setUsername={setUsername}
      />
    );
  };
  const blogForm = () => {
    return (
      <div>
        <p>
          {user.name} logged-in
          <button onClick={() => LogOut()}>log out</button>
        </p>
        <div>
          <Togglable
            buttonLabel="create new blog"
            buttonLabel2="cancel"
            ref={blogRef}
          >
            <h2>create new</h2>
            <NewBlog handleAdd={handleAdd} />
          </Togglable>
        </div>
        <h2>blogs</h2>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            newLike={newLike}
            deleteBlog={deleteBlog}
          />
        ))}
      </div>
    );
  };
  const handleAdd = async (newblog) => {
    blogRef.current.toggleVisibility();
    try {
      console.log(newblog);
      const blog = await blogService.create(newblog);
      setSucMessage(`a new blog ${blog.title} by ${blog.author} added`);
      setTimeout(() => {
        setSucMessage(null);
      }, 5000);
    } catch (e) {
      setErrorMessage("Adding a new blog failed");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <div>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
      <div>
        <ErrorMsg errorToDisplay={errorMessage} />
        <SuccessMsg sucToDisplay={sucMessage} />
      </div>
      {user === null ? loginForm() : blogForm()}
    </div>
  );
};

export default App;
