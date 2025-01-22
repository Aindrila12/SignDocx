import React from 'react'
import AdminMenu from '../AdminMenu/index';
import AdminRouting from "../../../Routing/adminrouting";
import { useSelector } from 'react-redux';

export default function Admin() {
    const menushow = useSelector((state) => state.menushow.value);
    return (
        <>
            <div className={`page-wrapper ${menushow ? "toggled" : ""}`}>
                <AdminMenu />
                <AdminRouting/>
            </div>
        </>
    )
}
