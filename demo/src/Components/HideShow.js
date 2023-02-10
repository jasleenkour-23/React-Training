import React, { useState } from "react";

export default function HideShow() {
  const [click, setClick] = useState(true);
  return (
    <>
      <center>
        {click ? (
          <div>
            <h1 style={{color: 'orange', fontFamily: 'cursive'}}>Welcome To React</h1>
          </div>
        ) : null}
        <button style={{backgroundColor: 'green' , color: 'white', border: 'none', padding: '10px', borderRadius: '10px'}} onClick={() => setClick(!click)}>
          {click ? "Show" : "Hide"}
        </button>
        <hr />
      </center>
    </>
  );
}
