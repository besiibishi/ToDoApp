import { useState } from "react"
import "./styles.css"

function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){

    e.preventDefault();
  
    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {id: crypto.randomUUID(), title:newItem, completed:false},
      ]
    })
    //kur ta klikojm butonin add tani bohet empty prap inputi
    setNewItem("");

  }

  function toggleTodo(id, completed){
    setTodos(currentTodos=>{
       return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo;

    })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo=> todo.id !==id);
    })
  }



  return (

    <>
      <form onSubmit={handleSubmit} className="new-item-form">

        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem}
           onChange={e => setNewItem(e.target.value)} 
           type="text" 
           id="item" />
          <button className="btn">Add</button>

        </div>

      </form>

      <h1 className="header">Todo List</h1>
      {todos.map(todo => {
        return (
        <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id, e.target.checked)} />
            
            {todo.title}
          </label>
          <button className="btn btn-danger" onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </li>
     
        )
      })}

      



    </>
  )

}

export default App