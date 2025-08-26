import React, { useState } from 'react'

export default function TodoCard({task,onDelete,onEdit,onComplete}) {
    // const [complete,setComplete]=useState(false);

    // const handleComplete = () => {
    //     setComplete(!complete)
    // }

    const [expanded, setExpanded] = useState(false);

  return (
    <div className='m-2 gap-4 mx-auto'>
        <div className={`shadow-md rounded-lg p-6 flex flex-col justify-between w-92 h-64 mx-1 ${
          task.completed ? "bg-green-400" : "bg-yellow-200"
        }`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>{task.title}</h2>                                                                                                                                            
        <p className={`text-sm text-gray-500 mt-2 whitespace-pre-line ${
            expanded ? "" : "line-clamp-3"
          }`}>{task.description}</p>

           {task.description.length > 100 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-600 text-xs mt-1 self-start"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <div className='flex items-center mt-4 mx-auto space-2'>
            <button className='bg-blue-300 text-white text-sm rounded-full px-4 py-1 mx-2 border-1'
            onClick={onEdit}>edit</button>
            <button className='bg-red-300 text-white text-sm rounded-full px-4 py-1 mx-2 border-1'
                onClick={onDelete}>delete</button>
            <button className='bg-green-400 text-white text-sm rounded-full px-4 py-1 mx-2 border-1'
                onClick={onComplete}>{task.completed ? "Mark as pending" :"complete"}</button>
        </div>
    </div>
    </div>
  )
}
