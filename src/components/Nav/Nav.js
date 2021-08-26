import React, {Component, useState} from 'react';
import logo from '../../assets/images/banksepah-logo01.png';
import avatar from '../../assets/images/avatar.jpg';
import {Squash as Hamburger} from "hamburger-react";
import {Link} from "react-router-dom";
import Login from "../../views/Login";

class Nav extends Component {
    render() {
        return (
            <header className="shadow fixed-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="menu">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                                    <a className="navbar-brand flex-shrink-0" href="#">
                                        <img src={logo} alt="banksepah" className="img-fluid"/>
                                    </a>
                                    <div className="search d-lg-none flex-fill">
                                        <form>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="جستجو"
                                                       aria-label="جستجو" aria-describedby="button-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="submit"
                                                            id="button-addon2">
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="offcanvas"
                                            data-target="#navbarSupportedContent"
                                            aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <Hamburger color="#ececec"/>
                                    </button>

                                    <div className="offcanvas-collapse navbar-collapse" id="navbarSupportedContent">
                                        <div className="login-logged-in d-lg-none">
                                            <div className="part-without-login">
                                                <div className="login-employees-customers">
                                                    <div className="login-employees flex-fill">
                                                        <Link to="/login#pills-employees" className="btn btn-dark btn-block">ورود
                                                            کارمندان</Link>
                                                    </div>
                                                    <div className="login-customers flex-fill">
                                                        <Link to="/login#pills-customers" className="btn btn-primary btn-block">ورود
                                                            مشتریان</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="part-logged-in d-none">
                                                <div className="information d-flex align-items-center">
                                                    <a href="#" className="person">
                                                        <span className="avatar">
                                                            <img src={avatar} alt="banksepah" className="img-fluid"/>
                                                        </span>
                                                        ملیکا حبیبی
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="navbar-nav">
                                            <li className="nav-item active">
                                                <Link to="/" className="nav-link" data-href-title="خانه"
                                                      data-hover-text="خانه">
                                                    خانه
                                                    <span className="sr-only">خانه</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/myUniversity" className="nav-link"
                                                      data-href-title="دانشگاه من"
                                                      data-hover-text="دانشگاه من">دانشگاه من</Link>
                                            </li>
                                            <li className="nav-item live-program">
                                                <Link to="/liveProgram" className="nav-link"
                                                      data-href-title="برنامه زنده"
                                                      data-hover-text="برنامه زنده">برنامه زنده</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/eveningProgram" className="nav-link"
                                                      data-href-title="برنامه عصرگاهی"
                                                      data-hover-text="برنامه عصرگاهی">برنامه
                                                    عصرگاهی</Link>
                                            </li>
                                        </ul>
                                        <div className="login-logged-in d-lg-none exit d-none">
                                            <div className="part-logged-in">
                                                <div className="information d-flex align-items-center">
                                                    <a href="#" className="active">خروج</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="search">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="جستجو"
                                               aria-label="جستجو" aria-describedby="button-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="submit"
                                                    id="button-addon2">
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="part-without-login">
                                <div className="login-employees-customers">
                                    <div className="login-employees flex-fill">
                                        <Link to="/login#pills-employees" className="btn btn-dark btn-block">ورود کارمندان</Link>
                                    </div>
                                    <div className="login-customers flex-fill">
                                        <Link to="/login#pills-customers" className="btn btn-primary btn-block">ورود مشتریان</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="part-logged-in d-none">
                                <div className="information d-flex align-items-center">
                                    <a href="#" className="person">
                                        <span className="avatar">
                                            <img src={avatar} alt="banksepah" className="img-fluid"/>
                                        </span>
                                        ملیکا حبیبی
                                    </a>
                                    <a href="#" className="bell"></a>
                                    <a href="#" className="active">خروج</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Nav;