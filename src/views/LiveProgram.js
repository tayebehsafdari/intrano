import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Countdown, {zeroPad} from "react-countdown";
import archivelist from "../assets/images/archive-list.jpg";
import video from "../assets/images/video.mp4";


class LiveProgram extends Component {
    render() {
        // Random component
        const Completionist = () => {
            return (
                <video controls autoPlay loop
                       className="img-fluid embed-responsive-item">
                    <source src={video} type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
            );
        };

        // Renderer callback with condition
        const renderer1 = ({days, hours, minutes, seconds, completed}) => {
            if (completed) {
                // Render a completed state
                return <Completionist/>;
            } else {
                // Render a countdown
                return (
                    <div className="countdown-section not-completed">
                        <span className="timer">
                            <span className="second">{seconds}</span>
                            <span className="minute">{minutes}</span>
                            <span className="points">:</span>
                            <span className="hour">{hours}</span>
                            <span className="day">{days}</span>
                        </span>
                    </div>
                );
            }
        };
        const renderer2 = ({days, hours, minutes, seconds}) => {
            return (
                <div className="countdown-section">
                        <span className="timer">
                            <span className="second">{seconds}</span>
                            <span className="minute">{minutes}</span>
                            <span className="points">:</span>
                            <span className="hour">{hours}</span>
                            <span className="day">{days}</span>
                        </span>
                </div>
            );
        };
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="live-program">
                    <div className="container">
                        <div className="header">
                            <h3>برنامه زنده</h3>
                            <p className="host-message">سلام و خوش آمد گویی مجری</p>
                        </div>
                        <div className="theme-program">
                            <div className="row">
                                <div className="col-lg-8 col-xl-9">
                                    <div className="programs">
                                        <div className="programs-video embed-responsive embed-responsive-16by9">
                                            <Countdown date={Date.now() + 50000} renderer={renderer1}>
                                                <Completionist/>
                                            </Countdown>
                                        </div>
                                        <div className="additional-information">
                                            <div className="mark">
                                                <span className="icon"></span>
                                                نشان کردن
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
                                <div className="col-lg-4 col-xl-3">
                                    <div className="programs-information shadow-lg">
                                        <div className="information">
                                            <h4>موضوع برنامه</h4>
                                            <div className="more-comment">گفتگو با لورم ایپسوم در مورد مدیریت راهبری و
                                                مدیریت
                                            </div>
                                        </div>
                                        <div className="information">
                                            <h4>مجری</h4>
                                            <div className="more-comment">لورم ایپسوم</div>
                                        </div>
                                        <div className="information">
                                            <h4>مهمان برنامه</h4>
                                            <div className="more-comment">لورم ایپسوم</div>
                                        </div>
                                        <div className="information">
                                            <h4>زمان پخش</h4>
                                            <div className="more-comment">یکشنبه 2 شهریور ساعت 18</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="future-plans">
                            <div className="future-plans-list">
                                <div className="header">
                                    <h3>برنامه های آتی</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="list-part">
                                            <div className="overlay">
                                                <span className="icon"></span>
                                                <h6>برنامه زنده</h6>
                                                <h5>
                                                    <a href="#">آموزش راهبری و مدیریت</a>
                                                </h5>
                                                <Countdown date={Date.now() + 5000000000} renderer={renderer2}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 col-xl-3">
                                        <div className="list-part">
                                            <div className="overlay">
                                                <span className="icon"></span>
                                                <h6>برنامه زنده</h6>
                                                <h5>
                                                    <a href="#">آموزش راهبری و مدیریت</a>
                                                </h5>
                                                <Countdown date={Date.now() + 500000} renderer={renderer2}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="playing-program d-none">
                            <h3>برنامه در حال پخش</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="playing-list">
                                        <figure className="figure">
                                            <a href="#" className="playing-img">
                                                <span className="hover"></span>
                                                <img src={archivelist} alt="playing-list" className="img-fluid"/>
                                            </a>
                                            <figcaption className="figure-caption">
                                                <a href="#">گفتگو با لورم ایپسوم در مورد مدیریت </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="daily-schedule-archive">
                            <h3>آرشیو برنامه های روزانه</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
                                <div className="col-md-6 col-lg-4 col-xl-3">
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
        );
    }
}

export default LiveProgram;