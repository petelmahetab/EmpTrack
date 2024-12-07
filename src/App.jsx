import React, { useEffect, useState } from 'react';
import Login from './Components/Authentication/Login';
import TeamMember from './Components/DashBoard/TeamMember';
import AdminDashboard from './Components/DashBoard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage';
export default function App() {


  // For the Get and setted data  from the LOCAL STORAGE
//   useEffect(()=>{
//   // setLocalStorage();
// getLocalStorage();
//   })
  const [user, setuser] = useState(null)

  const handleLogin=(mail,pass)=>{
    if(mail == 'admin@one.com' && pass== '123')
    {
      console.log("This is Admin")
    }else if(mail == 'user@me.com' && pass== '123'){
console.log("This is User Mail and Pass-Word")
    }
    else{
      alert('Invalid Credentials..')
    }
  }
  handleLogin('admin@one.com',123);

  return (
    <>
{/* if user was not there then open the login or nothing */}
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {/* <Login/> */}
    {/* <TeamMember/> */}
  {/* <AdminDashboard/> */}
    </>
  )
}