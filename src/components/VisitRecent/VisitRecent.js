import React, {Component} from 'react';
import visitimg01 from '../../assets/images/visit-img01.jpg';

class VisitRecent extends Component {
    render() {
        return (
            <div className="visit-recent">
                <div className="visit">
                    <div className="container">
                        <div className="visit-section">
                            <div className="header d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <h3>پربازدیـدهای اخیـر</h3>
                                    <div className="visit-list">
                                        <div className="list-group list-group-horizontal-lg" id="list-tab1"
                                             role="tablist">
                                            <a href="#list-video1" className="list-group-item active"
                                               id="list-video-list1"
                                               data-toggle="list" role="tab" aria-controls="video">
                                                ویدیو
                                            </a>
                                            <a href="#list-podcast1" className="list-group-item"
                                               id="list-podcast-list1"
                                               data-toggle="list" role="tab" aria-controls="podcast">
                                                پادکست
                                            </a>
                                            <a href="#list-all1" className="list-group-item" id="list-all-list1"
                                               data-toggle="list" role="tab" aria-controls="all">
                                                همه
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="link">ویدیوهای بیشتر</a>
                            </div>
                            <div className="visit-part">
                                <div className="tab-content" id="nav-tabContent1">
                                    <div className="tab-pane fade show active" id="list-video1" role="tabpanel"
                                         aria-labelledby="list-video-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-podcast1" role="tabpanel"
                                         aria-labelledby="list-podcast-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-all1" role="tabpanel"
                                         aria-labelledby="list-all-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="visit-section">
                            <div className="header d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <h3>پربازدیـدهای اخیـر</h3>
                                    <div className="visit-list">
                                        <div className="list-group list-group-horizontal-lg" id="list-tab2"
                                             role="tablist">
                                            <a href="#list-video2" className="list-group-item active"
                                               id="list-video-list2"
                                               data-toggle="list" role="tab" aria-controls="video">
                                                ویدیو
                                            </a>
                                            <a href="#list-podcast2" className="list-group-item"
                                               id="list-podcast-list2"
                                               data-toggle="list" role="tab" aria-controls="podcast">
                                                پادکست
                                            </a>
                                            <a href="#list-all2" className="list-group-item" id="list-all-list2"
                                               data-toggle="list" role="tab" aria-controls="all">
                                                همه
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="link">ویدیوهای بیشتر</a>
                            </div>
                            <div className="visit-part">
                                <div className="tab-content" id="nav-tabContent2">
                                    <div className="tab-pane fade show active" id="list-video2" role="tabpanel"
                                         aria-labelledby="list-video-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-podcast2" role="tabpanel"
                                         aria-labelledby="list-podcast-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="list-all2" role="tabpanel"
                                         aria-labelledby="list-all-list">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <a href="#" className="visit-img">
                                                    <img src={visitimg01} alt="visit-img01" className="img-fluid"/>
                                                    <div className="overlay">
                                                        <div className="visit-play"></div>
                                                    </div>
                                                    <div className="visit-information">
                                                        <span className="icon"></span>
                                                        <span className="time">۰۲:۳۵</span>
                                                    </div>
                                                </a>
                                                <div className="visit-content">
                                                    <h5>
                                                        <a href="#">مستند دیجیتال مارکتینگ قسمت ۵</a>
                                                    </h5>
                                                    <div className="visit-count">
                                                        <span>25.4 هزار بازدید</span>
                                                        <span>هنر و طراحی</span>
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

export default VisitRecent;