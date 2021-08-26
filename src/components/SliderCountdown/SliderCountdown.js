import React, {Component} from 'react';

import Slider from "react-slick";
import video from "../../assets/images/video.mp4";
import movie from "../../assets/images/movie.mp4";
import countdown from '../../assets/images/countdown.jpg';
import Countdown from "react-countdown";


class SliderCountdown extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    play() {
        this.slider.slickPlay();
    }

    pause() {
        this.slider.slickPause();
    }

    render() {
        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            centerMode: true,
            centerPadding: "60px",
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
        const Completionist = () => <span className="label">تا شروع برنامه</span>;
        const renderer = ({hours, minutes, seconds}) => {
            return (
                <div className="countdown-section">
                    <span className="timer">
                        {hours}:{minutes}:{seconds}
                    </span>
                    <Completionist/>
                </div>
            );
        };

        return (
            <div className="slider-countdown">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-xl-9">
                            <div className="slideshow">
                                <Slider ref={slider => (this.slider = slider)} {...settings}>
                                    <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                        <video controls
                                               className="img-fluid embed-responsive-item shadow-lg">
                                            <source src={video} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                        </video>
                                        <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                                    </div>
                                    <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                        <video controls
                                               className="img-fluid embed-responsive-item shadow-lg">
                                            <source src={movie} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                        </video>
                                        <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                                    </div>
                                    <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                        <video controls
                                               className="img-fluid embed-responsive-item shadow-lg">
                                            <source src={video} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                        </video>
                                        <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                                    </div>
                                    <div className="slideshow-list embed-responsive embed-responsive-21by9">
                                        <video controls
                                               className="img-fluid embed-responsive-item shadow-lg">
                                            <source src={movie} type="video/mp4"/>
                                            Your browser does not support HTML video.
                                        </video>
                                        <span className="overlay">سامانه آموزش کارکنان بانک سپه</span>
                                    </div>
                                </Slider>
                                <div className="play-pause">
                                    <button type="button" className="btn btn-play" onClick={this.play}></button>
                                    <button type="button" className="btn btn-pause" onClick={this.pause}></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3">
                            <div className="countdown">
                                <img src={countdown} alt="countdown" className="img-fluid"/>
                                <div className="overlay">
                                    <div className="icon"></div>
                                    <h5>پخش زنده</h5>
                                    <a href="#">...مستند بازاریابی دیجیتال در فضای</a>
                                    <Countdown date={Date.now() + 5000000000} renderer={renderer}/>
                                </div>
                            </div>
                            <div className="play">
                                <div className="overlay">
                                    <span className="icon-record"></span>
                                    <a href="#" className="btn btn-outline-light">
                                        <svg>
                                            <rect></rect>
                                        </svg>
                                        <span className="content">
                                           <span className="icon-play"></span>
                                           <span>پخش</span>
                                       </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderCountdown;