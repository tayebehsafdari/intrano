import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import avatarcomments from "../assets/images/avatar-comments.jpg";
import video from "../assets/images/video.mp4";
import movie from "../assets/images/movie.mp4";
import visitimg01 from "../assets/images/visit-img01.jpg";
import archivelist from "../assets/images/archive-list.jpg";
import showvideolist01 from "../assets/images/show-video-list01.jpg";
import showvideolist02 from "../assets/images/show-video-list02.jpg";

class DailySchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'نوشتن نظر'
        }
    }

    render() {
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="daily-schedule">
                    <div className="container">
                        <div className="todays-program">
                            <h3>برنامه امروز 2 شهریور</h3>
                            <p className="host-message">سلام و خوش آمد گویی مجری</p>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className="tab-pane fade" id="program01" role="tabpanel"
                                             aria-labelledby="program01-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={video} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="program02" role="tabpanel"
                                             aria-labelledby="program02-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={movie} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show active" id="program03" role="tabpanel"
                                             aria-labelledby="program03-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={video} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="program04" role="tabpanel"
                                             aria-labelledby="program04-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={movie} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="program05" role="tabpanel"
                                             aria-labelledby="program05-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={video} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="program06" role="tabpanel"
                                             aria-labelledby="program06-tab">
                                            <div className="show-video">
                                                <div className="todays-video embed-responsive embed-responsive-16by9">
                                                    <video controls autoPlay loop
                                                           className="img-fluid embed-responsive-item">
                                                        <source src={movie} type="video/mp4"/>
                                                        Your browser does not support HTML video.
                                                    </video>
                                                </div>
                                                <div className="additional-information">
                                                    <div className="mark">
                                                        <span className="icon"></span>
                                                        نشان کردن
                                                    </div>
                                                    <div className="tag">
                                                        <a href="#">#انگیزشی</a>
                                                        <a href="#">#آموزشی</a>
                                                        <a href="#">#سرگرمی</a>
                                                    </div>
                                                </div>
                                                <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                                    سادگی
                                                    نامفهوم از صنعت
                                                    چاپ لورم ایپسوم متن
                                                    ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                                    گرافیک
                                                    است</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="show-video-list shadow-lg">
                                        <ul className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                            aria-orientation="vertical">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media" id="program01-tab"
                                                   data-toggle="pill"
                                                   href="#program01" role="tab"
                                                   aria-controls="program01"
                                                   aria-selected="false">
                                                    <span className="icon-bg">
                                                        <span className="icon icon01">
                                                            <img src={showvideolist01} alt="showvideolist01"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">سلام و خوش آمد گویی مجری</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media" id="program02-tab"
                                                   data-toggle="pill"
                                                   href="#program02" role="tab"
                                                   aria-controls="program02"
                                                   aria-selected="false">
                                                    <span className="icon-bg">
                                                        <span className="icon icon02">
                                                            <img src={showvideolist02} alt="showvideolist02"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">پخش خبر</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media active" id="program03-tab"
                                                   data-toggle="pill"
                                                   href="#program03" role="tab"
                                                   aria-controls="program03"
                                                   aria-selected="true">
                                                    <span className="icon-bg">
                                                        <span className="icon icon03">
                                                            <img src={showvideolist01} alt="showvideolist01"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">پخش موسیقی</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media" id="program04-tab"
                                                   data-toggle="pill"
                                                   href="#program04" role="tab"
                                                   aria-controls="program04"
                                                   aria-selected="false">
                                                    <span className="icon-bg">
                                                        <span className="icon icon04">
                                                            <img src={showvideolist02} alt="showvideolist01"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">برنامه پله</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media" id="program05-tab"
                                                   data-toggle="pill"
                                                   href="#program05" role="tab"
                                                   aria-controls="program05"
                                                   aria-selected="false">
                                                    <span className="icon-bg">
                                                        <span className="icon icon05">
                                                            <img src={showvideolist01} alt="showvideolist01"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">پخش موسیقی</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link media" id="program06-tab"
                                                   data-toggle="pill"
                                                   href="#program06" role="tab"
                                                   aria-controls="program06"
                                                   aria-selected="false">
                                                    <span className="icon-bg">
                                                        <span className="icon icon06">
                                                            <img src={showvideolist02} alt="showvideolist01"
                                                                 className="img-fluid"/>
                                                        </span>
                                                    </span>
                                                    <span className="media-body">
                                                        <strong className="mt-0">برنامه میکروفون</strong>
                                                        16:00-16:08
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="visit-recent">
                                <div className="visit">
                                    <div className="container">
                                        <div className="visit-section">
                                            <div className="header d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <h1>محتوای مرتبط</h1>
                                                    <div className="visit-list">
                                                        <div className="list-group list-group-horizontal-lg"
                                                             id="list-tab1"
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
                                                            <a href="#list-all1" className="list-group-item"
                                                               id="list-all-list1"
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
                                                    <div className="tab-pane fade show active" id="list-video1"
                                                         role="tabpanel"
                                                         aria-labelledby="list-video-list">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <a href="#" className="visit-img">
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                                                                    <img src={visitimg01} alt="visit-img01"
                                                                         className="img-fluid"/>
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
                            <div className="write-comment">
                                <form>
                                    <div className="form-group">
                                        <textarea placeholder={this.state.description} className="form-control"
                                                  rows="3"/>
                                    </div>
                                    <div className="content">
                                        <span className="icon"></span>
                                        <button type="submit" className="btn btn-secondary">ارسال</button>
                                    </div>
                                </form>
                            </div>
                            <div className="comments-colleagues">
                                <div className="header d-flex align-items-center justify-content-between">
                                    <h3>نظرات همکاران</h3>
                                    <a href="#" className="link">مشاهده همه</a>
                                </div>
                                <div className="comments-list">
                                    <div className="media">
                                        <div className="avatar">
                                            <img src={avatarcomments} alt="avatarcomments" className="img-fluid"/>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mt-0">ملیکا حبیبی</h5>
                                            <span className="time">3 ساعت پیش</span>
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                                            ابزارهای کاربردی می باشد</p>
                                    </div>
                                    <div className="reply-like">
                                        <div className="reply">
                                            <span className="icon"></span>
                                            5 پاسخ
                                        </div>
                                        <div className="like">
                                            <span className="icon"></span>
                                            5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="daily-schedule-archive">
                                <h3>آرشیو برنامه های روزانه</h3>
                                <div className="row">
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <div className="archive-list">
                                            <figure className="figure">
                                                <div className="archive-img">
                                                    <img src={archivelist} alt="archivelist" className="img-fluid"/>
                                                    <a href="#" className="more"></a>
                                                </div>
                                                <figcaption className="figure-caption">
                                                    <a href="#">برنامه روزانه 1 شهریور</a>
                                                </figcaption>
                                            </figure>
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

export default DailySchedule;