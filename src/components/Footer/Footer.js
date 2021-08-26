import React, {Component} from 'react';
import logo from '../../assets/images/banksepah-logo02.png';
import intrano from '../../assets/images/intrano.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="line"></div>
                <div className="footer-list">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-2 pt-4">
                                <div className="footer-section">
                                    <h6>منوی اصلی</h6>
                                    <ul className="list-unstyled other-links">
                                        <li>
                                            <a href="#">امکانات</a>
                                        </li>
                                        <li>
                                            <a href="#">درباره ما</a>
                                        </li>
                                        <li>
                                            <a href="#">تعرفه ها</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 pt-4">
                                <div className="footer-section">
                                    <h6>پشتیبانی</h6>
                                    <ul className="list-unstyled other-links">
                                        <li>
                                            <a href="#">سوالات متداول</a>
                                        </li>
                                        <li>
                                            <a href="#">تماس با پشتیبانی</a>
                                        </li>
                                        <li>
                                            <a href="#">درباره ما</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 pt-4">
                                <div className="footer-section">
                                    <ul className="list-unstyled address">
                                        <li>
                                            <a href="mailto:info@foody.com">info@foody.com</a>
                                        </li>
                                        <li>
                                            878 Schoen Road United Arab Emirates
                                        </li>
                                        <li>
                                            <a href="tel:+996 21 143 312">+996 21 143 312</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 offset-lg-1">
                                <div className="footer-section">
                                    <div className="register">
                                        <a href="#">
                                            <img src={logo} alt="logo" className="img-fluid"/>
                                        </a>
                                        <p>شعار کوتاه یک خطی در باره برند شعار کوتاه یک خطی در باره برند</p>
                                        <form className="w-100">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-primary" type="submit"
                                                            id="button-addon1">ثبت‌نام در خبرنامه
                                                    </button>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="ایمیل خود را وارد کنید"
                                                       aria-label="Example text with button addon"
                                                       aria-describedby="button-addon1"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg">
                                <div className="social-networks">
                                    <a href="#" className="instagram"></a>
                                    <a href="#" className="google-plus"></a>
                                    <a href="#" className="linkedin"></a>
                                    <a href="#" className="twitter"></a>
                                    <a href="#" className="facebook"></a>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="information">
                                    <a href="#" className="intrano-icon">
                                        <img src={intrano} alt="intrano" className="img-fluid"/>
                                    </a>
                                    Copyright © 2020
                                    <span className="icon"></span>
                                    irannovin | intrano.ir
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;