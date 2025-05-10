import React from 'react'
import { NotificationContainer } from 'react-notifications'

export default function page(props) {
    return (
        <>
            <main className="page-content dashbord bg-white">
                <div className="container-fluid">
                    <div className="signdocx-application">
                        <div className="bansec px-3">
                            <div className="">
                                <div className="bansec-inner">
                                    <div className="bansec-text">
                                        <h1><span>Company</span> Creation</h1>
                                        <p>Confirm yours's details</p>
                                    </div>
                                    <div className="bansec-img"><img src="assets/img/ban-img1.png" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-div">
                            <div className="">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="application-form-div mb-4">
                                            <div className="form-md m-0">
                                                {/* Company details */}
                                                <div className="row mb-3">
                                                    <div className="col-md-12"><strong className="application-hed"><i className="bi bi-person-badge-fill"></i>
                                                        Company details</strong></div>
                                                    {/* Company name */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_name"
                                                                className={`form-control ${props.compNameErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.compName}
                                                                onChange={(e) => { props.getCompName(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_name">Company Name<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compNameErr ? <span className='err-text'>Company name required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* Company email */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_email"
                                                                className={`form-control ${props.compEmailErr || props.compValidEmailErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.compEmail}
                                                                onChange={(e) => { props.getCompEmail(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_email">Email ID<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compEmailErr ? <span className='err-text'>Company email required</span> : null
                                                            }
                                                            {
                                                                props.compValidEmailErr ? <span className='err-text'>Valid email required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* Company mobile no */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_mobil"
                                                                className={`form-control ${props.compPhnNoErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.compPhnNo}
                                                                onChange={(e) => { props.getCompPhnNo(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_mobil">Mobile No.<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compPhnNoErr ? <span className='err-text'>Company mobile no required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* Company address */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_addr"
                                                                className={`form-control ${props.compAddressErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.compAddress}
                                                                onChange={(e) => { props.getCompAddress(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_addr">Address<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compAddressErr ? <span className='err-text'>Company address required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* No of employees */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_pin"
                                                                className={`form-control ${props.compNoOfEmpsErr ? "err-fil" : ""}`}
                                                                type="number"
                                                                value={props.compNoOfEmps}
                                                                onChange={(e) => { props.getCompNoOfEmps(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_pin">No of employees<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compNoOfEmpsErr ? <span className='err-text'>No of employees required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* tax id */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_loan"
                                                                className={`form-control ${props.compTaxIdErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.compTaxId}
                                                                onChange={(e) => { props.getCompTaxId(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_loan">Tax Id<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.compTaxIdErr ? <span className='err-text'>Company tax id required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* User details */}
                                                <div className="row mb-3">
                                                    <div className="col-md-12"><strong className="application-hed"><i className="bi bi-bank"></i> User
                                                        Details</strong></div>
                                                    {/* User name */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_accnt"
                                                                className={`form-control ${props.userNameErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.userName}
                                                                onChange={(e) => { props.getUserName(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_accnt">User Name<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.userNameErr ? <span className='err-text'>User name required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* User email */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_holdr"
                                                                className={`form-control ${props.userEmailErr || props.userValidEmailErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.userEmail}
                                                                onChange={(e) => { props.getUserEmail(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_holdr">User Email<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.userEmailErr ? <span className='err-text'>User email required</span> : null
                                                            }
                                                            {
                                                                props.userValidEmailErr ? <span className='err-text'>Valid email required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* User mobile no */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_mobil"
                                                                className={`form-control ${props.userPhnNoErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.userPhnNo}
                                                                onChange={(e) => { props.getUserPhnNo(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_mobil">Mobile No.<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.userPhnNoErr ? <span className='err-text'>User mobile no required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* User address */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_addr"
                                                                className={`form-control ${props.userAddressErr ? "err-fil" : ""}`}
                                                                type="text"
                                                                value={props.userAddress}
                                                                onChange={(e) => { props.getUserAddress(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_addr">Address<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.userAddressErr ? <span className='err-text'>User address required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* License details */}
                                                <div className="row mb-3">
                                                    <div className="col-md-12"><strong className="application-hed"><i className="bi bi-bank"></i> License
                                                        Details</strong></div>
                                                    {/* License start time */}
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                id="form_accnt"
                                                                className={`form-control ${props.licenseStartTimeErr ? "err-fil" : ""}`}
                                                                type="date"
                                                                value={props.licenseStartTime}
                                                                onChange={(e) => { props.getLicenseStartTime(e.target.value) }}
                                                            />
                                                            <label htmlFor="form_accnt">Start Time<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.licenseStartTimeErr ? <span className='err-text'>License start time required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    {/* License end time */}
                                                    <div className="col-md-6">
                                                        <div className="form-group add-comp-licn">
                                                            <input
                                                                id="form_holdr"
                                                                className={`form-control ${props.licenseEndTimeErr ? "err-fil" : ""}`}
                                                                type="date"
                                                                value={props.licenseEndTime}
                                                                onChange={(e) => { props.getLicenseEndTime(e.target.value) }}
                                                            // min={props.licenseStartTime}
                                                            />
                                                            <label htmlFor="form_holdr">End Time<span className="gl-form-asterisk"></span></label>
                                                            {
                                                                props.licenseEndTimeErr ? <span className='err-text'>License end time required</span> : null
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3 d-flex gap-2 generate">
                                                        <button
                                                            className={`btn generate-btn ${props.licenseKey ? "active" : ""} ${props.licenseKeyErr ? "error-fil" : ""}`}
                                                            onClick={() => { props.generteLicenseFun() }}
                                                            disabled={props.licenseKey}>
                                                            Generate License Key
                                                        </button>

                                                        {
                                                            props.licenseKey ?
                                                                <input
                                                                    className="form-control"
                                                                    type="text"
                                                                    value={props.licenseKey}
                                                                />
                                                                : null
                                                        }

                                                        {
                                                            props.licenseKeyErr ? <span className='err-text'>Generate the license key</span> : null
                                                        }
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group checkbox-div">
                                                            <input
                                                                type="checkbox"
                                                                id="html"
                                                                value={props.agree}
                                                                onClick={() => { props.getAgree() }}
                                                            />
                                                            <label htmlFor="html">By continuing, I hereby declare that the particulars given above are true
                                                                and correct to the best of my/our knowledge and belief. will be in order htmlFor the Bank to
                                                                disqualify me/us from any credit facilities from the Bank in case it is proved that declarations
                                                                of my/our outside made
                                                                above contain of facts. I/We hereby declare that I/we have no borrowings from any agency on the
                                                                date of application other
                                                                than those mentioned under Point No. 9.
                                                                 I/We undertake not to borrow from any other agency without
                                                                the permission of the Bank. Whether the Applicant's, Co-obligates, Guarantor is/are related to
                                                                any Senior Officer of the Bank : Yes/No. If yes, specify the names of the officer with
                                                                designation
                                                                and the branch/office working
                                                                and the nature of the relationship. Name ABCD Relationship XYZ We certify that all the
                                                                information
                                                                furnished by me/us is true;
                                                                that I/we have no borrowing arrangements htmlFor the unit with any Bank
                                                                there than the facts mentioned under 9 above; that no legal action has
                                                                been/is being taken against me/us; that I/we shall furnish all the
                                                                information that may be required by you in connection with my/our application; that this may
                                                                also
                                                                be exchanged by you with any agency
                                                                you may deem fit, and that you, your representatives, representative of Reserve Bank of India or
                                                                any other agency as authorized by you, at
                                                                any time, inspect/verify our assets, books of accounts, etc., in our farm
                                                                factory and/or business premises.
                                                                 I/We hereby undertake to abide by the terms and conditions
                                                                that the Bank may stipulate in sanction of this loan and inform Bank in
                                                                the event of acquiring any other assets during the tenure of the
                                                                advance.</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group form-buttns-div">
                                        
                                                    <button className="btn btn-login" onClick={() => { props.addCompany() }}><i className='bi bi-plus-lg'></i> Add</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <NotificationContainer />
        </>
    )
}
