import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Authentication/Login';
import TeamMember from './Components/DashBoard/TeamMember';
import AdminDashboard from './Components/DashBoard/AdminDashboard';
import { AuthContext } from './Context/AuthProvider';
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage';


export default function App() {
  const [user, setUser] = useState(null);
  const authData=useContext(AuthContext);
  // console.log()
  const handleLogin = (mail, pass) => {
    if (mail === 'admin@one.com' && pass === '123') {
      setUser('admin');
    } else if (    authData &&
      authData.employees &&
      authData.employees.find((e) => e.email === email && e.pass === pass)
  ) {
      setUser('employe');
    } else {
      alert('Invalid Credentials.');
    }
  };

const data=useContext(AuthContext);
console.log(data)


  return (
    <>
      {/* If user is not logged in, show Login component */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (user === 'admin' ? <AdminDashboard /> : <TeamMember />)}
       
    </>
  );
}
