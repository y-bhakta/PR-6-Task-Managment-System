import React from 'react'

const Tables = ({ list, handelDelete, handelEdit }) => {
    return (
        <>
            <main className="nxl-container">
                <div className="nxl-content">
                    {/* [ page-header ] start */}
                    <div className="page-header">
                        <div className="page-header-left d-flex align-items-center">
                            <div className="page-header-title">
                                <h5 className="m-b-10">Widgets</h5>
                            </div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item">Tables</li>
                            </ul>
                        </div>
                        <div className="page-header-right ms-auto">
                            <div className="page-header-right-items">
                                <div className="d-flex d-md-none">
                                    <a href="javascript:void(0)" className="page-header-right-close-toggle">
                                        <i className="feather-arrow-left me-2" />
                                        <span>Back</span>
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                                    <div className="dropdown filter-dropdown">
                                        <a className="btn btn-md btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10" data-bs-auto-close="outside">
                                            <i className="feather-filter me-2" />
                                            <span>Filter</span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div className="dropdown-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="Role" defaultChecked="checked" />
                                                    <label className="custom-control-label c-pointer" htmlFor="Role">Role</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="Team" defaultChecked="checked" />
                                                    <label className="custom-control-label c-pointer" htmlFor="Team">Team</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="Email" defaultChecked="checked" />
                                                    <label className="custom-control-label c-pointer" htmlFor="Email">Email</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="Member" defaultChecked="checked" />
                                                    <label className="custom-control-label c-pointer" htmlFor="Member">Member</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="Recommendation" defaultChecked="checked" />
                                                    <label className="custom-control-label c-pointer" htmlFor="Recommendation">Recommendation</label>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider" />
                                            <a href="javascript:void(0);" className="dropdown-item">
                                                <i className="feather-plus me-3" />
                                                <span>Create New</span>
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item">
                                                <i className="feather-filter me-3" />
                                                <span>Manage Filter</span>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0);" className="btn btn-md btn-primary">
                                        <i className="feather-plus me-2" />
                                        <span>Add widget</span>
                                    </a>
                                </div>
                            </div>
                            <div className="d-md-none d-flex align-items-center">
                                <a href="javascript:void(0)" className="page-header-right-open-toggle">
                                    <i className="feather-align-right fs-20" />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* [ page-header ] end */}
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. No</th>
                                            <th scope="col">Task Name</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list.map((item, i) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{i + 1}</td>
                                                        <td>{item.task}</td>
                                                        <td className='d-flex'>
                                                            <button type='button' className='btn btn-danger' onClick={() => handelDelete(item.id)}>Delete</button> || 
                                                            <button type='button' className='btn btn-success' onClick={() => handelEdit(item.id)}>Edit</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ Footer ] start */}
                <footer className="footer">
                    <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
                        <span>Copyright ©</span>
                    </p>
                    <p><span>By: <a target="_blank" href="https://wrapbootstrap.com/user/theme_ocean">theme_ocean</a></span> • <span>Distributed by: <a target="_blank" href="https://themewagon.com">ThemeWagon</a></span></p>
                    <div className="d-flex align-items-center gap-4">
                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Help</a>
                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Terms</a>
                        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Privacy</a>
                    </div>
                </footer>
                {/* [ Footer ] end */}
            </main>

        </>
    )
}

export default Tables
