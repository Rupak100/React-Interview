// Todo List App
import { useReducer, useState } from "react"
const initialState = {
    todos: [{ id: Date.now(), item: "javascript" }]
}
function reducer(todo, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...todo,
                todos: [
                    ...todo.todos, {
                        id: Date.now(),
                        item: action.payload
                    }
                ]
            }
        case "DELETE_TODO":

            return {
                ...todo,
                todos: todo.todos.filter((t) => t.id !== action.payload)
            }

        case "UPDATE_TODO":
            return{
                ...todo,
                todos: todo.todos.map(it=>(
                    it.id === action.payload.id? {...it,item:action.payload.item}:it
                ))
            }
    }
}


export const UseReducer = () => {
    const [todo, dispatch] = useReducer(reducer, initialState);
    const [item, setItem] = useState("");
    const[isupdate,setUpdate]=useState(false);
    const[updateid,setUpdateid]=useState(null);
  
    function addTodo(e) {
        e.preventDefault();
          if(isupdate){
        dispatch({type:"UPDATE_TODO",payload:{id:updateid,item:item}});
        setUpdate(false);
        setUpdateid(null);

    }else{
        dispatch({ type: "ADD_TODO", payload: item });
    }
        setItem("");
    }
    function deleteTodo(id) {
        dispatch({ type: "DELETE_TODO", payload: id });
    }
    function updateTodo(id,item){
     setItem(item);
     setUpdate(true);
     setUpdateid(id);
    }
    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter your todo..." value={item} onChange={(e) => setItem(e.target.value)} />
                <button type="submit" style={{
                    marginLeft: "10px"
                }}>{isupdate?"Update Todo":"Add todo"}</button>
            </form>
            <ul>
                {todo.todos.map((d) => (
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        margin: "10px"
                    }}>
                        <li>
                            {d.item}
                        </li>
                        <button onClick={()=>updateTodo(d.id,d.item)}>Update</button>
                        <button onClick={() => deleteTodo(d.id)}>Delete</button>

                    </div>

                ))}
            </ul>

        </>
    )
}