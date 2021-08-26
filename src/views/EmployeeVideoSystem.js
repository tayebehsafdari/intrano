import React, {Component} from 'react';
import Category from "../components/Category/Category";
import Slider from "react-slick";
import video from "../assets/images/video.mp4";
import movie from "../assets/images/movie.mp4";
import visitimg01 from "../assets/images/visit-img01.jpg";


class EmployeeVideoSystem extends Component {
    constructor(props) {
        super(props);
        this.pause = this.pause.bind(this);
    }

    pause() {
        this.slider.slickPause();
    }


    render() {
        const settingsFirst = {
            // arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: "315px",
            className: "center",
            dots: true,
            focusOnSelect: true,
            // infinite: true,
            // initialSlide: 0,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            // touchMove: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                },
            ]
        };

        const settingsSecond = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            // infinite: true,
            // initialSlide: 0,
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 500,
            // touchMove: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]

        };

        return (
            <div className="employee-video-system">
                <div className="slideshow">
                    <div className="container">
                        <h1>
                            سامانه
                            <span className="mark"> ویدیویی کارکنان</span>
                        </h1>
                        <p>پلتفرم آنلاین ویدیویی بانک سپه</p>
                        <Slider ref={slider => (this.slider = slider)} {...settingsFirst}>
                            <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                <video controls autoPlay loop
                                       className="img-fluid embed-responsive-item shadow-lg">
                                    <source src={video} type="video/mp4"/>
                                    Your browser does not support HTML video.
                                </video>
                                <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                            </div>
                            <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                <video controls autoPlay loop
                                       className="img-fluid embed-responsive-item shadow-lg">
                                    <source src={movie} type="video/mp4"/>
                                    Your browser does not support HTML video.
                                </video>
                                <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                            </div>
                            <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                <video controls autoPlay loop
                                       className="img-fluid embed-responsive-item shadow-lg">
                                    <source src={video} type="video/mp4"/>
                                    Your browser does not support HTML video.
                                </video>
                                <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                            </div>
                            <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                <video controls autoPlay loop
                                       className="img-fluid embed-responsive-item shadow-lg">
                                    <source src={movie} type="video/mp4"/>
                                    Your browser does not support HTML video.
                                </video>
                                <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                            </div>
                        </Slider>
                        <div className="play-pause">
                            <button type="button" className="btn btn-pause-play" onClick={this.pause}></button>
                        </div>
                    </div>
                </div>
                <Category/>
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
                        </div>
                    </div>
                </div>
                <div className="frequently-asked-questions">
                    <div className="container">
                        <h3>سوالات متداول</h3>
                        <div className="faq-sections">
                            <div className="accordion" id="accordionExample">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed"
                                                            type="button"
                                                            data-toggle="collapse" data-target="#collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed"
                                                            type="button"
                                                            data-toggle="collapse" data-target="#collapseTwo"
                                                            aria-expanded="true"
                                                            aria-controls="collapseTwo">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingThree">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left" type="button"
                                                            data-toggle="collapse" data-target="#collapseThree"
                                                            aria-expanded="true"
                                                            aria-controls="collapseThree">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseThree" className="collapse show"
                                                 aria-labelledby="headingThree"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-header" id="headingFour">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed"
                                                            type="button"
                                                            data-toggle="collapse" data-target="#collapseFour"
                                                            aria-expanded="true"
                                                            aria-controls="collapseFour">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingFive">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed"
                                                            type="button"
                                                            data-toggle="collapse" data-target="#collapseFive"
                                                            aria-expanded="true"
                                                            aria-controls="collapseFive">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingSix">
                                                <h2 className="mb-0">
                                                    <button className="btn btn-link btn-block text-left collapsed"
                                                            type="button"
                                                            data-toggle="collapse" data-target="#collapseSix"
                                                            aria-expanded="true"
                                                            aria-controls="collapseSix">
                                                        عنوان دقیق سوال متداول و یا یک تایتل پر کاربرد
                                                    </button>
                                                </h2>
                                            </div>

                                            <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                                 data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <p>متن توضیحات و سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن
                                                        توضیحات و پاسخ
                                                        سوال متن و پاسخ سوال متن توضیحات و پاسخ سوال متن توضیحات و </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="more-questions">
                                <a href="#" className="btn btn-secondary">سوالات بیشتر</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visit-recent">
                    <div className="visit">
                        <div className="container">
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
            </div>
        );
    }
}

export default EmployeeVideoSystem;