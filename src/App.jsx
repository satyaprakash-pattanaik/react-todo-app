import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './components/Forms'
import TodoCard from './components/TodoCard'

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks,setTasks] = useState([]);
  const [edit,setEdit] = useState(null);
 

  const handleFormSubmit = (tasksData) => {
  if (edit !== null) {
    const updatedTasks = [...tasks];
    updatedTasks[edit] = { ...updatedTasks[edit], ...tasksData }; 
    setTasks(updatedTasks);
    setEdit(null);
  } else {
    setTasks([...tasks, { ...tasksData, completed: false }]);
  }
  setShowForm(false);
};

  const handleTogleComplete = (index) => {
    setTasks(prev => prev.map ((t,i) => 
  i == index ? {...t,completed : !t.completed} :t 
)
);
  }


  const handleEdit = (index) => {
    setEdit(index);
    setShowForm(true);
  }

  const handleAddClick= () =>{
    setEdit(null);
    setShowForm(true);
  }

  const handleCloseClick = () =>{
    setShowForm(false);
    setEdit(null);
  }

  const handleDelete = (index) =>{
    setTasks(tasks.filter((_,i) => i !== index));
  }

  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
        Todo List 
        </h1>
        <button className='bg-blue-500 text-white font-semibold px-6 py-3 shadow hover:bg-blue-600 transition duration-300 rounded-lg'
                onClick={handleAddClick}>
                Add task
                </button>
          {showForm && (
            <div className='fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50'>
              <div className='bg-white rounded-lg p-4 w-11/12 max-w-md relative'>
                <button className='absolute top-3 right-3 text-red-500 hover:text-red-700 font-bold'
                        onClick={handleCloseClick}>X</button>
                <Forms onSubmit={handleFormSubmit}
                       initialData={edit !== null ? tasks[edit] : null}/>
              </div>
            </div>
          )}
      </div>
      <h2 className='font-bold mt-4 text-gray-500 flex justify-center p-4 '>Task list to complete</h2>
      <div className='w-full space-y-4 mt-10 flex flex-row overflow-auto mx-2 p-4'>
          {tasks.map((tasks,index) => (
            <TodoCard key={index} task ={tasks} 
            onDelete={ () => {handleDelete(index)}}
            onEdit={() => {handleEdit(index)}}
            onComplete={() => handleTogleComplete(index)}/>
          ))}
      </div>
    </div>
  )
}

export default App
