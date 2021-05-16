import React, { useState, useEffect } from "react";
import "./Table.css";

function Table() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await getComputedStyle();
  //   }
  //   return request;
  // }, [input]);

  return (
    <div className="table">
      <table>
        <tr>
          <th className="words">Word</th>
          <th className="count">Count</th>
        </tr>
        {/* {this.state.data.slice(0, this.state.number).map((item, index) => (
          <tr>
            <td className="words">{item.word}</td>
            <td className="count">{item.count}</td>
          </tr>
        ))} */}
      </table>
    </div>
  );
}

export default Table;
