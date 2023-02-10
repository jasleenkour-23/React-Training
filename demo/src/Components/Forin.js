import React from 'react'

export default function Forin() {
    let num = [2,4,3,5,6];
    let n = [];
    for(let key in num){
     n.push(<><p>{num[key]}</p></>)
    }
  return (
   <>
   <h4>FOR...IN LOOP</h4>
    {n}
    <hr/>
   </>
  )
}
