import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "../components/SuperAdminComponents/Dashboard/index";
import ApplicationList from "../components/SuperAdminComponents/ApplicationList/index";
import Client from "../components/SuperAdminComponents/Client/index";
import AddClient from "../components/SuperAdminComponents/AddClient/index";
import UpdateClient from "../components/SuperAdminComponents/UpdateClient/index";
import Inventory from "../components/SuperAdminComponents/Inventory/index";
export default function superadminrouting() {
  return (
    <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='application' element={<ApplicationList/>}/>
        <Route path='client' element={<Client/>}/>
        <Route path='addclient' element={<AddClient/>}/>
        <Route path='updateclient/:id' element={<UpdateClient/>}/>
        <Route path='inventory' element={<Inventory/>}/>
    </Routes>
  )
}
