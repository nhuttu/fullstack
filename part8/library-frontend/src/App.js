import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import Authors from "./components/Authors";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import { ALL_AUTHORS, ALL_BOOKS, EDIT_DoB, NEW_BOOK } from "./queries";

const App = () => {
  const [page, setPage] = useState("authors");
  const authors = useQuery(ALL_AUTHORS);
  const books = useQuery(ALL_BOOKS);
  const [createBook] = useMutation(NEW_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
  });
  const [changeDoB] = useMutation(EDIT_DoB, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });
  if (authors.loading || books.loading || createBook.loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage("authors")}>authors</button>
        <button onClick={() => setPage("books")}>books</button>
        <button onClick={() => setPage("add")}>add book</button>
      </div>

      <Authors
        show={page === "authors"}
        authors={authors.data.allAuthors}
        changeDoB={changeDoB}
      />

      <Books show={page === "books"} books={books.data.allBooks} />

      <NewBook show={page === "add"} createBook={createBook} />
    </div>
  );
};

export default App;
