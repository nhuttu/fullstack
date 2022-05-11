import { useState } from "react";

const Authors = (props) => {
  console.log(props);
  const [name, setName] = useState("");
  const [setBornTo, setDob] = useState("");

  if (!props.show) {
    return null;
  }
  const authors = props.authors;
  const submit = (event) => {
    console.log(parseInt(setBornTo));
    props.changeDoB({
      variables: { name, setBornTo: parseInt(setBornTo) },
    });
    console.log(setBornTo, name);
    event.preventDefault();
    console.log("asd");
    setName("");
    setDob("");
  };

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>set birthyear</h2>
        <form onSubmit={submit}>
          <div>
            name
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div>
            born
            <input
              value={setBornTo}
              onChange={({ target }) => setDob(target.value)}
            />
          </div>
          <div>
            <button type="submit">update author</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authors;
