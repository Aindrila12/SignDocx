import React from 'react'
import { showMenu, hideMenu } from "../../../Features/Counter/menushow";
import { IMAGE_NAME } from '../../../images/image';
import { getUserName } from '../../../Services/common';

export default function Page(props) {
    return (
        <>
            {/* <Navbar /> */}
            <div className="header">
                <div className="header-left">
                    <div id="show-sidebar" href="" style={{cursor:"pointer"}}>
                        <i className="bi bi-list" onClick={() => { props.dispatch(showMenu()) }}></i>
                    </div>
                    <div id="close-sidebar">
                        <i className="bi bi-list" onClick={() => { props.dispatch(hideMenu()) }}></i>
                    </div>
                </div>
                <div className="header-right">
                    <div className="profile-drop">
                        <span className="botifig-icn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><svg
                            xmlns="http://www.w3.org/2000/svg" className="header-link-icon animate-bell"
                            viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none" />
                            <path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="16" />
                            <path d="M184,24a102.71,102.71,0,0,1,36.29,40" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <path d="M35.71,64A102.71,102.71,0,0,1,72,24" fill="none" stroke="currentColor"
                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <path
                                d="M56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112Z"
                                fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="16" />
                        </svg><span className="header-icon-pulse rounded pulse">0</span></span>
                        <div className="dropdown-menu dropdown-menu-end notific-drop">
                            <div className="notific-list">
                                <div className="notification-heading">
                                    <h4 className="menu-title">Notifications</h4>
                                    <button className="btn btn-vwall">View all</button>
                                </div>
                                <div className="notifications-wrapper">
                                    <a className="content" href="">

                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 · day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>

                                    </a>
                                    <a className="content" href="">
                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 · day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>
                                    </a>
                                    <a className="content" href="">
                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 • day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>
                                    </a>
                                    <a className="content" href="">
                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 • day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>

                                    </a>
                                    <a className="content" href="">
                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 • day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>
                                    </a>
                                    <a className="content" href="">
                                        <div className="notification-item">
                                            <h4 className="item-title">Evaluation Deadline 1 • day ago</h4>
                                            <p className="item-info">Marketing 101, Video Assignment</p>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <strong>Hi, {getUserName()}</strong>
                        {/* <span className="myprofile dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">A</span> */}
                        <i className='bi bi-person-circle dropdown-toggle' data-bs-toggle="dropdown"></i>
                        <div className="dropdown-menu dropdown-menu-end">
                            <span className="name-ful">{getUserName()}</span>
                            <a className="dropdown-item"><i className="bi bi-person-fill"></i>&nbsp; Edit Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item"><i className="bi bi-key"></i>&nbsp; Change Password</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" onClick={() => {props.logout()}}><i className="bi bi-box-arrow-in-left"></i>&nbsp; Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidemenu */}
            <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a>
                            {/* <img src="" /> */}
                            <img src={IMAGE_NAME.PROJECT_LOGO} />
                            {/* <img src={`${process.env.PUBLIC_URL}/assets/img/my-image.jpg`} alt="My Image" /> */}
                            {/* <img src="/assets/img/my-image.jpg" alt="My Image" /> */}
                        </a>

                    </div>
                    <div className="sidebar-menu">
                        <ul>
                            {
                                props.menuList.map((item, i) => (
                                    <li key={i} className="nav-item">
                                        <a onClick={() => {props.getPath(item.menuurl)}}>{item.logo}{item.menulabel}</a>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
