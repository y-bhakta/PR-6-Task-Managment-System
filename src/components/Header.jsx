import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="nxl-navigation">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <NavLink to="/" className="b-brand">
                            {/* ========   change your logo hear   ============ */}
                            <img src="assets/images/logo-full.png" alt className="logo logo-lg" />
                            <img src="assets/images/logo-abbr.png" alt className="logo logo-sm" />
                        </NavLink>
                    </div>
                    <div className="navbar-content">
                        <ul className="nxl-navbar">
                            <li className="nxl-item nxl-caption">
                                <label>Navigation</label>
                            </li>
                            <li className="nxl-item nxl-hasmenu">
                                <NavLink to="/" className="nxl-link">
                                    <span className="nxl-micon"><i className="feather-airplay" /></span>
                                    <span className="nxl-mtext">Dashboards</span>
                                </NavLink>
                            </li>
                            <li className="nxl-item nxl-hasmenu">
                                <NavLink to="/Tasks" className="nxl-link">
                                    <span className="nxl-micon"><i className="feather-send" /></span>
                                    <span className="nxl-mtext">Taks</span>
                                </NavLink>
                            </li>
                            <li className="nxl-item nxl-hasmenu">
                                <NavLink to="/Tables" className="nxl-link">
                                    <span className="nxl-micon"><i className="feather-layout" /></span>
                                    <span className="nxl-mtext">Tables</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*! ================================================================ !*/}
            {/*! [End]  Navigation Manu !*/}
            {/*! ================================================================ !*/}
            {/*! ================================================================ !*/}
            {/*! [Start] Header !*/}
            {/*! ================================================================ !*/}
            <header className="nxl-header">
                <div className="header-wrapper">
                    {/*! [Start] Header Left !*/}
                    <div className="header-left d-flex align-items-center gap-4">
                        <NavLink to="#" className="nxl-head-mobile-toggler" id="mobile-collapse" onClick={(e) => e.preventDefault()}>
                            <div className="hamburger hamburger--arrowturn">
                                <div className="hamburger-box">
                                    <div className="hamburger-inner" />
                                </div>
                            </div>
                        </NavLink>
                        <div className="nxl-navigation-toggle">
                            <NavLink to="#" id="menu-mini-button" onClick={(e) => e.preventDefault()}>
                                <i className="feather-align-left" />
                            </NavLink>
                            <NavLink to="#" id="menu-expend-button" onClick={(e) => e.preventDefault()} style={{ display: 'none' }}>
                                <i className="feather-arrow-right" />
                            </NavLink>
                        </div>
                    </div>
                    {/*! [End] Header Left !*/}
                    {/*! [Start] Header Right !*/}
                    <div className="header-right ms-auto">
                        <div className="d-flex align-items-center">
                            <div className="dropdown nxl-h-item nxl-header-search">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <i className="feather-search" />
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                                    <div className="input-group search-form">
                                        <span className="input-group-text">
                                            <i className="feather-search fs-6 text-muted" />
                                        </span>
                                        <input type="text" className="form-control search-input-field" placeholder="Search...." />
                                        <span className="input-group-text">
                                            <button type="button" className="btn-close" />
                                        </span>
                                    </div>
                                    <div className="dropdown-divider mt-0" />
                                    <div className="search-items-wrapper">
                                        <div className="searching-for px-4 py-2">
                                            <p className="fs-11 fw-medium text-muted">I'm searching for...</p>
                                            <div className="d-flex flex-wrap gap-1">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Projects</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Leads</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Contacts</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Inbox</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Invoices</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Tasks</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Customers</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Notes</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Affiliate</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Storage</NavLink>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="flex-fill border rounded py-1 px-2 text-center fs-11 fw-semibold">Calendar</NavLink>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider" />
                                        <div className="recent-result px-4 py-2">
                                            <h4 className="fs-13 fw-normal text-gray-600 mb-3">Recnet <span className="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-text rounded">
                                                        <i className="feather-airplay" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">CRM dashboard redesign</NavLink>
                                                        <p className="fs-11 text-muted mb-0">Home / project / crm</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="badge border rounded text-dark">/<i className="feather-command ms-1 fs-10" /></NavLink>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-text rounded">
                                                        <i className="feather-file-plus" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Create new document</NavLink>
                                                        <p className="fs-11 text-muted mb-0">Home / tasks / docs</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="badge border rounded text-dark">N /<i className="feather-command ms-1 fs-10" /></NavLink>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-text rounded">
                                                        <i className="feather-user-plus" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Invite project colleagues</NavLink>
                                                        <p className="fs-11 text-muted mb-0">Home / project / invite</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="badge border rounded text-dark">P /<i className="feather-command ms-1 fs-10" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider my-3" />
                                        <div className="users-result px-4 py-2">
                                            <h4 className="fs-13 fw-normal text-gray-600 mb-3">Users <span className="badge small bg-gray-200 rounded ms-1 text-dark">5</span></h4>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image rounded">
                                                        <img src="assets/images/avatar/1.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Alexandra Della</NavLink>
                                                        <p className="fs-11 text-muted mb-0">alex@example.com</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-chevron-right" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image rounded">
                                                        <img src="assets/images/avatar/2.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Green Cute</NavLink>
                                                        <p className="fs-11 text-muted mb-0">green.cute@outlook.com</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-chevron-right" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image rounded">
                                                        <img src="assets/images/avatar/3.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Malanie Hanvey</NavLink>
                                                        <p className="fs-11 text-muted mb-0">malanie.anvey@outlook.com</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-chevron-right" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image rounded">
                                                        <img src="assets/images/avatar/4.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Kenneth Hune</NavLink>
                                                        <p className="fs-11 text-muted mb-0">kenth.hune@outlook.com</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-chevron-right" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-0">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image rounded">
                                                        <img src="assets/images/avatar/5.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Archie Cantones</NavLink>
                                                        <p className="fs-11 text-muted mb-0">archie.cones@outlook.com</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-chevron-right" />
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider my-3" />
                                        <div className="file-result px-4 py-2">
                                            <h4 className="fs-13 fw-normal text-gray-600 mb-3">Files <span className="badge small bg-gray-200 rounded ms-1 text-dark">3</span></h4>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image bg-gray-200 rounded">
                                                        <img src="assets/images/file-icons/css.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Project Style CSS</NavLink>
                                                        <p className="fs-11 text-muted mb-0">05.74 MB</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-download" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-4">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image bg-gray-200 rounded">
                                                        <img src="assets/images/file-icons/zip.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Dashboard Project Zip</NavLink>
                                                        <p className="fs-11 text-muted mb-0">46.83 MB</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-download" />
                                                </NavLink>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between mb-0">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div className="avatar-image bg-gray-200 rounded">
                                                        <img src="assets/images/file-icons/pdf.png" alt className="img-fluid" />
                                                    </div>
                                                    <div>
                                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body fw-bold d-block mb-1">Project Document PDF</NavLink>
                                                        <p className="fs-11 text-muted mb-0">12.85 MB</p>
                                                    </div>
                                                </div>
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md">
                                                    <i className="feather-download" />
                                                </NavLink>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider mt-3 mb-0" />
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="p-3 fs-10 fw-bold text-uppercase text-center d-block">Loar More</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown nxl-h-item nxl-header-language d-none d-sm-flex">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0 nxl-language-link" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                                    <img src="assets/vendors/img/flags/4x3/us.svg" alt className="img-fluid wd-20" />
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-language-dropdown">
                                    <div className="dropdown-divider mt-0" />
                                    <div className="language-items-wrapper">
                                        <div className="select-language px-4 py-2 hstack justify-content-between gap-4">
                                            <div className="lh-lg">
                                                <h6 className="mb-0">Select Language</h6>
                                                <p className="fs-11 text-muted mb-0">12 languages avaiable!</p>
                                            </div>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="avatar-text avatar-md" data-bs-toggle="tooltip" title="Add Language">
                                                <i className="feather-plus" />
                                            </NavLink>
                                        </div>
                                        <div className="dropdown-divider" />
                                        <div className="row px-4 pt-3">
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/sa.svg" alt className="img-fluid" /></div>
                                                    <span>Arabic</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/bd.svg" alt className="img-fluid" /></div>
                                                    <span>Bengali</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/ch.svg" alt className="img-fluid" /></div>
                                                    <span>Chinese</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/nl.svg" alt className="img-fluid" /></div>
                                                    <span>Dutch</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select active">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/us.svg" alt className="img-fluid" /></div>
                                                    <span>English</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/fr.svg" alt className="img-fluid" /></div>
                                                    <span>French</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/de.svg" alt className="img-fluid" /></div>
                                                    <span>German</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/in.svg" alt className="img-fluid" /></div>
                                                    <span>Hindi</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/ru.svg" alt className="img-fluid" /></div>
                                                    <span>Russian</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/es.svg" alt className="img-fluid" /></div>
                                                    <span>Spanish</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/tr.svg" alt className="img-fluid" /></div>
                                                    <span>Turkish</span>
                                                </NavLink>
                                            </div>
                                            <div className="col-sm-4 col-6 language_select">
                                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                                    <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/pk.svg" alt className="img-fluid" /></div>
                                                    <span>Urdo</span>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nxl-h-item d-none d-sm-flex">
                                <div className="full-screen-switcher">
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0" onclick="$('body').fullScreenHelper('toggle');">
                                        <i className="feather-maximize maximize" />
                                        <i className="feather-minimize minimize" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="nxl-h-item dark-light-theme">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0 dark-button">
                                    <i className="feather-moon" />
                                </NavLink>
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0 light-button" style={{ display: 'none' }}>
                                    <i className="feather-sun" />
                                </NavLink>
                            </div>
                            <div className="dropdown nxl-h-item">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-0" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                                    <i className="feather-clock" />
                                    <span className="badge bg-success nxl-h-badge">2</span>
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-timesheets-menu">
                                    <div className="d-flex justify-content-between align-items-center timesheets-head">
                                        <h6 className="fw-bold text-dark mb-0">Timesheets</h6>
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="fs-11 text-success text-end ms-auto" data-bs-toggle="tooltip" title="Upcomming Timers">
                                            <i className="feather-clock" />
                                            <span>3 Upcomming</span>
                                        </NavLink>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-column timesheets-body">
                                        <i className="feather-clock fs-1 mb-4" />
                                        <p className="text-muted">No started timers found yes!</p>
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-primary">Started Timer</NavLink>
                                    </div>
                                    <div className="text-center timesheets-footer">
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="fs-13 fw-semibold text-dark">Alls Timesheets</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown nxl-h-item">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} className="nxl-head-link me-3" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                                    <i className="feather-bell" />
                                    <span className="badge bg-danger nxl-h-badge">3</span>
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                                    <div className="d-flex justify-content-between align-items-center notifications-head">
                                        <h6 className="fw-bold text-dark mb-0">Notifications</h6>
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="fs-11 text-success text-end ms-auto" data-bs-toggle="tooltip" title="Make as Read">
                                            <i className="feather-check" />
                                            <span>Make as Read</span>
                                        </NavLink>
                                    </div>
                                    <div className="notifications-item">
                                        <img src="assets/images/avatar/2.png" alt className="rounded me-3 border" />
                                        <div className="notifications-desc">
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Malanie Hanvey</span> We should talk about that at lunch!</NavLink>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="notifications-date text-muted border-bottom border-bottom-dashed">2 minutes ago</div>
                                                <div className="d-flex align-items-center float-end gap-2">
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                        <i className="feather-x fs-12" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notifications-item">
                                        <img src="assets/images/avatar/3.png" alt className="rounded me-3 border" />
                                        <div className="notifications-desc">
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Valentine Maton</span> You can download the latest invoices now.</NavLink>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="notifications-date text-muted border-bottom border-bottom-dashed">36 minutes ago</div>
                                                <div className="d-flex align-items-center float-end gap-2">
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                        <i className="feather-x fs-12" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="notifications-item">
                                        <img src="assets/images/avatar/4.png" alt className="rounded me-3 border" />
                                        <div className="notifications-desc">
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="font-body text-truncate-2-line"> <span className="fw-semibold text-dark">Archie Cantones</span> Don't forget to pickup Jeremy after school!</NavLink>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="notifications-date text-muted border-bottom border-bottom-dashed">53 minutes ago</div>
                                                <div className="d-flex align-items-center float-end gap-2">
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="d-block wd-8 ht-8 rounded-circle bg-gray-300" data-bs-toggle="tooltip" title="Make as Read" />
                                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="text-danger" data-bs-toggle="tooltip" title="Remove">
                                                        <i className="feather-x fs-12" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center notifications-footer">
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="fs-13 fw-semibold text-dark">Alls Notifications</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown nxl-h-item">
                                <NavLink to="#" onClick={(e) => e.preventDefault()} data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                                    <img src="assets/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar me-0" />
                                </NavLink>
                                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                                    <div className="dropdown-header">
                                        <div className="d-flex align-items-center">
                                            <img src="assets/images/avatar/1.png" alt="user-image" className="img-fluid user-avtar" />
                                            <div>
                                                <h6 className="text-dark mb-0">Alexandra Della <span className="badge bg-soft-success text-success ms-1">PRO</span></h6>
                                                <span className="fs-12 fw-medium text-muted">alex@example.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-bs-toggle="dropdown">
                                            <span className="hstack">
                                                <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                                <span>Active</span>
                                            </span>
                                            <i className="feather-chevron-right ms-auto me-0" />
                                        </NavLink>
                                        <div className="dropdown-menu">
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2" />
                                                    <span>Always</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2" />
                                                    <span>Active</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2" />
                                                    <span>Bussy</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-info rounded-circle me-2" />
                                                    <span>Inactive</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-dark rounded-circle me-2" />
                                                    <span>Disabled</span>
                                                </span>
                                            </NavLink>
                                            <div className="dropdown-divider" />
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-10 ht-10 border border-2 border-gray-1 bg-primary rounded-circle me-2" />
                                                    <span>Cutomization</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="dropdown">
                                        <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item" data-bs-toggle="dropdown">
                                            <span className="hstack">
                                                <i className="feather-dollar-sign me-2" />
                                                <span>Subscriptions</span>
                                            </span>
                                            <i className="feather-chevron-right ms-auto me-0" />
                                        </NavLink>
                                        <div className="dropdown-menu">
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Plan</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Billings</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Referrals</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Payments</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Statements</span>
                                                </span>
                                            </NavLink>
                                            <div className="dropdown-divider" />
                                            <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                                <span className="hstack">
                                                    <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3" />
                                                    <span>Subscriptions</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                        <i className="feather-user" />
                                        <span>Profile Details</span>
                                    </NavLink>
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                        <i className="feather-activity" />
                                        <span>Activity Feed</span>
                                    </NavLink>
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                        <i className="feather-dollar-sign" />
                                        <span>Billing Details</span>
                                    </NavLink>
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                        <i className="feather-bell" />
                                        <span>Notifications</span>
                                    </NavLink>
                                    <NavLink to="#" onClick={(e) => e.preventDefault()} className="dropdown-item">
                                        <i className="feather-settings" />
                                        <span>Account Settings</span>
                                    </NavLink>
                                    <div className="dropdown-divider" />
                                    <NavLink to="#" className="dropdown-item">
                                        <i className="feather-log-out" />
                                        <span>Logout</span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*! [End] Header Right !*/}
                </div>
            </header>
        </>
    )
}

export default Header
