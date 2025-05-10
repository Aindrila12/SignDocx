import React, { useEffect, useState } from 'react';
import Page from "./page";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function SuperAdminMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menuList, setMenuList] = useState([
        {
            "menuurl": "/admin/dashboard",
            "menulabel": "Dashboard",
            "logo": <i className="bi bi-speedometer2"></i>
        },
        {
            "menulabel": "Employee",
            "menuurl": "/admin/employee",
            "logo": <i className="bi bi-life-preserver"></i>
        },
        // {
        //     "menulabel": "Application List",
        //     "menuurl": "/super-admin/applicationlist",
        //     "logo": <i className="bi bi-life-preserver"></i>
        // },
        // {
        //     "menulabel": "Pending",
        //     "menuurl": "/super-admin/pending",
        //     "logo": <i className="bi bi-life-preserver"></i>
        // },
        // {
        //     "menulabel": "Approved",
        //     "menuurl": "/super-admin/approved",
        //     "logo": <i className="bi bi-life-preserver"></i>
        // },
        // {
        //     "menulabel": "e-Stamp",
        //     "menuurl": "/super-admin/estamp",
        //     "logo": <i className="bi bi-life-preserver"></i>
        // },
        // {
        //     "menulabel": "e-Mandate",
        //     "menuurl": "/super-admin/emandate",
        //     "logo": <i className="bi bi-life-preserver"></i>
        // }
    ]);

    useEffect(() => {
        getMenus();
    }, [menuList]);


    const getMenus = () => {
        navigate(menuList[0].menuurl);
    }

    const getPath = (url) => {
        navigate(url);
    }

    return (
        <Page 
            menuList={menuList}
            dispatch={dispatch}
            getPath={getPath}
        />
    )
}
