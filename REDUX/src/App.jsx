import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { useEffect, useState } from "react";
import { addTodo, deleteTodo, toggleTodo } from "./slices/todoListSlices";

function App() {
  const [datas, setData] = useState("");
  const [total,setTotal] = useState(0);
  const [linethrough,setLinethrough] =useState(0);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  //for getting the total no. of todos
  // useEffect(()=>{
  // let line=todos.reduce((acc,arr)=>{
  //    if(arr.completed){
  //     return acc+1;
  //    }else{
  //     return acc+0;
  //    }
  //   },0);
  // setLinethrough(line);
  // setTotal(todos.length);
  // },[todos]);


  //for adding a new todo to the list
  function addTodos(){
    dispatch(addTodo(datas));
    setData("");
  }

  return (
    <>
      <h4>Total Todos : {todos.length}</h4>
      <h4>Total Line Through : {todos.filter(t=>t.completed).length}</h4>
      <input type="text" value={datas} onChange={(e) => setData(e.target.value)} />
      <button onClick={addTodos}>ADD TODO</button>
      <ul>
        {todos.map((d) => (
         <li key={d.id} style={{color:"white",textDecoration:d.completed?"line-through":"none"}}>
          {d.data}
         <button onClick={()=>dispatch(deleteTodo(d.id))}>DeleteTodo</button>
         <button onClick={()=>dispatch(toggleTodo(d.id))}>LineThrough</button>
         </li>
      ))}
      </ul>
    </>
  )
}

export default App;
