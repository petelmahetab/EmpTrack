import React from 'react'
import Header from '../Others/Header'
import TaskNumber from '../Others/TaskNumber'
import TaskList from '../TaskLists/TaskList'
function TeamMember() {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen '>
      <Header/>
      <TaskNumber/>
      <TaskList/>
    </div>
  )
}

export default TeamMember