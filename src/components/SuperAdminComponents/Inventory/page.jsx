import React from 'react'

export default function page() {
  return (
    <>
        <main className="page-content dashbord">
            <div className="container-fluid">
            <div className='client-add-btn mt-4'>
                <h4 className="page-titel mt-3">Inventory</h4>
                <button className='btn btn-login'>skjdbcksjdvb</button>
                </div>
                {/* <div className="row mt-3">
                    <div className="col-xl-12 mb-3">
                        <div className="card custom-card main-card-item primary rounded-2">
                            <div className="card-body">
                                <div className="inventry-div">
                                    <div className="inventry-div-left"><img src="assets/img/e-stamp-img.png"/></div>

                                    <div className="inventry-div-right">
                                        <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                            <div className="card-body">
                                                <div className="d-flex align-items-start justify-content-between flex-wrap">
                                                    <div className="das-head"> <span className="d-block mb-3">Requested
                                                            e-Stamp</span>
                                                        <h3 className="lh-1 mt-4 mb-0 text-danger">10</h3>
                                                    </div>
                                                    <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="" method="post" className="form-md m-0">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input id="form_name" className="form-control" type="text"/>
                                                        <label for="form_name">e-Stamp Value<span
                                                                className="gl-form-asterisk"></span></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input id="form_email" className="form-control" type="text"/>
                                                        <label for="form_email">e-Stamp No.<span
                                                                className="gl-form-asterisk"></span></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="preview-download-btn">
                                                        <button className="btn btn-download w-100"><i
                                                                className="bi bi-download"></i> Download</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div> */}

                <h4 className="page-titel mt-3">Client List</h4>
                <div className="row mt-3">
                    <div className="col-xl-12 mb-3">
                        <div className="card custom-card main-card-item primary rounded-2">
                            <div className="card-body">
                                <div id="no-more-tables">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                        className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th align="left" valign="middle" style={{width: "100px"}}>Sl No.</th>
                                                <th align="left" valign="middle">Client Name</th>
                                                <th align="left" valign="middle">Email ID</th>
                                                <th align="left" valign="middle">Date</th>
                                                <th align="left" valign="middle">Status</th>
                                                <th align="center" style={{textAlign: "center"}} valign="middle">Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">1</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 1</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch1" id="on-off-switch1"
                                                            checked="" tabindex="1"/>
                                                        <label for="on-off-switch1"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">2</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 2</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch2" id="on-off-switch2"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch2"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">3</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 3</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch3" id="on-off-switch3"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch3"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">4</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 4</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch4" id="on-off-switch4"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch4"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">5</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 5</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch5" id="on-off-switch5"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch5"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">6</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 6</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch6" id="on-off-switch6"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch6"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">7</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 7</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch7" id="on-off-switch7"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch7"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">8</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 8</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch8" id="on-off-switch8"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch8"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">9</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 9</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch9" id="on-off-switch9"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch9"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">10</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 10</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch10"
                                                            id="on-off-switch10" className="on-off-switch" checked=""
                                                            tabindex="1"/>
                                                        <label for="on-off-switch10"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">11</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 11</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch11"
                                                            id="on-off-switch11" className="on-off-switch" checked=""
                                                            tabindex="1"/>
                                                        <label for="on-off-switch11"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">12</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 12</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch12"
                                                            id="on-off-switch12" className="on-off-switch" checked=""
                                                            tabindex="1"/>
                                                        <label for="on-off-switch12"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">13</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 13</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-13" id="on-off-switch13"
                                                            className="on-off-switch" checked="" tabindex="1"/>
                                                        <label for="on-off-switch13"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">14</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 14</a></td>
                                                <td data-title="Email ID" align="left" valign="middle"><span>
                                                        name@mail.com</span></td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch14"
                                                            id="on-off-switch14" className="on-off-switch" checked=""
                                                            tabindex="1"/>
                                                        <label for="on-off-switch14"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns single-btn">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td data-title="Sl No." align="left" valign="middle">15</td>
                                                <td data-title="Client Name" align="left" valign="middle"><a
                                                        href="">Name 15</a></td>
                                                <td data-title="Email ID" align="left" valign="middle">name@mail.com
                                                </td>
                                                <td data-title="Date" align="left" valign="middle">08-01-2025</td>
                                                <td data-title="Date" align="left" valign="middle">
                                                    <div className="toggle-group">
                                                        <input type="checkbox" name="on-off-switch15"
                                                            id="on-off-switch15" className="on-off-switch" checked=""
                                                            tabindex="1"/>
                                                        <label for="on-off-switch15"></label>
                                                        <div className="onoffswitch pull-right" aria-hidden="true">
                                                            <div className="onoffswitch-label">
                                                                <div className="onoffswitch-inner"></div>
                                                                <div className="onoffswitch-switch"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-title="Action" align="center" valign="middle">
                                                    <div className="tabl-btns">
                                                        <button className="btn btn-proceed"><i className="bi bi-upload"></i>
                                                            Upload</button>
                                                    </div>
                                                </td>
                                            </tr>

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
                                                style={{color: "#455356"}}></i> Previous</button></li>
                                    <li><button className="current-page">1</button></li>
                                    <li><button>2</button></li>
                                    <li><button>3</button></li>
                                    <li><button>4</button></li>
                                    <li>. . . .</li>
                                    <li><button>10</button></li>
                                    <li><button className="btn btn-btn-nexts">Next <i className="bi bi-chevron-right"
                                                style={{color: "#455356"}}></i></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    </>
  )
}
