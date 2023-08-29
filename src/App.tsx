import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, TodoId, type Todo as TodoType } from "./type"
import { TODO_FILTERS } from "./const";
import { Footer } from "./components/Footer";

const mockTodos = [
  {
    id: '2',
    title: 'Ganar Demanda',
    completed: true
  },
  {
    id: '3',
    title: 'Que Me paguen mi dinero',
    completed: false
  },
  {
    id: '4',
    title: 'Negociar Salida',
    completed: false
  },
]


function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(element => element.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    });
    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValue): void => {
    console.log(filter)
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () =>{
    const newTodos = todos.filter(todo=> !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo=>{
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  return (
    <>
      <div className="todoapp">

        <Todos
          onToggleCompleteTodo={handleCompleted}
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          handleFilterChange={handleFilterChange}
          onClearCompleted={handleRemoveAllCompleted}
        />
      </div>
    </>
  )
}

export default App
