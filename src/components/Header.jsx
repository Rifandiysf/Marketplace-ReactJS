
const Header = () => {
    return (
        <div className="header">
            <div className="row g-0 align-items-center">
                <div className="col-xxl-6 col-xl-5 col-4 d-flex align-items-center gap-20">
                    <div className="main-logo d-lg-block d-none">
                        <div className="logo-big">
                            <a href="index.html">
                                <img src="assets/images/logo-black.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="logo-small">
                            <a href="index.html">
                                <img src="assets/images/logo-small.png" alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="nav-close-btn">
                        <button id="navClose"><i className="fa-light fa-bars-sort"></i></button>
                    </div>
                    <a href="#" target="_blank" className="btn btn-sm btn-primary site-view-btn"><i
                        className="fa-light fa-globe me-1"></i> <span>View Website</span></a>
                </div>
                <div className="col-4 d-lg-none">
                    <div className="mobile-logo">
                        <a href="index.html">
                            <img src="assets/images/logo-black.png" alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-4">
                    <div className="header-right-btns d-flex justify-content-end align-items-center">
                        <div className="header-collapse-group">
                            <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                                <form className="header-form">
                                    <input type="search" name="search" placeholder="Search..." required />
                                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                                <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                                    <div className="header-btn-box">
                                        <button className="header-btn" id="messageDropdown" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="fa-light fa-comment-dots"></i>
                                            <span className="badge bg-danger">3</span>
                                        </button>
                                        <ul className="message-dropdown dropdown-menu" aria-labelledby="messageDropdown">
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar.png" alt="image" />
                                                    </div>
                                                    <div className="msg-txt">
                                                        <span className="name">Archer Cowie</span>
                                                        <span className="msg-short">There are many variations of passages of
                                                            Lorem Ipsum.</span>
                                                        <span className="time">2 Hours ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-2.png" alt="image" />
                                                    </div>
                                                    <div className="msg-txt">
                                                        <span className="name">Cody Rodway</span>
                                                        <span className="msg-short">There are many variations of passages of
                                                            Lorem Ipsum.</span>
                                                        <span className="time">2 Hours ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-3.png" alt="image" />
                                                    </div>
                                                    <div className="msg-txt">
                                                        <span className="name">Zane Bain</span>
                                                        <span className="msg-short">There are many variations of passages of
                                                            Lorem Ipsum.</span>
                                                        <span className="time">2 Hours ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="show-all-btn">Show all message</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-btn-box">
                                        <button className="header-btn" id="notificationDropdown" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="fa-light fa-bell"></i>
                                            <span className="badge bg-danger">9+</span>
                                        </button>
                                        <ul className="notification-dropdown dropdown-menu"
                                            aria-labelledby="notificationDropdown">
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon text-primary"><i
                                                            className="fa-solid fa-thumbs-up"></i></span> <span
                                                                className="fw-bold">Archer</span> Likes your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-2.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon text-success"><i
                                                            className="fa-solid fa-comment-dots"></i></span> <span
                                                                className="fw-bold">Cody</span> Commented on your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-3.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon"><i
                                                            className="fa-solid fa-share"></i></span> <span
                                                                className="fw-bold">Zane</span> Shared your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-4.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon text-primary"><i
                                                            className="fa-solid fa-thumbs-up"></i></span> <span
                                                                className="fw-bold">Christopher</span> Likes your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-5.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon text-success"><i
                                                            className="fa-solid fa-comment-dots"></i></span> <span
                                                                className="fw-bold">Charlie</span> Commented on your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex align-items-center">
                                                    <div className="avatar">
                                                        <img src="assets/images/avatar-6.png" alt="image" />
                                                    </div>
                                                    <div className="notification-txt">
                                                        <span className="notification-icon"><i
                                                            className="fa-solid fa-share"></i></span> <span
                                                                className="fw-bold">Jayden</span> Shared your post
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="show-all-btn">Show all message</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-btn-box">
                                        <div className="dropdown">
                                            <button className="header-btn" data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside" aria-expanded="false">
                                                <i className="fa-light fa-calculator"></i>
                                            </button>
                                            <ul className="dropdown-menu calculator-dropdown">
                                                <div className="dgb-calc-box">
                                                    <div>
                                                        <input type="text" id="dgbCalcResult" placeholder="0"
                                                            autoComplete="off" readOnly />
                                                    </div>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className="bg-danger">C</td>
                                                                <td className="bg-secondary">CE</td>
                                                                <td className="dgb-calc-oprator bg-primary">/</td>
                                                                <td className="dgb-calc-oprator bg-primary">*</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>8</td>
                                                                <td>9</td>
                                                                <td className="dgb-calc-oprator bg-primary">-</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>5</td>
                                                                <td>6</td>
                                                                <td className="dgb-calc-oprator bg-primary">+</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>2</td>
                                                                <td>3</td>
                                                                <td rowSpan="2" className="dgb-calc-sum bg-primary">=</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="2">0</td>
                                                                <td>.</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="header-btn fullscreen-btn" id="btnFullscreen"><i
                                        className="fa-light fa-expand"></i></button>
                                </div>
                            </div>
                        </div>
                        <button className="header-btn header-collapse-group-btn d-lg-none"><i
                            className="fa-light fa-ellipsis-vertical"></i></button>
                        <button className="header-btn theme-settings-btn d-lg-none"><i className="fa-light fa-gear"></i></button>
                        <div className="header-btn-box profile-btn-box">
                            <button className="profile-btn" data-bs-toggle="dropdown" aria-expanded="false" >
                                <img src="assets/images/admin.png" alt="image" />
                            </button>
                            <ul className="dropdown-menu profile-dropdown-menu">
                                <li>
                                    <div className="dropdown-txt text-center">
                                        <p className="mb-0">Shaikh Abu Dardah</p>
                                        <span className="d-block">Web Developer</span>
                                        <div className="d-flex justify-content-center">
                                            <div className="form-check pt-3">
                                                <input className="form-check-input" type="checkbox" id="seeProfileAsSidebar" />
                                                <label className="form-check-label" htmlFor="seeProfileAsSidebar">See as
                                                    sidebar</label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a className="dropdown-item" href="view-profile.html"><span className="dropdown-icon"><i
                                    className="fa-regular fa-circle-user"></i></span> Profile</a></li>
                                <li><a className="dropdown-item" href="chat.html"><span className="dropdown-icon"><i
                                    className="fa-regular fa-message-lines"></i></span> Message</a></li>
                                <li><a className="dropdown-item" href="task.html"><span className="dropdown-icon"><i
                                    className="fa-regular fa-calendar-check"></i></span> Taskboard</a></li>
                                <li><a className="dropdown-item" href="#"><span className="dropdown-icon"><i
                                    className="fa-regular fa-circle-question"></i></span> Help</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="edit-profile.html"><span className="dropdown-icon"><i
                                    className="fa-regular fa-gear"></i></span> Settings</a></li>
                                <li><a className="dropdown-item" href="login.html"><span className="dropdown-icon"><i
                                    className="fa-regular fa-arrow-right-from-bracket"></i></span> Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header