import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import notespart from "../assets/images/notes-part.jpg";
import Pagination from "../components/Pagination/Pagination";

class Notes extends Component {
    render() {
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="notes">
                    <div className="container">
                        <div className="notes-list">
                            <h3>یادداشت ها</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="notes-container">
                                        <div className="notes-part">
                                            <div className="notes-img">
                                                <img src={notespart} alt="notes-part" className="img-fluid"/>
                                            </div>
                                            <h4>دوره سپرده های کوتاه مدت</h4>
                                            <span className="sessions">جلسه دوم</span>
                                            <div className="mark">
                                                <span className="icon"></span>
                                                نشان کردن
                                            </div>
                                            <div className="more-details">
                                                <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون
                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="notes-container">
                                        <div className="notes-part">
                                            <div className="notes-img">
                                                <img src={notespart} alt="notes-part" className="img-fluid"/>
                                            </div>
                                            <h4>دوره سپرده های کوتاه مدت</h4>
                                            <span className="sessions">جلسه دوم</span>
                                            <div className="mark">
                                                <span className="icon"></span>
                                                نشان کردن
                                            </div>
                                            <div className="more-details">
                                                <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون
                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="notes-container">
                                        <div className="notes-part">
                                            <div className="notes-img">
                                                <img src={notespart} alt="notes-part" className="img-fluid"/>
                                            </div>
                                            <h4>دوره سپرده های کوتاه مدت</h4>
                                            <span className="sessions">جلسه دوم</span>
                                            <div className="mark">
                                                <span className="icon"></span>
                                                نشان کردن
                                            </div>
                                            <div className="more-details">
                                                <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون
                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                    صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                                                    روزنامه و
                                                    مجله در ستون </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-notes">
                            <div className="header d-flex align-items-center">
                                <h1>یادداشت های من</h1>
                                <div className="my-notes-list">
                                    <div className="list-group list-group-horizontal-lg" id="list-tab1"
                                         role="tablist">
                                        <a href="#list-all1" className="list-group-item active"
                                           id="list-all-list1"
                                           data-toggle="list" role="tab" aria-controls="all">
                                            همه
                                        </a>
                                        <a href="#list-certificates1" className="list-group-item"
                                           id="list-certificates-list1"
                                           data-toggle="list" role="tab" aria-controls="certificates">
                                            گواهینامه ها
                                        </a>
                                        <a href="#list-public-education1" className="list-group-item"
                                           id="list-public-education-list1"
                                           data-toggle="list" role="tab" aria-controls="public-education">
                                            آموزش عمومی
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="my-notes-part">
                                <div className="tab-content" id="nav-tabContent1">
                                    <div className="tab-pane fade show active" id="list-all1" role="tabpanel"
                                         aria-labelledby="list-all1-list">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Pagination/>
                                    </div>
                                    <div className="tab-pane fade" id="list-certificates1" role="tabpanel"
                                         aria-labelledby="list-certificates1-list">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-public-education1" role="tabpanel"
                                         aria-labelledby="list-public-education1-list">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-4">
                                                <div className="notes-container">
                                                    <div className="notes-part">
                                                        <div className="notes-img">
                                                            <img src={notespart} alt="notes-part"
                                                                 className="img-fluid"/>
                                                        </div>
                                                        <h4>دوره سپرده های کوتاه مدت</h4>
                                                        <span className="sessions">جلسه دوم</span>
                                                        <div className="mark">
                                                            <span className="icon"></span>
                                                            نشان کردن
                                                        </div>
                                                        <div className="more-details">
                                                            <p>صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                                                                بلکه روزنامه و
                                                                مجله در ستون
                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و

                                                                صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
                                                                متون
                                                                بلکه روزنامه و
                                                                مجله در ستون </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notes;