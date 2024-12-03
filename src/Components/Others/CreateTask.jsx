import React from 'react'

function CreateTask() {
  return (
    <div>
    <form className='flex items-start justify-between gap-6 w-full p-5 text-white '>
        <div className='w-1/2 px-3 py-5'>
            <div> <h3 className='text-md'>Task Title</h3>
                <input type='text' placeholder='Make UI Design..' className='w-1/2 p-2 rounded-md text-sm' /></div>


            <div className='w-1/2 py-2'> <h3>Date </h3>
                <input type='date' placeholder='dd/mm/yyyy' className='w-full p-2 rounded-md'/>
            </div>

            <div className='py-2'> <h3>Assign to</h3>
                <input type='text' placeholder='Name of Employee..'className='w-1/2 p-2 rounded-md' />
            </div>

            <div className='py-2'> <h3>Category</h3>
                <input type='text' placeholder='Design, Development, etc..' className='w-1/2 p-2 rounded-md'/>
            </div></div>

        <div> <h3>Description</h3>
            <textarea name='' id='' rows='10' cols='30'  className='w-[29rem] p-2 rounded-md'/>
            <button className=' bg-green-400 w-5/6 p-2 rounded-md text-center py-2'>Create Task</button>
        </div>

        

    </form>
</div>
  )
}

export default CreateTask
