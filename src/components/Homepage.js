import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

function Homepage() {
    
    const currentLoginStatus=localStorage.getItem("login")

  return (
    <>
    { currentLoginStatus ? <Dashboard/> : <Login/>}
    </>

  )
}

export default Homepage