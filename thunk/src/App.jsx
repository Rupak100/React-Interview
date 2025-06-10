import { useEffect } from 'react'
import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from './thunkSlice/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <>
      <h4>TodoApplication</h4>

      <ul>
        {
          todos?.map((t) => (
            <li key={t.id}>
              {t.id}
              {t.items}
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default App
