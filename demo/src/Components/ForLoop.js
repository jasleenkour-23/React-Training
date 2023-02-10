import React from "react";

export default function ForLoop() {
  let tableOf = 3;
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(
      <p>
        {tableOf} x {i} = {tableOf * i}
      </p>
    );
  }
  return (
    <div>
      <h3>Table of 3 using FOR LOOP:</h3>
      {table}
      <hr />
    </div>
  );
}
