import React, { useEffect, useState } from 'react'
import Page from "./page";
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/apiCall';

const mailformat = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";


export default function AdminLogin() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [userNameErr, setUserNameErr] = useState(false);
    const [validUserNameErr, setValidUserNameErr] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);

    useEffect(() => {
        if (userName) {
            if (!userName.match(mailformat)) {
                setValidUserNameErr(true)
            }
        }
    }, [userName])

    const getUserName = (val) => {
        setUserName(val);
        setUserNameErr(false);
        setValidUserNameErr(false);
    }

    const getPassword = (val) => {
        setPassword(val);
        setPasswordErr(false);
    }

    const onLogin = () => {
        let err = 0;

        setUserNameErr(false);
        setValidUserNameErr(false);
        setPasswordErr(false);

        if (userName === undefined || userName === null || userName === "") {
            err++;
            setUserNameErr(true);
        }

        if (userName.trim()) {
            if (!userName.trim().match(mailformat)) {
                setValidUserNameErr(true)
                err++;
            }
        }

        if (password === undefined || password === null || password === "") {
            err++;
            setPasswordErr(true);
        }

        if (err === 0) {
            navigate("/super-admin");
            // const data = {
            //     "email": userName,
            //     "password": password
            // }
            // login(data).then(result => {
            //     if (result.data.success) {
            //         sessionStorage.setItem("user", JSON.stringify(result.data.response));
            //         if(result.data.response.usertype == 1){
            //             navigate("/super-admin");
            //         } else{
            //             navigate("/admin");
            //         }
            //     } else {

            //     }
            // })
        }
    }

    return (
        <Page
            userName={userName}
            userNameErr={userNameErr}
            validUserNameErr={validUserNameErr}
            getUserName={getUserName}

            password={password}
            passwordErr={passwordErr}
            getPassword={getPassword}

            onLogin={onLogin}
        />
    )
}
