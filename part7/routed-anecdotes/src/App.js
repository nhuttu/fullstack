import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { useField } from "./hooks";
import { useDispatch, useSelector } from "react-redux";
import { initalize } from "./reducers/blogReducer";
import Footer from "./components/Footer";
const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to={"/anecdotes"}>anecdotes </Link>
      <Link to={"/create"}>create </Link>
      <Link to={"/about"}>about </Link>
    </div>
  );
};

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>
      An anecdote is a brief, revealing account of an individual person or an
      incident. Occasionally humorous, anecdotes differ from jokes because their
      primary purpose is not simply to provoke laughter but to reveal a truth
      more general than the brief tale itself, such as to characterize a person
      by delineating a specific quirk or trait, to communicate an abstract idea
      about a person, place, or thing through the concrete details of a short
      narrative. An anecdote is "a story with a point."
    </em>

    <p>
      Software engineering is full of excellent anecdotes, at this app you can
      find the best and add more.
    </p>
  </div>
);

const Footer = () => (
  <div>
    Anecdote app for <a href="https://fullstackopen.com/">Full Stack Open</a>.
    See{" "}
    <a href="https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js">
      https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
    </a>{" "}
    for the source code.
  </div>
);

const CreateNew = (props) => {
  const { reset: resetContent, ...cont } = useField("content");
  const { reset: resetAuthor, ...auth } = useField("author");
  const { reset: resetUrl, ...url } = useField("url");

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      content: cont.value,
      author: auth.value,
      info: url.value,
      votes: 0,
    };
    props.addNew(object);
  };

  const reset = () => {
    resetContent();
    resetAuthor();
    resetUrl();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...cont} />
        </div>
        <div>
          author
          <input {...auth} />
        </div>
        <div>
          url for more info
          <input {...url} />
        </div>
        <button>create</button>
      </form>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};
const Anecdote = ({ anecdotes }) => {
  console.log(anecdotes, "dootit");
  const id = useParams().id;
  console.log(id);
  const a = anecdotes.find((a) => Number(a.id) === Number(id));
  console.log(a, "tässä löhyddetty");
  return (
    <div>
      <h2>
        <p>{a.content}</p>
      </h2>
      <div>
        <p>has {a.votes} votes</p>
      </div>
      <div>
        for more info see <a href={a.info}>{a.info}</a>
      </div>
      <p> </p>
    </div>
  );
};
const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initalize());
  }, [dispatch]);
  const [notification, setNotification] = useState("");
  const anecdotes = useSelector((state) => state.anecdotes);
  console.log(anecdotes, "L139");
  const addNew = (anecdote) => {
    console.log(anecdote, "anec");
    anecdote.id = (Math.random() * 10000).toFixed(0);

    navigate("/anecdotes");
    setNotification(`a new anecdote ${anecdote.content} created!`);
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification}
      <div>
        <Routes>
          <Route
            path="/anecdotes/:id"
            element={<Anecdote anecdotes={anecdotes} />}
          />
          <Route
            path="/anecdotes"
            element={<AnecdoteList anecdotes={anecdotes} />}
          />
          <Route path="/create" element={<CreateNew addNew={addNew} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
