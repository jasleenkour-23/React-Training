import React from "react";

export default function Forof() {
  let list = ["Cheekz", "Anuj", "Ishani", "Muskan"];
  let arr = [];
  for (let value of list) {
    arr.push(<><p>{value}</p> </>);
  }
  return (
    <div>
      <h4>FOR...OF LOOP</h4>
      {arr}
      <hr/>
    </div>
  );
}
