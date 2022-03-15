import React from "react";
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
export default CreateNew;
