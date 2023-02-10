import React from "react";

export default function Map() {
  let list = [3,8,5,8,9];
  let arr = [];
  list.forEach((value, index) => {
  return  arr.push(
      <>
        <p>{value + index}</p>
      </>
    );
  });
  return (
    <div>
      <h3>MAP LOOP</h3>
      {arr}
      <hr />
    </div>
  );
}
