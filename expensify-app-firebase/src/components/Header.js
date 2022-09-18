import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'reactfire';
import { signOut } from 'firebase/auth';
const Header = () => {

  const auth = useAuth()
  const logout = () => {
    signOut(auth).then(() => {
      console.log('Sign-out successful.');
    }).catch((error) => {
      console.log('error signnout');
    });
  }
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/create">Create Expense</NavLink>
      <NavLink to="/help" >Help</NavLink>
      <button onClick={logout}>Logout</button>
    </header>
  )
};

export default Header;
