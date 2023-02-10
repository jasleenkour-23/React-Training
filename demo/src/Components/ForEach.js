import React from 'react'

export default function ForEach() {
    let list = ['Mango','Apple','Kiwi','Cheeku'];
    let arr = [];
    list.forEach((value,index)=>{
       arr.push(<><p>{value+" "+index}</p></>)
    })
  return (
    <div>
        <h3>FOREACH LOOP</h3>
      {arr}
      <hr/>
    </div>
  )
}
