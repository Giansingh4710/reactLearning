import React, { useState } from "react";

function Searcher(props) {
  const [entry, setEntry] = useState("");
  const lst = props.list;
  const filteredLst = lst.filter((item) => item.includes(entry));
  const result = () => {
    if (entry === "") {
      return <p>Nothing entered</p>;
    }
    return (
      <ul>
        {filteredLst.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <input
        type="text"
        value={entry}
        onChange={(event) => {
          setEntry(event.target.value);
        }}
      />
      {result()}
    </div>
  );
}

export default Searcher;
