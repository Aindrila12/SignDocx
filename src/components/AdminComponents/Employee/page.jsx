import React from 'react';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const nameInputInvalidChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '.', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']'];
const numberInputInvalidChars = ['-', '+', 'e', '.', ' '];

export default function page(props) {
    return (
        <>
            <main className="page-content dashbord">
                <div className="container-fluid">
                    <div className='client-add-btn mt-4'>
                        <h4 className="page-titel">Client List</h4>
                        <button className='btn btn-login' onClick={() => { props.handleEmployeeModalShow() }}><i className='bi bi-plus-lg'></i>Add Employee</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xl-12 mb-3">
                            <div className="card custom-card main-card-item primary rounded-2">
                                <div className="card-body">
                                    <div id="no-more-tables">
                                        <table width="100%" border="0" cellSpacing="0" cellPadding="0"
                                            className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th align="left" valign="middle" style={{ width: "100px" }}>Sl No.</th>
                                                    <th align="left" valign="middle">Client name</th>
                                                    <th align="left" valign="middle">Email ID</th>
                                                    <th align="left" valign="middle">Mobile No.</th>
                                                    <th align="left" valign="middle">Status</th>
                                                    <th align="center" style={{ textAlign: "center" }} valign="middle">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    props.employeeList.map((item, i) => (
                                                        <tr key={i}>
                                                            <td data-title="Sl No." align="left" valign="middle">{i + 1}</td>
                                                            <td data-title="Applicant Name" align="left" valign="middle"><a href="">{item.name}</a></td>
                                                            <td data-title="Email ID" align="left" valign="middle">{item.email}</td>
                                                            <td data-title="Email ID" align="left" valign="middle">{item.mobileno}</td>
                                                            <td data-title="Email ID" align="left" valign="middle">
                                                                <div className="toggle-group">
                                                                    <input type="checkbox" name="on-off-switch1" id="on-off-switch1"
                                                                        checked="" tabIndex="1" onChange={() => { }} />
                                                                    <label htmlFor="on-off-switch1"></label>
                                                                    <div className="onoffswitch pull-right" aria-hidden="true">
                                                                        <div className="onoffswitch-label">
                                                                            <div className="onoffswitch-inner"></div>
                                                                            <div className="onoffswitch-switch"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td data-title="Action" align="center" valign="middle">
                                                                <button
                                                                    className="btn"
                                                                    style={{ color: '#455356' }}
                                                                    role="button"
                                                                    onClick={() => { props.goToDetail("/super-admin/updateclient/" + item.id) }}
                                                                >
                                                                    <i className="bi bi-pencil"></i>
                                                                </button>
                                                                <button
                                                                    className="btn"
                                                                    style={{ color: '#455356' }}
                                                                    role="button"
                                                                    onClick={() => { props.handleDeleteModalShow(item.id) }}
                                                                >
                                                                    <i className="bi bi-trash3"></i>
                                                                </button>
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
                                {/* <div className="pagination_DIV-left">
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
                                    </div> */}
                                <Stack spacing={2}>
                                    <Pagination count={props.totalPage} shape="rounded" onChange={(e, value) => { props.handleChangePage(e, value) }} />
                                </Stack>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Add Employee Modal */}
            <Modal
                show={props.employeeModalShow}
                onHide={props.handleEmployeeModalClose}
                centered
                size="lg"
                backdrop="static"
                keyboard={true}
            >
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <h5>Add New Employee</h5>
                        <button type="button" className="close-button" data-bs-dismiss="modal"
                            aria-label="Close" onClick={props.handleEmployeeModalClose}>
                            {/* <img src={closemodal} alt="" /> */}
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-frm-div">
                            <div className="row gy-2 gx-3 align-items-center">
                                {/* First Name */}
                                <div className="col-6 position-relative">
                                    <label className="" htmlFor="autoSizingInput">First Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${props.firstNameErr ? 'err-fil' : ''}`}
                                        value={props.firstName}
                                        onChange={(e) => { props.getFirstName(e.target.value) }}
                                        id="autoSizingInput"
                                        onKeyDown={(e) => {
                                            if (nameInputInvalidChars.includes(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {
                                        props.firstNameErr ? <span className='err-text'>First name required</span> : null
                                    }
                                </div>
                                {/* Last Name */}
                                <div className="col-6 pt-3 position-relative">
                                    <label className="" htmlFor="autoSizingInput">Last Name</label>
                                    <input
                                        type="text"
                                        className={`form-control ${props.lastNameErr ? 'err-fil' : ''}`}
                                        value={props.lastName}
                                        onChange={(e) => { props.getLastName(e.target.value) }}
                                        id="autoSizingInput"
                                        onKeyDown={(e) => {
                                            if (nameInputInvalidChars.includes(e.key)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                    {
                                        props.lastNameErr ? <span className='err-text'>Last name required</span> : null
                                    }
                                </div>
                                {/* Email ID */}
                                <div className="col-6 pt-3 position-relative">
                                    <label className="" htmlFor="autoSizingInput">Email ID</label>
                                    <input
                                        type="text"
                                        className={`form-control ${props.emailIdErr || props.validEmailIdErr || props.existEmailIdErr ? 'err-fil' : ''}`}
                                        value={props.emailId}
                                        onChange={(e) => { props.getEmailId(e.target.value) }}
                                        id="autoSizingInput" />
                                    {
                                        props.emailIdErr ? <span className='err-text'>Email required</span> : null
                                    }
                                    {
                                        props.validEmailIdErr ? <span className='err-text'>Valid email required</span> : null
                                    }
                                    {
                                        props.existEmailIdErr ? <span className='err-text'>Email already exists</span> : null
                                    }
                                </div>
                                {/* Mobile number */}
                                <div className="col-6 pt-3 position-relative">
                                    <label className="" htmlFor="autoSizingInput">Mobile number</label>
                                    <input
                                        type="number"
                                        className={`form-control ${props.mobileErr || props.validMobileErr ? 'err-fil' : ''}`}
                                        value={props.mobile}
                                        onChange={(e) => { props.getMobile(e.target.value) }}
                                        id="autoSizingInput"
                                        min='0'
                                        onKeyDown={(e) => {
                                            if (numberInputInvalidChars.includes(e.key)) {
                                                e.preventDefault();
                                            }
                                        }} />
                                    {
                                        props.mobileErr ? <span className='err-text'>Mobile number required</span> : null
                                    }
                                    {
                                        props.validMobileErr ? <span className='err-text'>Valid mobile number required</span> : null
                                    }
                                </div>
                            </div>
                            <div className="btn-grp add_canc_btn brnch-btn mt-3">
                                <button type="button" className="btn btn-primary float-end" onClick={() => { props.addEmployee() }}>Add</button>
                                <button type="button" className="btn btn-outline-primary me-2 float-end" data-bs-dismiss="modal" onClick={() => { props.handleEmployeeModalClose() }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                show={props.deleteModal}
                onHide={props.handleDeleteModalClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ paddingLeft: "16px" }}>Are you want to delete this company?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleDeleteModalClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={props.onDeleteClient}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
