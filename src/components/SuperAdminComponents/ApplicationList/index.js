import React, { useState } from 'react';
import Page from "./page";
import { useSelector } from 'react-redux';

export default function ApplicationList() {

    const menushow = useSelector((state) => state.menushow.value);

    const [applicationList, setApplicationList] = useState([
        {
            "applicantNo": "Name 1",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "0"
        },
        {
            "applicantNo": "Name 2",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "1"
        },
        {
            "applicantNo": "Name 3",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "0"
        },
        {
            "applicantNo": "Name 4",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "1"
        },
        {
            "applicantNo": "Name 5",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "0"
        },
        {
            "applicantNo": "Name 6",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "1"
        },
        {
            "applicantNo": "Name 7",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "0"
        },
        {
            "applicantNo": "Name 8",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "1"
        },
        {
            "applicantNo": "Name 9",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "0"
        },
        {
            "applicantNo": "Name 10",
            "email": "name@mail.com",
            "date": "08-01-2025",
            "status": "1"
        }
    ]);
    const [initializeModal, setInitializeModal] = useState(false);

    const initializeModalClose = () => {
        setInitializeModal(false);
    }

    const initializeModalShow = () => {
        setInitializeModal(true);
    }

    return (
        <Page 
            applicationList={applicationList}

            initializeModal={initializeModal}
            initializeModalClos={initializeModalClose}
            initializeModalShow={initializeModalShow}
            menushow={menushow}
        />
    )
}
