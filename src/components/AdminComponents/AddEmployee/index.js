import React, { useEffect, useState } from 'react'
import Page from "./page";
import { useNavigate } from 'react-router-dom';
import { createCompany, generateLicence } from '../../../actions/apiCall';
import axios from 'axios';
import { BASE_URL } from '../../../Config/config';
import moment from 'moment';
import { errorMsg, successMsg } from '../../../Services/util';

const mailformat = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$";


export default function AddClient() {
    const navigate = useNavigate();

    //Company variables
    const [compName, setCompName] = useState("");
    const [compNameErr, setCompNameErr] = useState(false);
    const [compEmail, setCompEmail] = useState("");
    const [compEmailErr, setCompEmailErr] = useState(false);
    const [compValidEmailErr, setCompValidEmailErr] = useState(false);
    const [compPhnNo, setCompPhnNo] = useState("");
    const [compPhnNoErr, setCompPhnNoErr] = useState(false);
    const [compAddress, setCompAddress] = useState("");
    const [compAddressErr, setCompAddressErr] = useState(false);
    const [compNoOfEmps, setCompNoOfEmps] = useState("");
    const [compNoOfEmpsErr, setCompNoOfEmpsErr] = useState(false);
    const [compTaxId, setCompTaxId] = useState("");
    const [compTaxIdErr, setCompTaxIdErr] = useState(false);

    //User variables
    const [userName, setUserName] = useState("");
    const [userNameErr, setUserNameErr] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userEmailErr, setUserEmailErr] = useState(false);
    const [userValidEmailErr, setUserValidEmailErr] = useState(false);
    const [userPhnNo, setUserPhnNo] = useState("");
    const [userPhnNoErr, setUserPhnNoErr] = useState(false);
    const [userAddress, setUserAddress] = useState("");
    const [userAddressErr, setUserAddressErr] = useState(false);

    //License variables
    const [licenseKey, setLicenseKey] = useState("");
    const [licenseKeyErr, setLicenseKeyErr] = useState(false);
    const [licenseStartTime, setLicenseStartTime] = useState("");
    const [licenseStartTimeErr, setLicenseStartTimeErr] = useState(false);
    const [licenseEndTime, setLicenseEndTime] = useState("");
    const [licenseEndTimeErr, setLicenseEndTimeErr] = useState(false);
    const [agree, setAgree] = useState(false);

    //Email validation
    useEffect(() => {
        if (compEmail) {
            if (!compEmail.match(mailformat)) {
                setCompValidEmailErr(true)
            }
        }
    }, [compEmail])

    useEffect(() => {
        if (userEmail) {
            if (!userEmail.match(mailformat)) {
                setUserValidEmailErr(true)
            }
        }
    }, [userEmail])

    //Company functions
    const getCompName = (name) => {
        setCompName(name);
        setCompNameErr(false);
    }

    const getCompEmail = (email) => {
        setCompEmail(email);
        setCompEmailErr(false);
        setCompValidEmailErr(false);
    }

    const getCompPhnNo = (phnno) => {
        if(phnno.length <=  10 && !isNaN(phnno)){
            setCompPhnNo(phnno);
            setCompPhnNoErr(false);
        }
    }

    const getCompAddress = (address) => {
        setCompAddress(address);
        setCompAddressErr(false);
    }

    const getCompNoOfEmps = (noofemps) => {
        setCompNoOfEmps(noofemps);
        setCompNoOfEmpsErr(false);
    }

    const getCompTaxId = (taxid) => {
        setCompTaxId(taxid);
        setCompTaxIdErr(false);
    }

    //User functions
    const getUserName = (name) => {
        setUserName(name);
        setUserNameErr(false);
    }

    const getUserEmail = (email) => {
        setUserEmail(email);
        setUserEmailErr(false);
        setUserValidEmailErr(false);
    }

    const getUserPhnNo = (phnno) => {
        if(phnno.length <= 10 && !isNaN(phnno)){
            setUserPhnNo(phnno);
            setUserPhnNoErr(false);
        }
    }

    const getUserAddress = (address) => {
        setUserAddress(address);
        setUserAddressErr(false);
    }

    //License functions

    const getLicenseStartTime = (starttime) => {
        setLicenseStartTime(starttime);
        setLicenseStartTimeErr(false);
        let date = new Date(starttime);
        let dateValue = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate(), 0)
        setLicenseEndTime(moment(dateValue).format('yyyy-MM-DD'))
    }

    const getLicenseEndTime = (endtime) => {
        setLicenseEndTime(endtime);
        setLicenseEndTimeErr(false);
    }

    const getAgree = () => {
        if (agree) {
            setAgree(false);
        } else {
            setAgree(true);
        }
    }

    const addCompany = () => {
        let err = 0;

        setCompNameErr(false);
        setCompEmailErr(false);
        setCompValidEmailErr(false);
        setCompPhnNoErr(false);
        setCompAddressErr(false);
        setCompNoOfEmpsErr(false);
        setCompTaxIdErr(false);
        setUserNameErr(false);
        setUserEmailErr(false);
        setUserValidEmailErr(false);
        setUserPhnNoErr(false);
        setUserAddressErr(false);
        setLicenseKeyErr(false);
        setLicenseStartTimeErr(false);
        setLicenseEndTimeErr(false);

        if (compName === undefined || compName === null || compName === "") {
            err++;
            setCompNameErr(true);
        }
        if (compEmail === undefined || compEmail === null || compEmail === "") {
            err++;
            setCompEmailErr(true);
        }
        if (compEmail.trim()) {
            if (!compEmail.trim().match(mailformat)) {
                setCompValidEmailErr(true)
                err++;
            }
        }
        if (compPhnNo === undefined || compPhnNo === null || compPhnNo === "") {
            err++;
            setCompPhnNoErr(true);
        }
        if (compAddress === undefined || compAddress === null || compAddress === "") {
            err++;
            setCompAddressErr(true);
        }
        if (compNoOfEmps === undefined || compNoOfEmps === null || compNoOfEmps === "") {
            err++;
            setCompNoOfEmpsErr(true);
        }
        if (compTaxId === undefined || compTaxId === null || compTaxId === "") {
            err++;
            setCompTaxIdErr(true);
        }
        if (userName === undefined || userName === null || userName === "") {
            err++;
            setUserNameErr(true);
        }
        if (userEmail === undefined || userEmail === null || userEmail === "") {
            err++;
            setUserEmailErr(true);
        }
        if (userEmail.trim()) {
            if (!userEmail.trim().match(mailformat)) {
                setUserValidEmailErr(true);
                err++;
            }
        }
        if (userPhnNo === undefined || userPhnNo === null || userPhnNo === "") {
            err++;
            setUserPhnNoErr(true);
        }
        if (userAddress === undefined || userAddress === null || userAddress === "") {
            err++;
            setUserAddressErr(true);
        }
        if (licenseKey === undefined || licenseKey === null || licenseKey === "") {
            err++;
            setLicenseKeyErr(true);
        }
        if (licenseStartTime === undefined || licenseStartTime === null || licenseStartTime === "") {
            err++;
            setLicenseStartTimeErr(true);
        }
        if (licenseEndTime === undefined || licenseEndTime === null || licenseEndTime === "") {
            err++;
            setLicenseEndTimeErr(true);
        }
        if (agree === undefined || agree === null || agree === "" || agree === false) {
            err++;
        }

        if (err === 0) {
            const data = {
                "companyName": compName,
                "companyEmail": compEmail,
                "companyPhone": compPhnNo,
                "companyAddress": compAddress,
                "noemp": compNoOfEmps,
                "taxid": compTaxId,
                "userName": userName,
                "userEmail": userEmail,
                "userPhone": userPhnNo,
                "userAddress": userAddress,
                "userType": 2,
                "licenseKey": licenseKey,
                "start_time": licenseStartTime,
                "end_time": licenseEndTime
            }
            console.log("err count>>>>>>>>>>>>", data);
            createCompany(data).then(result => {
                if (result.data.success) {
                    console.log("resp>>>>>>>>>>>>>", result.data.response);
                    navigate("/super-admin/client");
                } else {
                    // errorMsg(result.data.message);
                }
            })

        }

    }

    const generteLicenseFun = () => {
        generateLicence().then(result => {
            if (result.data.success) {
                setLicenseKey(result.data.response);
                setLicenseKeyErr(false);
            } else {
                // errorMsg(result.data.message);
            }
        })
    }

    return (
        <Page
            compName={compName}
            compNameErr={compNameErr}
            getCompName={getCompName}
            compEmail={compEmail}
            compEmailErr={compEmailErr}
            compValidEmailErr={compValidEmailErr}
            getCompEmail={getCompEmail}
            compPhnNo={compPhnNo}
            compPhnNoErr={compPhnNoErr}
            getCompPhnNo={getCompPhnNo}
            compAddress={compAddress}
            compAddressErr={compAddressErr}
            getCompAddress={getCompAddress}
            compNoOfEmps={compNoOfEmps}
            compNoOfEmpsErr={compNoOfEmpsErr}
            getCompNoOfEmps={getCompNoOfEmps}
            compTaxId={compTaxId}
            compTaxIdErr={compTaxIdErr}
            getCompTaxId={getCompTaxId}

            userName={userName}
            userNameErr={userNameErr}
            getUserName={getUserName}
            userEmail={userEmail}
            userEmailErr={userEmailErr}
            userValidEmailErr={userValidEmailErr}
            getUserEmail={getUserEmail}
            userPhnNo={userPhnNo}
            userPhnNoErr={userPhnNoErr}
            getUserPhnNo={getUserPhnNo}
            userAddress={userAddress}
            userAddressErr={userAddressErr}
            getUserAddress={getUserAddress}

            licenseKey={licenseKey}
            licenseKeyErr={licenseKeyErr}
            generteLicenseFun={generteLicenseFun}
            licenseStartTime={licenseStartTime}
            licenseStartTimeErr={licenseStartTimeErr}
            getLicenseStartTime={getLicenseStartTime}
            licenseEndTime={licenseEndTime}
            licenseEndTimeErr={licenseEndTimeErr}
            getLicenseEndTime={getLicenseEndTime}
            agree={agree}
            getAgree={getAgree}

            addCompany={addCompany}
        />
    )
}
