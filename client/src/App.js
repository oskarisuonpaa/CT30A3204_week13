import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./components/Data";

const App = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, author, pages }),
    });
  };

  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Books</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <form onSubmit={handleSubmit}>
                  <input
                    id="name"
                    type="string"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    id="author"
                    type="string"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <input
                    id="pages"
                    type="number"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                  />
                  <input id="submit" type="submit" />
                </form>
              </div>
            }
          />
          <Route path="/book/:bookName" element={<Data />} />
          <Route
            path="*"
            element={<h1>404: This is not the webpage you are looking for</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
