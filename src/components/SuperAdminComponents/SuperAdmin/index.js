import React from 'react'
import SuperAdminMenu from '../SuperAdminMenu/index';
import SuperAdminRouting from "../../../Routing/superadminrouting";
import { useSelector } from 'react-redux';

export default function SuperAdmin() {
    const menushow = useSelector((state) => state.menushow.value);
    return (
        <>
            <div className={`page-wrapper ${menushow ? "toggled" : ""}`}>
                <SuperAdminMenu />
                <SuperAdminRouting/>
            </div>
        </>
    )
}
