import React from 'react'
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard goes here</h2>
      <Outlet/>
    </div>
  )
}

export default Dashboard;
