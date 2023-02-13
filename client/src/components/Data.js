import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Data = () => {
  const { bookName } = useParams();
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/book/" + bookName)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <p>{data.bookName}</p>
      <p>{data.author}</p>
      <p>{data.pages}</p>
    </div>
  );
};

export default Data;
