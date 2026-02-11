import React, { useEffect } from 'react'

const Tasks = () => {

    return (
        <>
            <div>
                <main className="nxl-container apps-container apps-tasks">
                    <div className="nxl-content without-header nxl-full-content">
                        {/* [ Main Content ] start */}
                        <div className="main-content d-flex">
                            {/* [ Content Sidebar ] start */}
                            <div className="content-sidebar content-sidebar-md" data-scrollbar-target="#psScrollbarInit">
                                <div className="content-sidebar-header bg-white sticky-top hstack justify-content-between">
                                    <h4 className="fw-bolder mb-0">Tasks</h4>
                                    <a href="javascript:void(0);" className="app-sidebar-close-trigger d-flex">
                                        <i className="feather-x" />
                                    </a>
                                </div>
                                <div className="content-sidebar-header">
                                    <a href="javascript:void(0);" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#addNewTasks">
                                        <i className="feather-plus me-2" />
                                        <span>Add Tasks</span>
                                    </a>
                                </div>
                                <div className="content-sidebar-body">
                                    <ul className="nav flex-column nxl-content-sidebar-item">
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-list" />
                                                <span>New</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-watch" />
                                                <span>Pending</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-activity" />
                                                <span>Inprogress</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-check-circle" />
                                                <span>Completed</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="nav flex-column nxl-content-sidebar-item">
                                        <li className="px-4 my-2 fs-10 fw-bold text-uppercase text-muted text-spacing-1 d-flex align-items-center justify-content-between">
                                            <span>Priority</span>
                                            <a href="javascript:void(0);">
                                                <span className="avatar-text avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Add New"> <i className="feather-plus" /> </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <span className="wd-7 ht-7 bg-dark rounded-circle" />
                                                <span>Low</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <span className="wd-7 ht-7 bg-success rounded-circle" />
                                                <span>Normal</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <span className="wd-7 ht-7 bg-primary rounded-circle" />
                                                <span>Medium</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <span className="wd-7 ht-7 bg-warning rounded-circle" />
                                                <span>High</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <span className="wd-7 ht-7 bg-danger rounded-circle" />
                                                <span>Urgent</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="nav flex-column nxl-content-sidebar-item">
                                        <li className="px-4 my-2 fs-10 fw-bold text-uppercase text-muted text-spacing-1 d-flex align-items-center justify-content-between">
                                            <span>Overview</span>
                                            <a href="javascript:void(0);">
                                                <span className="avatar-text avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Add New"> <i className="feather-plus" /> </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-hash" />
                                                <span>Overview</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-hash" />
                                                <span>My Tasks</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-hash" />
                                                <span>Tasks Activity</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="javascript:void(0);">
                                                <i className="feather-hash" />
                                                <span>Tasks Attachments</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* [ Content Sidebar  ] end */}
                            {/* [ Main Area  ] start */}
                            <div className="content-area" data-scrollbar-target="#psScrollbarInit">
                                <div className="content-area-header sticky-top">
                                    <div className="page-header-left d-flex align-items-center gap-2">
                                        <a href="javascript:void(0);" className="app-sidebar-open-trigger me-2">
                                            <i className="feather-align-left fs-20" />
                                        </a>
                                        <div className="dropdown">
                                            <a href="javascript:void(0)" className="btn btn-light-brand dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,16">
                                                <i className="feather-check-circle me-2" />
                                                <span>My Tasks</span>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="feather-hash" />
                                                    <span>All Tasks</span>
                                                </a>
                                                <a className="dropdown-item active" href="javascript:void(0)">
                                                    <i className="feather-check-circle" />
                                                    <span>My Tasks</span>
                                                </a>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="feather-airplay" />
                                                    <span>Overviews</span>
                                                </a>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="feather-clock" />
                                                    <span>Pending Tasks</span>
                                                </a>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="feather-activity" />
                                                    <span>InProgress Tasks</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a href="javascript:void(0)" className="avatar-text avatar-md" data-bs-toggle="dropdown" data-bs-offset="0,22">
                                                <i className="feather-eye" />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-eye me-3" />
                                                        <span>Read</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-eye-off me-3" />
                                                        <span>Unread</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-star me-3" />
                                                        <span>Starred</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-shield-off me-3" />
                                                        <span>Unstarred</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-clock me-3" />
                                                        <span>Snooze</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-check-circle me-3" />
                                                        <span>Add Tasks</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-archive me-3" />
                                                        <span>Archive</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-alert-octagon me-3" />
                                                        <span>Report Spam</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a className="dropdown-item" href="javascript:void(0)">
                                                        <i className="feather-trash-2 me-3" />
                                                        <span>Delete</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <a href="javascript:void(0)" className="d-flex" data-bs-toggle="dropdown" data-bs-offset="0,22" data-bs-auto-close="outside" aria-expanded="false">
                                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Tags">
                                                    <i className="feather-tag" />
                                                </div>
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Office" defaultChecked="checked" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Office">Office</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Family" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Family">Family</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Friend" defaultChecked="checked" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Friend">Friend</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Marketplace" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Marketplace"> Marketplace </label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Development" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Development"> Development </label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-divider" />
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className="feather-plus me-3" />
                                                    <span>Create Tag</span>
                                                </a>
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className="feather-tag me-3" />
                                                    <span>Manages Tag</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <a href="javascript:void(0)" className="d-flex" data-bs-toggle="dropdown" data-bs-offset="0,22" data-bs-auto-close="outside" aria-expanded="false">
                                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Labels">
                                                    <i className="feather-folder-plus" />
                                                </div>
                                            </a>
                                            <div className="dropdown-menu">
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Updates" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Updates">Updates</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Socials" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Socials">Socials</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Primary" defaultChecked="checked" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Primary">Primary</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Forums" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Forums">Forums</label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-item">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="Promotions" defaultChecked="checked" />
                                                        <label className="custom-control-label c-pointer" htmlFor="Promotions"> Promotions </label>
                                                    </div>
                                                </div>
                                                <div className="dropdown-divider" />
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className="feather-plus me-3" />
                                                    <span>Create Label</span>
                                                </a>
                                                <a href="javascript:void(0);" className="dropdown-item">
                                                    <i className="feather-folder-plus me-3" />
                                                    <span>Manages Label</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page-header-right ms-auto">
                                        <div className="hstack gap-2">
                                            <div className="hstack">
                                                <a href="javascript:void(0)" className="search-form-open-toggle">
                                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Search">
                                                        <i className="feather-search" />
                                                    </div>
                                                </a>
                                                <form className="search-form" style={{ display: 'none' }}>
                                                    <div className="search-form-inner">
                                                        <a href="javascript:void(0)" className="search-form-close-toggle">
                                                            <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Search Close">
                                                                <i className="feather-arrow-left" />
                                                            </div>
                                                        </a>
                                                        <input type="search" className="py-3 px-0 border-0 w-100" id="tasksSearch" placeholder="Search..." />
                                                    </div>
                                                </form>
                                            </div>
                                            <a href="javascript:void(0)" className="d-none d-sm-flex">
                                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Newest">
                                                    <i className="feather-chevron-left" />
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="d-none d-sm-flex">
                                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Oldest">
                                                    <i className="feather-chevron-right" />
                                                </div>
                                            </a>
                                            <div className="dropdown d-none d-sm-flex">
                                                <a href="javascript:void(0)" className="btn btn-light-brand btn-sm rounded-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,23">Newest</a>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Title</a></li>
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Priority</a></li>
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Category</a></li>
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Time &amp; Date</a></li>
                                                    <li className="dropdown-divider" />
                                                    <li><a className="dropdown-item active" href="javascript:void(0)">Newest</a></li>
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Oldest</a></li>
                                                    <li className="dropdown-divider" />
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Ascending</a></li>
                                                    <li><a className="dropdown-item" href="javascript:void(0)">Descending</a></li>
                                                </ul>
                                            </div>
                                            <div className="dropdown d-none d-sm-flex">
                                                <a href="javascript:void(0)" className="d-flex" data-bs-toggle="dropdown" data-bs-offset="0,22" data-bs-auto-close="outside">
                                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="More Options">
                                                        <i className="feather-more-vertical" />
                                                    </div>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-plus me-3" />
                                                        <span>Add to Group</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-user-plus me-3" />
                                                        <span>Add to Contact</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-eye-off me-3" />
                                                        <span>Make as Unread</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-sliders me-3" />
                                                        <span>Filter Messages</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-archive me-3" />
                                                        <span>Make as Archive</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-slash me-3" />
                                                        <span>Report Spam</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-sliders me-3" />
                                                        <span>Report phishing</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-download me-3" />
                                                        <span>Download Messages</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-bell-off me-3" />
                                                        <span>Mute Conversion</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-slash me-3" />
                                                        <span>Block Conversion</span>
                                                    </a>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-trash-2 me-3" />
                                                        <span>Delete Conversion</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-area-body">
                                    <div className="card stretch stretch-full">
                                        <a href="javascript:void(0);" className="card-header" data-bs-toggle="collapse" data-bs-target="#tasks_collapse_1">
                                            <h5 className="mb-0">Recently Assigned</h5>
                                        </a>
                                        <div className="card-body collapse show" id="tasks_collapse_1">
                                            <ul className="list-unstyled mb-0">
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask1" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask1" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Video conference with Canada Team <span className="ms-2 badge bg-soft-danger text-danger">High</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-primary text-primary d-md-inline-block d-none">Calls</div>
                                                            <div className="d-md-inline-block d-none me-3">27 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/1.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask2" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask2" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Client objective meeting <span className="ms-2 badge bg-soft-primary text-primary">Normal</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-success text-success d-md-inline-block d-none">Conferences</div>
                                                            <div className="d-md-inline-block d-none me-3">22 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/2.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask3" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask3" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Target market trend analysis on the go <span className="ms-2 badge bg-soft-warning text-warning">Medium</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-teal text-teal d-md-inline-block d-none">Meetings</div>
                                                            <div className="d-md-inline-block d-none me-3">23 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/3.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask4" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask4" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Send revised proposal to Mr. Dow Jones <span className="ms-2 badge bg-soft-success text-success">Low</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-primary text-primary d-md-inline-block d-none">Calls</div>
                                                            <div className="d-md-inline-block d-none me-3">28 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/4.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-0 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask5" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask5" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Set up first call for demo <span className="ms-2 badge bg-soft-danger text-danger">Urgent</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-warning text-warning d-md-inline-block d-none">Project</div>
                                                            <div className="d-md-inline-block d-none me-3">30 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/5.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card stretch stretch-full">
                                        <a href="javascript:void(0);" className="card-header" data-bs-toggle="collapse" data-bs-target="#tasks_collapse_yesterday">
                                            <h5 className="mb-0">Yesterday</h5>
                                        </a>
                                        <div className="card-body collapse show" id="tasks_collapse_yesterday">
                                            <ul className="list-unstyled mb-0">
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask6" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask6" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Client objective meeting <span className="ms-2 badge bg-soft-primary text-primary">Normal</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-success text-success d-md-inline-block d-none">Conferences</div>
                                                            <div className="d-md-inline-block d-none me-3">22 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/2.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask7" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask7" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Target market trend analysis on the go <span className="ms-2 badge bg-soft-warning text-warning">Medium</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-teal text-teal d-md-inline-block d-none">Meetings</div>
                                                            <div className="d-md-inline-block d-none me-3">23 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/3.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-0 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask8" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask8" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Send revised proposal to Mr. Dow Jones <span className="ms-2 badge bg-soft-success text-success">Low</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-primary text-primary d-md-inline-block d-none">Calls</div>
                                                            <div className="d-md-inline-block d-none me-3">28 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/4.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card mb-0">
                                        <a href="javascript:void(0);" className="card-header" data-bs-toggle="collapse" data-bs-target="#tasks_collapse_20_nov">
                                            <h5 className="mb-0">20 Nov, 2023</h5>
                                        </a>
                                        <div className="card-body collapse show" id="tasks_collapse_20_nov">
                                            <ul className="list-unstyled mb-0">
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask9" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask9" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Target market trend analysis on the go <span className="ms-2 badge bg-soft-warning text-warning">Medium</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-teal text-teal d-md-inline-block d-none">Meetings</div>
                                                            <div className="d-md-inline-block d-none me-3">23 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/3.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask10" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask10" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Send revised proposal to Mr. Dow Jones <span className="ms-2 badge bg-soft-success text-success">Low</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-primary text-primary d-md-inline-block d-none">Calls</div>
                                                            <div className="d-md-inline-block d-none me-3">28 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/4.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-3 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask11" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask11" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Client objective meeting <span className="ms-2 badge bg-soft-primary text-primary">Normal</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-success text-success d-md-inline-block d-none">Conferences</div>
                                                            <div className="d-md-inline-block d-none me-3">22 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/2.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="single-task-list p-3 mb-0 border border-dashed rounded-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center gap-3 me-3">
                                                            <div className="custom-control custom-checkbox me-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheckTask12" data-checked-action="task-action" />
                                                                <label className="custom-control-label c-pointer" htmlFor="customCheckTask12" />
                                                            </div>
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className="lh-base"><i className="feather-star" /></div>
                                                                <a href="javascript:void(0);" className="single-task-list-link" data-bs-toggle="offcanvas" data-bs-target="#tasksDetailsOffcanvas">
                                                                    <div className="fs-13 fw-bold text-truncate-1-line">Video conference with Canada Team <span className="ms-2 badge bg-soft-danger text-danger">High</span></div>
                                                                    <div className="fs-12 fw-normal text-muted text-truncate-1-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex flex-shrink-0 align-items-center gap-3">
                                                            <div className="badge bg-soft-warning text-warning d-md-inline-block d-none">Meeting</div>
                                                            <div className="d-md-inline-block d-none me-3">27 Nov, 2023</div>
                                                            <div className="avatar-image avatar-md d-sm-inline-block d-none">
                                                                <img src="assets/images/avatar/1.png" alt="user" className="img-fluid" />
                                                            </div>
                                                            <div className="dropdown">
                                                                <a href="javascript:void(0);" className="avatar-text avatar-md" data-bs-toggle="dropdown">
                                                                    <i className="feather-more-vertical" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-end">
                                                                    <a className="dropdown-item edit-task" href="#">Edit Task</a>
                                                                    <a className="dropdown-item view-task" href="#">View Task</a>
                                                                    <a className="dropdown-item delete-task" href="#">Delete Task</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* [ Footer ] start */}
                                <footer className="footer">
                                    <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
                                        <span>Copyright ©</span>
                                    </p>
                                    <div className="d-flex align-items-center gap-4">
                                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Help</a>
                                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Terms</a>
                                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Privacy</a>
                                    </div>
                                </footer>
                                {/* [ Footer ] end */}
                            </div>
                            {/* [ Content Area ] end */}
                        </div>
                        {/* [ Main Content ] end */}
                    </div>
                </main>
                {/*! ================================================================ !*/}
                {/*! [End] Main Content !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! [Start] Add New task Modal !*/}
                {/*! ================================================================ !*/}
                <div className="modal fade" id="addNewTasks" tabIndex={-1}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="mb-4">
                                    <label htmlFor="taskName" className="form-label">Name</label>
                                    <input type="text" id="taskName" className="form-control" placeholder="Task Name" />
                                    <small className="text-muted">Tasks name for your todo</small>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Note/Description</label>
                                    <div className="editor">
                                        <div className="ht-150" id="notesEditorAdd" />
                                    </div>
                                    <small className="text-muted">Note/Description max 200 charectars</small>
                                </div>
                                <div id="taskDateRangeAdd" className="mb-4">
                                    <label className="form-label">Date Range:</label>
                                    <div className="input-group date input-daterange">
                                        <input type="text" name="range-start" className="form-control" placeholder="Start date..." autoComplete="off" />
                                        <span className="input-group-text">to</span>
                                        <input type="text" name="range-end" className="form-control" placeholder="End date..." autoComplete="off" />
                                    </div>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label">Status:</label>
                                    <select className="form-control" data-select2-selector="status">
                                        <option value="primary" data-bg="bg-primary" selected>Inprogress</option>
                                        <option value="secondary" data-bg="bg-secondary">Pending</option>
                                        <option value="success" data-bg="bg-success">Completed</option>
                                        <option value="danger" data-bg="bg-danger">Rejected</option>
                                        <option value="warning" data-bg="bg-warning">Upcoming</option>
                                    </select>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label">Priority:</label>
                                    <select className="form-select form-control" data-select2-selector="priority">
                                        <option value="primary" data-bg="bg-primary">Low</option>
                                        <option value="teal" data-bg="bg-teal">Normal</option>
                                        <option value="success" data-bg="bg-success">Medium</option>
                                        <option value="warning" data-bg="bg-warning" selected>High</option>
                                        <option value="danger" data-bg="bg-danger">Urgent</option>
                                    </select>
                                </div>
                                <div className="form-group mb-4">
                                    <label className="form-label">Assignee:</label>
                                    <select className="form-select form-control" data-select2-selector="user" multiple>
                                        <option value="alex@outlook.com" data-user={1} selected>alex@outlook.com</option>
                                        <option value="john.deo@outlook.com" data-user={2}>john.deo@outlook.com</option>
                                        <option value="green.cutte@outlook.com" data-user={3}>green.cutte@outlook.com</option>
                                        <option value="nancy.elliot@outlook.com" data-user={4}>nancy.elliot@outlook.com</option>
                                        <option value="mar.audrey@gmail.com" data-user={5}>mar.audrey@gmail.com</option>
                                        <option value="erna.serpa@outlook.com" data-user={6}>erna.serpa@outlook.com</option>
                                        <option value="alex@outlook.com" data-user={7}>alex@outlook.com</option>
                                        <option value="john.deo@outlook.com" data-user={8}>john.deo@outlook.com</option>
                                        <option value="green.cutte@outlook.com" data-user={9}>green.cutte@outlook.com</option>
                                        <option value="nancy.elliot@outlook.com" data-user={10}>nancy.elliot@outlook.com</option>
                                        <option value="mar.audrey@gmail.com" data-user={11}>mar.audrey@gmail.com</option>
                                        <option value="erna.serpa@outlook.com" data-user={12}>erna.serpa@outlook.com</option>
                                    </select>
                                </div>
                                <div className="form-group mb-0">
                                    <label className="form-label">Tags:</label>
                                    <select className="form-select form-control" data-select2-selector="tag" multiple>
                                        <option value="primary" data-bg="bg-primary">Team</option>
                                        <option value="teal" data-bg="bg-teal">Primary</option>
                                        <option value="success" data-bg="bg-success">Updates</option>
                                        <option value="warning" data-bg="bg-warning" selected>Personal</option>
                                        <option value="danger" data-bg="bg-danger">Promotions</option>
                                        <option value="indigo" data-bg="bg-indigo">Customs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add Task</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*! ================================================================ !*/}
                {/*! [End] Add New task Modal !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! [Start] Tasks Details Offcanvas !*/}
                {/*! ================================================================ !*/}
                <div className="offcanvas offcanvas-end w-50" tabIndex={-1} id="tasksDetailsOffcanvas">
                    <div className="offcanvas-header border-bottom" style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <div className="d-flex align-items-center">
                            <div className="avatar-text avatar-md items-details-close-trigger" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Details Close"><i className="feather-arrow-left" /></div>
                            <span className="vr text-muted mx-4" />
                            <a href="javascript:void(0);">
                                <h2 className="fs-14 fw-bold text-truncate-1-line">Video conference with Canada Team</h2>
                                <span className="fs-12 fw-normal text-muted text-truncate-1-line">09:00am - 11:00am, Rangpur, Bangladesh.</span>
                            </a>
                        </div>
                        <div className="d-none d-md-flex gap-1 align-items-center justify-content-center">
                            <a href="javascript:void(0);" className="d-none d-lg-flex align-items-center fs-9 fw-bold text-uppercase text-dark py-2 px-3 border border-gray-2 rounded">
                                <i className="feather-link-2 me-2" />
                                <span className="text-nowrap">Copy Link</span>
                            </a>
                            <a href="javascript:void(0)" className="d-flex">
                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Add Contractors"><i className="feather-plus" /></div>
                            </a>
                            <a href="javascript:void(0)" className="d-flex successAlertMessage">
                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Remainder Notify"><i className="feather-bell" /></div>
                            </a>
                            <a href="javascript:void(0)" className="d-flex successAlertMessage">
                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Add to Favorite"><i className="feather-star" /></div>
                            </a>
                            <a href="javascript:void(0)" className="d-flex successAlertMessage">
                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Add to Calendar"><i className="feather-calendar" /></div>
                            </a>
                            <div className="dropdown d-none d-sm-block">
                                <a href="javascript:void(0)" className="d-flex" data-bs-toggle="dropdown" data-bs-offset="0,25">
                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="More Options">
                                        <i className="feather-more-vertical" />
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-eye-off me-3" />
                                            <span>Make Unread</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-sliders me-3" />
                                            <span>Filter Messages</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-archive me-3" />
                                            <span>Make as Archive</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-link-2 me-3" />
                                            <span>Attach files</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-calendar me-3" />
                                            <span>Set Due Date</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-eye me-3" />
                                            <span>Follow Task</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-bookmark me-3" />
                                            <span>Apply Labels</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-alert-triangle me-3" />
                                            <span>Report Spam</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-alert-octagon me-3" />
                                            <span>Report phishing</span>
                                        </a>
                                    </li>
                                    <li className="dropdown-divider" />
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-bell-off me-3" />
                                            <span>Mute Conversion</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-slash me-3" />
                                            <span>Block Conversion</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="dropdown-item">
                                            <i className="feather-trash-2 me-3" />
                                            <span>Delete Conversion</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas-body">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Status:</label>
                                    <select className="form-control" data-select2-selector="status">
                                        <option value="primary" data-bg="bg-primary" selected>Inprogress</option>
                                        <option value="secondary" data-bg="bg-secondary">Pending</option>
                                        <option value="success" data-bg="bg-success">Completed</option>
                                        <option value="danger" data-bg="bg-danger">Rejected</option>
                                        <option value="warning" data-bg="bg-warning">Upcoming</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Priority:</label>
                                    <select className="form-select form-control" data-select2-selector="priority">
                                        <option value="primary" data-bg="bg-primary">Low</option>
                                        <option value="teal" data-bg="bg-teal">Normal</option>
                                        <option value="success" data-bg="bg-success">Medium</option>
                                        <option value="warning" data-bg="bg-warning" selected>High</option>
                                        <option value="danger" data-bg="bg-danger">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Labels:</label>
                                    <select className="form-select form-control" data-select2-selector="label">
                                        <option value="primary" data-bg="bg-primary">Team</option>
                                        <option value="teal" data-bg="bg-teal">Primary</option>
                                        <option value="success" data-bg="bg-success">Updates</option>
                                        <option value="warning" data-bg="bg-warning">Personal</option>
                                        <option value="danger" data-bg="bg-danger" selected>Promotions</option>
                                        <option value="indigo" data-bg="bg-indigo">Customs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Types:</label>
                                    <select className="form-select form-control" data-select2-selector="type">
                                        <option value="primary" data-bg="bg-primary" selected>New</option>
                                        <option value="teal" data-bg="bg-teal">Pending</option>
                                        <option value="success" data-bg="bg-success">Progress</option>
                                        <option value="warning" data-bg="bg-warning">Completed</option>
                                        <option value="danger" data-bg="bg-danger">Everythings</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Tags:</label>
                                    <select className="form-select form-control" data-select2-selector="tag" multiple>
                                        <option value="primary" data-bg="bg-primary">Team</option>
                                        <option value="teal" data-bg="bg-teal">Primary</option>
                                        <option value="success" data-bg="bg-success">Updates</option>
                                        <option value="warning" data-bg="bg-warning" selected>Personal</option>
                                        <option value="danger" data-bg="bg-danger">Promotions</option>
                                        <option value="indigo" data-bg="bg-indigo">Customs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-4">
                                    <label className="form-label">Assignee:</label>
                                    <select className="form-select form-control" data-select2-selector="user" multiple>
                                        <option value="alex@outlook.com" data-user={1} selected>alex@outlook.com</option>
                                        <option value="john.deo@outlook.com" data-user={2}>john.deo@outlook.com</option>
                                        <option value="green.cutte@outlook.com" data-user={3}>green.cutte@outlook.com</option>
                                        <option value="nancy.elliot@outlook.com" data-user={4}>nancy.elliot@outlook.com</option>
                                        <option value="mar.audrey@gmail.com" data-user={5}>mar.audrey@gmail.com</option>
                                        <option value="erna.serpa@outlook.com" data-user={6}>erna.serpa@outlook.com</option>
                                        <option value="alex@outlook.com" data-user={7}>alex@outlook.com</option>
                                        <option value="john.deo@outlook.com" data-user={8}>john.deo@outlook.com</option>
                                        <option value="green.cutte@outlook.com" data-user={9}>green.cutte@outlook.com</option>
                                        <option value="nancy.elliot@outlook.com" data-user={10}>nancy.elliot@outlook.com</option>
                                        <option value="mar.audrey@gmail.com" data-user={11}>mar.audrey@gmail.com</option>
                                        <option value="erna.serpa@outlook.com" data-user={12}>erna.serpa@outlook.com</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div id="taskDateRange">
                                    <label className="form-label">Date Range:</label>
                                    <div className="input-group date input-daterange">
                                        <input type="text" name="range-start" className="form-control" placeholder="Start date..." autoComplete="off" />
                                        <span className="input-group-text">to</span>
                                        <input type="text" name="range-end" className="form-control" placeholder="End date..." autoComplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-5" />
                        {/*! BEGIN: Checklist !*/}
                        <div className="checklist">
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <h2 className="fs-16 fw-bold mb-1">Checklist</h2>
                                    <span className="fs-12 text-muted">Issues found checklist</span>
                                </div>
                                <a href="javascript:void(0);" className="avatar-text avatar-md">
                                    <i className="feather-info" />
                                </a>
                            </div>
                            <ul className="list-unstyled" id="checklist">
                                <li className="checked">Tested, debugged, and shipped 10s of 1000s of lines of code to various development teams.</li>
                                <li>Introduced Kanban Board style ticketing system to promote highly.</li>
                                <li>Utilized HTML, CSS, and JavaScript to create 100+ responsive landing pages for both company and client.</li>
                                <li className="checked">Rewrote HTML to meet industry and company standards for SEO and Accessibility.</li>
                                <li>Led bi-weekly stand-up to ensure team worked effectively.</li>
                                <li>Worked with Quality Assurance to get new pages/products tested.</li>
                            </ul>
                            <div className="input-group mt-3">
                                <input id="checklistInput" type="text" className="form-control" placeholder="Title..." />
                                <a href="javascript:void(0)" className="input-group-text addCheckList" onclick="newElement()">
                                    <i className="feather-plus me-2" />
                                    <span>Add Checklist</span>
                                </a>
                            </div>
                        </div>
                        {/*! END: Checklist !*/}
                        <hr className="my-5" />
                        {/*! BEGIN: Notes !*/}
                        <div className="notes">
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <h2 className="fs-16 fw-bold mb-1">Notes</h2>
                                    <span className="fs-12 text-muted">Task note list</span>
                                </div>
                                <a href="javascript:void(0);" className="avatar-text avatar-md">
                                    <i className="feather-info" />
                                </a>
                            </div>
                            <div className="editor">
                                <div className="ht-200" id="notesEditor" />
                            </div>
                        </div>
                        {/*! END: Notes !*/}
                        <hr className="my-5" />
                        {/*! BEGIN: Comments !*/}
                        <div className="comments">
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <h2 className="fs-16 fw-700 mb-1">Comments</h2>
                                    <small className="text-muted">Responses for this tasks</small>
                                </div>
                                <a href="javascript:void(0);" className="avatar-text avatar-md">
                                    <i className="feather-info" />
                                </a>
                            </div>
                            {/*! BEGIN: comment !*/}
                            <div className="d-flex mb-4">
                                <div className="avatar-image me-3">
                                    <a href="javascript:void(0);">
                                        <img src="assets/images/avatar/1.png" className="img-fluid" alt />
                                    </a>
                                </div>
                                <div className>
                                    <a href="javascript:void(0);" className="mb-1 d-flex align-items-center">
                                        <span>Alexandra Della</span>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2 d-none d-sm-block" />
                                        <span className="fs-10 text-uppercase text-muted d-none d-sm-block">57 Min Ago</span>
                                    </a>
                                    <div className="d-flex align-items-center">
                                        <p className="fs-12 text-dark p-3 bg-gray-200 rounded-3 mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                        <div className="dropdown ms-2">
                                            <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                                <i className="feather-more-vertical fs-10" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-bell-off fs-10 me-3" />
                                                        <span className="fs-11">Mute</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-eye-off fs-10 me-3" />
                                                        <span className="fs-11">Hide</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-slash fs-10 me-3" />
                                                        <span className="fs-11">Block</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-flag fs-10 me-3" />
                                                        <span className="fs-11">Report</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="fs-10 text-uppercase d-flex align-items-center mt-2">
                                        <a href="javascript:void(0);" className="text-muted">Like (6)</a>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                        <a href="javascript:void(0);" className="text-muted">Reply</a>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                        <a href="javascript:void(0);" className="text-muted">5 Replies</a>
                                    </div>
                                </div>
                            </div>
                            {/*! BEGIN: reply !*/}
                            <div className="ms-4">
                                <div className="ms-4">
                                    {/*! BEGIN: single-reply !*/}
                                    <div className="d-flex mb-4">
                                        <div className="avatar-image me-3">
                                            <a href="javascript:void(0);">
                                                <img src="assets/images/avatar/3.png" className="img-fluid" alt />
                                            </a>
                                        </div>
                                        <div className>
                                            <a href="javascript:void(0);" className="mb-1 d-flex align-items-center">
                                                <span>Marianne Audrey</span>
                                                <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2 d-none d-sm-block" />
                                                <span className="fs-10 text-uppercase text-muted d-none d-sm-block">50 Min Ago</span>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <p className="fs-12 text-dark p-3 bg-gray-200 rounded-3 mb-0">Wishing calling is warrant settled was lucky.</p>
                                                <div className="dropdown ms-2">
                                                    <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                                        <i className="feather-more-vertical fs-10" />
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-bell-off fs-10 me-3" />
                                                                <span className="fs-11">Mute</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-eye-off fs-10 me-3" />
                                                                <span className="fs-11">Hide</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-divider" />
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-slash fs-10 me-3" />
                                                                <span className="fs-11">Block</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-flag fs-10 me-3" />
                                                                <span className="fs-11">Report</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="fs-10 text-uppercase d-flex align-items-center mt-2">
                                                <a href="javascript:void(0);" className="text-muted">Like</a>
                                                <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                                <a href="javascript:void(0);" className="text-muted">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*! BEGIN: single-reply !*/}
                                    <div className="d-flex mb-4">
                                        <div className="avatar-image me-3">
                                            <a href="javascript:void(0);">
                                                <img src="assets/images/avatar/2.png" className="img-fluid" alt />
                                            </a>
                                        </div>
                                        <div className>
                                            <a href="javascript:void(0);" className="mb-1 d-flex align-items-center">
                                                <span>Curtis Green</span>
                                                <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2 d-none d-sm-block" />
                                                <span className="fs-10 text-uppercase text-muted d-none d-sm-block">45 Min Ago</span>
                                            </a>
                                            <div className="d-flex align-items-center">
                                                <p className="fs-12 text-dark p-3 bg-gray-200 rounded-3 mb-0">Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection.</p>
                                                <div className="dropdown ms-2">
                                                    <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                                        <i className="feather-more-vertical fs-10" />
                                                    </a>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-bell-off fs-10 me-3" />
                                                                <span className="fs-11">Mute</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-eye-off fs-10 me-3" />
                                                                <span className="fs-11">Hide</span>
                                                            </a>
                                                        </li>
                                                        <li className="dropdown-divider" />
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-slash fs-10 me-3" />
                                                                <span className="fs-11">Block</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:void(0);" className="dropdown-item">
                                                                <i className="feather-flag fs-10 me-3" />
                                                                <span className="fs-11">Report</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="fs-10 text-uppercase d-flex align-items-center mt-2">
                                                <a href="javascript:void(0);" className="text-muted">Like (2)</a>
                                                <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                                <a href="javascript:void(0);" className="text-muted">Reply</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-center text-muted">
                                            <i className="feather-more-horizontal fs-12" />
                                            <span className="fs-10 text-uppercase ms-2 text-truncate-1-line">Load More Replies</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*! BEGIN: comment !*/}
                            <div className="d-flex mb-4">
                                <div className="avatar-image me-3">
                                    <a href="javascript:void(0);">
                                        <img src="assets/images/avatar/4.png" className="img-fluid" alt />
                                    </a>
                                </div>
                                <div className>
                                    <a href="javascript:void(0);" className="mb-1 d-flex align-items-center">
                                        <span>Holland Scott</span>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2 d-none d-sm-block" />
                                        <span className="fs-10 text-uppercase text-muted d-none d-sm-block">42 Min Ago</span>
                                    </a>
                                    <div className="d-flex align-items-center">
                                        <p className="fs-12 text-dark p-3 bg-gray-200 rounded-3 mb-0">See resolved goodness felicity shy civility domestic had but Drawings offended yet answered Jennings perceive.</p>
                                        <div className="dropdown ms-2">
                                            <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                                <i className="feather-more-vertical fs-10" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-bell-off fs-10 me-3" />
                                                        <span className="fs-11">Mute</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-eye-off fs-10 me-3" />
                                                        <span className="fs-11">Hide</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-slash fs-10 me-3" />
                                                        <span className="fs-11">Block</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-flag fs-10 me-3" />
                                                        <span className="fs-11">Report</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="fs-10 text-uppercase d-flex align-items-center mt-2">
                                        <a href="javascript:void(0);" className="text-muted">Like (8)</a>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                        <a href="javascript:void(0);" className="text-muted">Reply</a>
                                    </div>
                                </div>
                            </div>
                            {/*! BEGIN: comment !*/}
                            <div className="d-flex mb-4">
                                <div className="avatar-image me-3">
                                    <a href="javascript:void(0);">
                                        <img src="assets/images/avatar/5.png" className="img-fluid" alt />
                                    </a>
                                </div>
                                <div className>
                                    <a href="javascript:void(0);" className="mb-1 d-flex align-items-center">
                                        <span>Olive Delarosa</span>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2 d-none d-sm-block" />
                                        <span className="fs-10 text-uppercase text-muted d-none d-sm-block">34 Min Ago</span>
                                    </a>
                                    <div className="d-flex align-items-center">
                                        <p className="fs-12 text-dark p-3 bg-gray-200 rounded-3 mb-0">Dependent on so extremely delivered by. Yet no jokes worse her why.</p>
                                        <div className="dropdown ms-2">
                                            <a href="javascript:void(0);" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                                <i className="feather-more-vertical fs-10" />
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-bell-off fs-10 me-3" />
                                                        <span className="fs-11">Mute</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-eye-off fs-10 me-3" />
                                                        <span className="fs-11">Hide</span>
                                                    </a>
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-slash fs-10 me-3" />
                                                        <span className="fs-11">Block</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" className="dropdown-item">
                                                        <i className="feather-flag fs-10 me-3" />
                                                        <span className="fs-11">Report</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="fs-10 text-uppercase d-flex align-items-center mt-2">
                                        <a href="javascript:void(0);" className="text-muted">Like (8)</a>
                                        <span className="wd-3 ht-3 bg-gray-500 rounded-circle d-flex mx-2" />
                                        <a href="javascript:void(0);" className="text-muted">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <label className="mb-1">Add Comment</label>
                                <textarea rows={5} className="form-control" placeholder="Your comment...." defaultValue={""} />
                                <a href="javascript:void(0);" className="btn btn-primary d-inline-block mt-4">Add Comment</a>
                            </div>
                        </div>
                        {/*! END: Comments !*/}
                    </div>
                </div>
                {/*! ================================================================ !*/}
                {/*! [End] Tasks Details Offcanvas !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! [Start] Search Modal !*/}
                {/*! ================================================================ !*/}
                <div className="modal fade-scale" id="searchModal" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-lg modal-dialog-top modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header search-form py-0">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <i className="feather-search fs-4 text-muted" />
                                    </span>
                                    <input type="text" className="form-control search-input-field" placeholder="Search..." />
                                    <span className="input-group-text">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </span>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="searching-for mb-5">
                                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">I'm searching for...</h4>
                                    <div className="row g-1">
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <i className="feather-compass" />
                                                <span>Recent</span>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <i className="feather-command" />
                                                <span>Command</span>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <i className="feather-users" />
                                                <span>Peoples</span>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <i className="feather-file" />
                                                <span>Files</span>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <i className="feather-video" />
                                                <span>Medias</span>
                                            </a>
                                        </div>
                                        <div className="col-md-4 col-xl-2">
                                            <a href="javascript:void(0);" className="d-flex align-items-center gap-2 px-3 lh-lg border rounded-pill">
                                                <span>More</span>
                                                <i className="feather-chevron-down" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-result mb-5">
                                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">Recnet <span className="badge small rounded ms-1 text-dark">3</span></h4>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-airplay fs-5" />
                                            <div className="fs-13 fw-semibold">CRM dashboard redesign</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">/<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-file-plus fs-5" />
                                            <div className="fs-13 fw-semibold">Create new eocument</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">N /<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-user-plus fs-5" />
                                            <div className="fs-13 fw-semibold">Invite project colleagues</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">P /<i className="feather-command ms-1" /></a>
                                    </div>
                                </div>
                                <div className="command-result mb-5">
                                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">Command <span className="badge small rounded ms-1 text-dark">5</span></h4>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-user fs-5" />
                                            <div className="fs-13 fw-semibold">My profile</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">P /<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-users fs-5" />
                                            <div className="fs-13 fw-semibold">Team profile</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">T /<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-user-plus fs-5" />
                                            <div className="fs-13 fw-semibold">Invite colleagues</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">I /<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-briefcase fs-5" />
                                            <div className="fs-13 fw-semibold">Create new project</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">CP /<i className="feather-command ms-1" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-life-buoy fs-5" />
                                            <div className="fs-13 fw-semibold">Support center</div>
                                        </a>
                                        <a href="javascript:void(0);" className="badge border rounded text-dark">SC /<i className="feather-command ms-1" /></a>
                                    </div>
                                </div>
                                <div className="file-result mb-4">
                                    <h4 className="fs-13 fw-normal text-gray-600 mb-3">Files <span className="badge small rounded ms-1 text-dark">3</span></h4>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-folder-plus fs-5" />
                                            <div className="fs-13 fw-semibold">CRM Desing Project <span className="fs-12 fw-normal text-muted">(56.74 MB)</span></div>
                                        </a>
                                        <a href="javascript:void(0);" className="file-download"><i className="feather-download" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-folder-plus fs-5" />
                                            <div className="fs-13 fw-semibold">Admin Dashboard Project <span className="fs-12 fw-normal text-muted">(46.83 MB)</span></div>
                                        </a>
                                        <a href="javascript:void(0);" className="file-download"><i className="feather-download" /></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="javascript:void(0);" className="d-flex align-items-start gap-3">
                                            <i className="feather-folder-plus fs-5" />
                                            <div className="fs-13 fw-semibold">CRM Dashboard Project <span className="fs-12 fw-normal text-muted">(68.59 MB)</span></div>
                                        </a>
                                        <a href="javascript:void(0);" className="file-download"><i className="feather-download" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*! ================================================================ !*/}
                {/*! [End] Search Modal !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! [Start] Language Select !*/}
                {/*! ================================================================ !*/}
                <div className="modal fade-scale" id="languageSelectModal" aria-hidden="true" aria-labelledby="languageSelectModalLabel" tabIndex={-1}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="languageSelectModalLabel">Select Language</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/sa.svg" alt className="img-fluid" /></div>
                                            <span>Arabic </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/bd.svg" alt className="img-fluid" /></div>
                                            <span>Bengali </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/ch.svg" alt className="img-fluid" /></div>
                                            <span>Chinese </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/hr.svg" alt className="img-fluid" /></div>
                                            <span>Croatian </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/dk.svg" alt className="img-fluid" /></div>
                                            <span>Danish </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/nl.svg" alt className="img-fluid" /></div>
                                            <span>Dutch </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select active">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/us.svg" alt className="img-fluid" /></div>
                                            <span>English </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/fi.svg" alt className="img-fluid" /></div>
                                            <span>Filipino </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/fr.svg" alt className="img-fluid" /></div>
                                            <span>French </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/de.svg" alt className="img-fluid" /></div>
                                            <span>German </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/il.svg" alt className="img-fluid" /></div>
                                            <span>Hebrew </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/in.svg" alt className="img-fluid" /></div>
                                            <span>Hindi </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/id.svg" alt className="img-fluid" /></div>
                                            <span>Indonesian </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/it.svg" alt className="img-fluid" /></div>
                                            <span>Italian </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/jp.svg" alt className="img-fluid" /></div>
                                            <span>Japanese </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/kr.svg" alt className="img-fluid" /></div>
                                            <span>Korean </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/ir.svg" alt className="img-fluid" /></div>
                                            <span>Persian </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/pt.svg" alt className="img-fluid" /></div>
                                            <span>Portuguese </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/ru.svg" alt className="img-fluid" /></div>
                                            <span>Russian </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/es.svg" alt className="img-fluid" /></div>
                                            <span>Spanish </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/sv.svg" alt className="img-fluid" /></div>
                                            <span>Swedish </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/tr.svg" alt className="img-fluid" /></div>
                                            <span>Turkish </span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/pk.svg" alt className="img-fluid" /></div>
                                            <span>Urdo</span>
                                        </a>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 language_select">
                                        <a href="javascript:void(0);" className="d-flex align-items-center gap-2">
                                            <div className="avatar-image avatar-sm"><img src="assets/vendors/img/flags/1x1/vi.svg" alt className="img-fluid" /></div>
                                            <span>Vietnamese</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*! ================================================================ !*/}
                {/*! [End] Language Select !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! BEGIN: Downloading Toast !*/}
                {/*! ================================================================ !*/}
                <div className="position-fixed" style={{ right: 5, bottom: 5, zIndex: 999999 }}>
                    <div id="toast" className="toast bg-black hide" data-bs-delay={3000} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header px-3 bg-transparent d-flex align-items-center justify-content-between border-bottom border-light border-opacity-10">
                            <div className="text-white mb-0 mr-auto">Downloading...</div>
                            <a href="javascript:void(0)" className="ms-2 mb-1 close fw-normal" data-bs-dismiss="toast" aria-label="Close">
                                <span className="text-white">×</span>
                            </a>
                        </div>
                        <div className="toast-body p-3 text-white">
                            <h6 className="fs-13 text-white">Project.zip</h6>
                            <span className="text-light fs-11">4.2mb of 5.5mb</span>
                        </div>
                        <div className="toast-footer p-3 pt-0 border-top border-light border-opacity-10">
                            <div className="progress mt-3" style={{ height: 5 }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated w-75 bg-dark" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </div>
                {/*! ================================================================ !*/}
                {/*! END: Downloading Toast !*/}
                {/*! ================================================================ !*/}
                {/*! ================================================================ !*/}
                {/*! BEGIN: Theme Customizer !*/}
                {/*! ================================================================ !*/}
                <div className="theme-customizer">
                    <div className="customizer-handle">
                        <a href="javascript:void(0);" className="cutomizer-open-trigger bg-primary">
                            <i className="feather-settings" />
                        </a>
                    </div>
                    <div className="customizer-sidebar-wrapper">
                        <div className="customizer-sidebar-header px-4 ht-80 border-bottom d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Theme Settings</h5>
                            <a href="javascript:void(0);" className="cutomizer-close-trigger d-flex">
                                <i className="feather-x" />
                            </a>
                        </div>
                        <div className="customizer-sidebar-body position-relative p-4" data-scrollbar-target="#psScrollbarInit">
                            {/*! BEGIN: [Navigation] !*/}
                            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                                <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Navigation</label>
                                <div className="row g-2 theme-options-items app-navigation" id="appNavigationList">
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-navigation-light" name="app-navigation" defaultValue={1} data-app-navigation="app-navigation-light" defaultChecked />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-light">Light</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-navigation-dark" name="app-navigation" defaultValue={2} data-app-navigation="app-navigation-dark" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-navigation-dark">Dark</label>
                                    </div>
                                </div>
                            </div>
                            {/*! END: [Navigation] !*/}
                            {/*! BEGIN: [Header] !*/}
                            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set mt-5">
                                <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Header</label>
                                <div className="row g-2 theme-options-items app-header" id="appHeaderList">
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-header-light" name="app-header" defaultValue={1} data-app-header="app-header-light" defaultChecked />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-light">Light</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-header-dark" name="app-header" defaultValue={2} data-app-header="app-header-dark" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-header-dark">Dark</label>
                                    </div>
                                </div>
                            </div>
                            {/*! END: [Header] !*/}
                            {/*! BEGIN: [Skins] !*/}
                            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-5 border border-gray-2 theme-options-set">
                                <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Skins</label>
                                <div className="row g-2 theme-options-items app-skin" id="appSkinList">
                                    <div className="col-6 text-center position-relative single-option light-button active">
                                        <input type="radio" className="btn-check" id="app-skin-light" name="app-skin" defaultValue={1} data-app-skin="app-skin-light" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-light">Light</label>
                                    </div>
                                    <div className="col-6 text-center position-relative single-option dark-button">
                                        <input type="radio" className="btn-check" id="app-skin-dark" name="app-skin" defaultValue={2} data-app-skin="app-skin-dark" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-skin-dark">Dark</label>
                                    </div>
                                </div>
                            </div>
                            {/*! END: [Skins] !*/}
                            {/*! BEGIN: [Typography] !*/}
                            <div className="position-relative px-3 pb-3 pt-4 mt-3 mb-0 border border-gray-2 theme-options-set">
                                <label className="py-1 px-2 fs-8 fw-bold text-uppercase text-muted text-spacing-2 bg-white border border-gray-2 position-absolute rounded-2 options-label" style={{ top: '-12px' }}>Typography</label>
                                <div className="row g-2 theme-options-items font-family" id="fontFamilyList">
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-lato" name="font-family" defaultValue={1} data-font-family="app-font-family-lato" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-lato">Lato</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-rubik" name="font-family" defaultValue={2} data-font-family="app-font-family-rubik" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-rubik">Rubik</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-inter" name="font-family" defaultValue={3} data-font-family="app-font-family-inter" defaultChecked />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-inter">Inter</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-cinzel" name="font-family" defaultValue={4} data-font-family="app-font-family-cinzel" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-cinzel">Cinzel</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-nunito" name="font-family" defaultValue={6} data-font-family="app-font-family-nunito" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-nunito">Nunito</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-roboto" name="font-family" defaultValue={7} data-font-family="app-font-family-roboto" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto">Roboto</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-ubuntu" name="font-family" defaultValue={8} data-font-family="app-font-family-ubuntu" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ubuntu">Ubuntu</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-poppins" name="font-family" defaultValue={9} data-font-family="app-font-family-poppins" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-poppins">Poppins</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-raleway" name="font-family" defaultValue={10} data-font-family="app-font-family-raleway" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-raleway">Raleway</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-system-ui" name="font-family" defaultValue={11} data-font-family="app-font-family-system-ui" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-system-ui">System UI</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-noto-sans" name="font-family" defaultValue={12} data-font-family="app-font-family-noto-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-noto-sans">Noto Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-fira-sans" name="font-family" defaultValue={13} data-font-family="app-font-family-fira-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-fira-sans">Fira Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-work-sans" name="font-family" defaultValue={14} data-font-family="app-font-family-work-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-work-sans">Work Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-open-sans" name="font-family" defaultValue={15} data-font-family="app-font-family-open-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-open-sans">Open Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-maven-pro" name="font-family" defaultValue={16} data-font-family="app-font-family-maven-pro" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-maven-pro">Maven Pro</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-quicksand" name="font-family" defaultValue={17} data-font-family="app-font-family-quicksand" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-quicksand">Quicksand</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-montserrat" name="font-family" defaultValue={18} data-font-family="app-font-family-montserrat" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat">Montserrat</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-josefin-sans" name="font-family" defaultValue={19} data-font-family="app-font-family-josefin-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-josefin-sans">Josefin Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-ibm-plex-sans" name="font-family" defaultValue={20} data-font-family="app-font-family-ibm-plex-sans" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-ibm-plex-sans">IBM Plex Sans</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-source-sans-pro" name="font-family" defaultValue={5} data-font-family="app-font-family-source-sans-pro" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-source-sans-pro">Source Sans Pro</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-montserrat-alt" name="font-family" defaultValue={21} data-font-family="app-font-family-montserrat-alt" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-montserrat-alt">Montserrat Alt</label>
                                    </div>
                                    <div className="col-6 text-center single-option">
                                        <input type="radio" className="btn-check" id="app-font-family-roboto-slab" name="font-family" defaultValue={22} data-font-family="app-font-family-roboto-slab" />
                                        <label className="py-2 fs-9 fw-bold text-dark text-uppercase text-spacing-1 border border-gray-2 w-100 h-100 c-pointer position-relative options-label" htmlFor="app-font-family-roboto-slab">Roboto Slab</label>
                                    </div>
                                </div>
                            </div>
                            {/*! END: [Typography] !*/}
                        </div>
                        <div className="customizer-sidebar-footer px-4 ht-60 border-top d-flex align-items-center gap-2">
                            <div className="flex-fill w-50">
                                <a href="javascript:void(0);" className="btn btn-danger" data-style="reset-all-common-style">Reset</a>
                            </div>
                            <div className="flex-fill w-50">
                                <a href="https://www.themewagon.com/themes/Duralux-admin" target="_blank" className="btn btn-primary">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks
