import React, { useState } from 'react'

export default function TodoCard({task,onDelete,onEdit}) {
    const [complete,setComplete]=useState(false);

    const handleComplete = () => {
        setComplete(!complete)
    }

  return (
    <div className='m-2 gap-4'>
        <div className={`shadow-md rounded-lg p-4 ${
          complete ? "bg-green-400" : "bg-yellow-300"
        }`}>
        <h2 className='text-2xl font-bold text-gray-800'>{task.title}</h2>0.........                                                                                                                                                  
        <p className='text-sm text-gray-500'>{task.description}</p>
        <div className='flex items-center mt-2 mx-auto space-2'>
            <button className='bg-blue-300 text-white text-sm rounded-full px-4 py-1 mx-2'
            onClick={onEdit}>edit</button>
            <button className='bg-blue-300 text-white text-sm rounded-full px-4 py-1 mx-2'
                onClick={onDelete}>delete</button>
            <button className='bg-blue-300 text-white text-sm rounded-full px-4 py-1 mx-2'
                onClick={handleComplete}>{(!complete)? "complete" :"completed"}</button>
        </div>
    </div>
    </div>
  )
}
