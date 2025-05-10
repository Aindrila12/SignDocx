import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function page(props) {
    return (
        <>
            <main className="page-content dashbord">
                <div className="container-fluid">
                    <h4 className="page-titel mt-3">Application List</h4>
                    <div className="row mt-3">

                        <div className="col-xl-12 mb-3">
                            <div className="card custom-card main-card-item primary rounded-2">
                                <div className="card-body">
                                    <div id="no-more-tables">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                            className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th align="left" valign="middle" style={{ width: "100px" }}>Sl No.</th>
                                                    <th align="left" valign="middle">Applicant No.</th>
                                                    <th align="left" valign="middle">Email ID</th>
                                                    <th align="left" valign="middle">Date</th>
                                                    <th align="left" valign="middle">Status</th>
                                                    <th align="center" style={{ textAlign: "center" }} valign="middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    props.applicationList.map((item, i) => (
                                                        <tr key={i}>
                                                            <td data-title="Sl No." align="left" valign="middle">{i + 1}</td>
                                                            <td data-title="Applicant Name" align="left" valign="middle"><a href="">{item.applicantNo}</a></td>
                                                            <td data-title="Email ID" align="left" valign="middle">{item.email}</td>
                                                            <td data-title="Date" align="left" valign="middle">{item.date}</td>
                                                            {item.status == 0 ?
                                                                <td data-title="Date" align="left" valign="middle"><span className="pend">Pending</span></td>
                                                                :
                                                                <td data-title="Date" align="left" valign="middle"><span className="text-success">Approved</span></td>
                                                            }
                                                            <td data-title="Action" align="center" valign="middle">
                                                                {item.status == 0 ?
                                                                    <div className="tabl-btns">
                                                                        <button className="btn btn-proceed" onClick={() => { props.initializeModalShow() }}><i className="bi bi-send-fill"></i> initialize</button>
                                                                    </div>
                                                                    :
                                                                    <div className="tabl-btns single-btn">
                                                                        <button className="btn btn-edt"><i className="bi bi-eye-fill"></i>
                                                                            View</button>
                                                                    </div>}
                                                            </td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className="pagination_DIV">
                                <div className="pagination_DIV-left">
                                    <ul>
                                        <li>View</li>
                                        <li><select><option>10</option><option>50</option><option>100</option></select></li>
                                        <li>Admins per page</li>
                                    </ul>
                                </div>
                                <div className="pagination_DIV-right">
                                    <ul>
                                        <li><button className="btn btn-btn-prevs"><i className="bi bi-chevron-left"
                                            style={{ color: "#455356" }}></i> Previous</button></li>
                                        <li><button className="current-page">1</button></li>
                                        <li><button>2</button></li>
                                        <li><button>3</button></li>
                                        <li><button>4</button></li>
                                        <li>. . . .</li>
                                        <li><button>10</button></li>
                                        <li><button className="btn btn-btn-nexts">Next <i className="bi bi-chevron-right"
                                            style={{ color: "#455356" }}></i></button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Modal
                show={props.initializeModal}
                onHide={props.initializeModalClos}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Initialize</h1>
                        <button type="button" onClick={props.initializeModalClos} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="select-optn">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="all" />
                                <label className="form-check-label" for="all">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="email" />
                                <label className="form-check-label" for="email">
                                    e-Mail
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="sms" />
                                <label className="form-check-label" for="sms">
                                    SMS
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="whatsapp" />
                                <label className="form-check-label" for="whatsapp">
                                    Whatsapp
                                </label>
                            </div>
                        </div>
                        <div className="form-buttns-div d-flex justify-content-center mt-3">
                            <button className="btn btn-login"> Send</button>
                        </div>
                        <div className="success-mess-div">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="success-mess-div-inr">
                                            <p><i className="bi bi-check-circle-fill"></i>Send Successful</p>
                                            <div className="form-buttns-div d-flex justify-content-center">
                                                <button className="btn btn-login" > Ok</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}
