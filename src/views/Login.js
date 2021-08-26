import React, {Component} from 'react';
import logo from "../assets/images/banksepah-logo03.png";

class Login extends Component {
    render() {
        return (
            <div className="internal-pages">
                <div className="container">
                    <div className="login-page">
                        <div className="employees-customers">
                            <a className="logo" href="#">
                                <img src={logo} alt="banksepah" className="img-fluid"/>
                            </a>
                            <h1>سامانه آموزشی کارکنان و مشتریان بانک سپه</h1>
                            <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link nav-employees active" id="pills-employees-tab"
                                       data-toggle="pill"
                                       href="#pills-employees"
                                       role="tab" aria-controls="pills-employees" aria-selected="true">ورود کارمندان</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link nav-customers" id="pills-customers-tab" data-toggle="pill"
                                       href="#pills-customers"
                                       role="tab" aria-controls="pills-customers" aria-selected="false">ورود مشتریان</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-employees" role="tabpanel"
                                     aria-labelledby="pills-employees-tab">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="personnelCode">کد پرسنلی</label>
                                            <input type="text" className="form-control" id="personnelCode"
                                                   aria-describedby="textHelp"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">رمز عبور</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="form-group forget-password">
                                            <a href="#">فراموشی رمز عبور</a>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            <span className="icon"></span>
                                            ورود
                                        </button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="pills-customers" role="tabpanel"
                                     aria-labelledby="pills-customers-tab">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="personnelCode">شماره موبایل</label>
                                            <input type="text" className="form-control" id="personnelCode"
                                                   aria-describedby="textHelp"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">رمز عبور</label>
                                            <input type="password" className="form-control" id="password"/>
                                        </div>
                                        <div className="form-group forget-password">
                                            <a href="#">فراموشی رمز عبور</a>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">
                                            <span className="icon"></span>
                                            ورود
                                        </button>
                                        <div className="register">
                                            اکانت ندارید؟
                                            <a href="#">ثبت نام کنید</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;