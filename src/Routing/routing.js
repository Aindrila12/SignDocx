import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from "../components/AdminLogin/index";
import SuperAdmin from "../components/SuperAdminComponents/SuperAdmin/index";
import Admin from "../components/AdminComponents/Admin/index";


export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<AdminLogin />}></Route>
        <Route exact path='/super-admin/*' element={<SuperAdmin />}></Route>
        <Route exact path='/admin/*' element={<Admin />}></Route>
        <Route exact path='/user/*' element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
