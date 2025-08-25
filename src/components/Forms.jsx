import React, { useEffect, useState } from 'react'

export default function Forms({onSubmit,initialData}) {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    useEffect(() => {
        if(initialData){
            setTitle(initialData.title);
            setDescription(initialData.description);
        }else{
            setTitle("");
            setDescription("");
        }
    },[initialData])

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit({title,description});
        setTitle("");
        setDescription("");
    }

  return (
    <form className='flex flex-col p-4' onSubmit={handleSubmit}>
        <div className='p-2'>
            <h2 className='text-blue-500 font-semibold text-2xl'>
                {initialData ? "Edit Task" : "Add Task"}
            </h2>
            <input type="text" placeholder='tasks title' value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            className="border p-2 rounded w-full mt-4" required
            />
            <textarea placeholder='tasks description' value={description} 
            onChange={(e) => setDescription(e.target.value)}
            className='border p-2 rounded w-full mt-4'required 
            />
            <button type="submit" className='bg-green-500 py-3 px-6 rounded-lg text-white font-bold hover:bg-green-600 mt-2 w-full'>
                {initialData ? "Update" : "Save"}
            </button>
        </div>
    </form>
  )
}
