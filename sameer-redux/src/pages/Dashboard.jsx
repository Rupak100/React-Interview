import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
    <h4>Dashboard Posts</h4>
    <Link to="users">Users</Link>
    <Link to="posts">Posts</Link>
    <Link to="counter">Counter</Link>
    <Outlet/>
    </div>
  )
}

export default Dashboard