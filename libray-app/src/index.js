import React, { useState } from "react";
import { render } from "react-dom";

function MyApp() {
  const [books, setBook] = useState([]);

  return (
    <main>
      <h1>The Libary</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name}
            <p>{book.author}</p>
            <button
              onClick={function () {
                let deleteBook = books.filter((b) => b.id !== book.id);
                setBook(deleteBook);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={function () {
          let book = prompt("What Book?");
          let auth = prompt("Who is author of " + book + "?");
          let rand = Math.floor(Math.random() * 1000);

          let obj = { name: book, author: auth, id: rand };

          setBook(books.concat(obj));
        }}
      >
        Click
      </button>
    </main>
  );
}

render(<MyApp />, document.body);
