import React from 'react'

function TaskNumber() {
  return (
    <div className='flex  screen justify-between gap-5 m-10'>
        <div className="w-[50%]  p-8 bg-red-400 rounded-xl text-center  py-4">
            <h2 className='text-3xl font-semibold bg-red-400'>0</h2>
            <h3 className='text-xl font-medium bg-red-400'>New Task</h3>
        </div>
        <div className="w-[50%]  p-10 bg-blue-400 rounded-xl text-center  py-4">
            <h2 className='text-3xl font-semibold bg-blue-400'>3</h2>
            <h3 className='text-xl font-medium bg-blue-400'>Completed</h3>
        </div>
        <div className="w-[50%]  p-10 bg-green-400 rounded-xl text-center  py-4">
            <h2 className='text-3xl font-semibold bg-green-400'>0</h2>
            <h3 className='text-xl font-medium bg-green-400'>Accepted</h3>
        </div>
        <div className="w-[50%]  p-10 bg-yellow-400 rounded-xl text-center  py-4">
            <h2 className='text-3xl font-semibold bg-yellow-400'>1</h2>
            <h3 className='text-xl font-medium bg-yellow-400'>Failed</h3>
        </div>

    </div>
  )
}

export default TaskNumber