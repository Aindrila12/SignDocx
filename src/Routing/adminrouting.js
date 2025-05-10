import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../components/AdminComponents/Dashboard/index";
import Employee from "../components/AdminComponents/Employee/index";
// import AddClient from "../components/SuperAdminComponents/AddClient/index";
// import UpdateClient from "../components/SuperAdminComponents/UpdateClient/index";
export default function superadminrouting() {
  return (
    <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='employee' element={<Employee/>}/>
        {/* <Route path='addclient' element={<AddClient/>}/>
        <Route path='updateclient/:id' element={<UpdateClient/>}/> */}
    </Routes>
  )
}
