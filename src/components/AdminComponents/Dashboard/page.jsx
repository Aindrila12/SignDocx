import React from 'react'

export default function page(props) {
    return (
        <>
            <main className="page-content dashbord">
                <div className="container-fluid">
                    <h4 className="page-titel mt-3">Dashboard</h4>
                    <div className="row mt-3">
                        <div className="col-xl-3 mb-3">
                            <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                                        <div className="das-head"> <span className="d-block mb-3">Total Client</span>
                                            <h3 className="lh-1 mt-4 mb-0 text-danger">{props.totalClient}</h3>
                                        </div>
                                        <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                                        <div className="das-head"> <span className="d-block mb-3">Pending</span>
                                            <h3 className="lh-1 mt-4 mb-0 text-primary">{props.pendingClient}</h3>
                                        </div>
                                        <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                                        <div className="das-head"> <span className="d-block mb-3">Processing</span>
                                            <h3 className="lh-1 mt-4 mb-0 text-dark">{props.processingClient}</h3>
                                        </div>
                                        <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                                        <div className="das-head"> <span className="d-block mb-3">Rejected</span>
                                            <h3 className="lh-1 mt-4 mb-0 text-success">{props.rejectedClient}</h3>
                                        </div>
                                        <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <div className="card custom-card main-card-item primary shadow bg-body rounded-2 border-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-start justify-content-between flex-wrap">
                                        <div className="das-head"> <span className="d-block mb-3">Approved</span>
                                            <h3 className="lh-1 mt-4 mb-0 text-secondary">{props.approvedClient}</h3>
                                        </div>
                                        <div className="text-end"> <i className="bi bi-people-fill"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-12">
                            <div className="card custom-card rounded-2">
                                <div className="card-header">
                                    <h4 className="card-title"> Client Chart </h4>
                                </div>
                                <div className="card-body">
                                    <div className="line-chart">
                                        <div className="aspect-ratio">
                                            <canvas id="chart"></canvas>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}
