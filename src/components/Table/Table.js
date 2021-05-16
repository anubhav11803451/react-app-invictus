import React from "react";
import "./Table.css";

function Table({ wordCount, value }) {
  // wordCount.map((item, index) => console.table(item));
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="word">
              <h2>Words</h2>
            </th>
            <th className="coun">
              <h2>Count</h2>
            </th>
          </tr>
        </thead>
        {wordCount.slice(0, value).map((item, index) => (
          <tbody key={index}>
            <tr>
              <td className="words">{item.word}</td>
              <td className="count">{item.count}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Table;
