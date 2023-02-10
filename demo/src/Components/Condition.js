import {useState} from 'react'; 

function Condition(){
  const[count,setCount] = useState(1);

return(
  <>
 
  {
    count===1?<h1>Hello user 1</h1>:
    count===2?<h1>Hello user 2</h1>:
    count===3?<h1>Hello user 3</h1>:
    <h1>Hello user 4</h1>
  }
  <button style={{backgroundColor: 'violet' , color: 'black', border: 'none', padding: '10px', borderRadius: '10px'}} onClick={()=>setCount(count=>count+1)}>ClickMe</button>
  <hr/>
  </>
)
}
export default Condition;