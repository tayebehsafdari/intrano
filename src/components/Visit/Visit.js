import React, {Component} from 'react';
import Slider from "react-slick";
import mostvisit01 from "../../assets/images/most-visit01.jpg";
import mostvisit02 from "../../assets/images/most-visit02.jpg";

class Visit extends Component {
    render() {
        const settings = {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            focusOnSelect: true,
            // infinite: true,
            // initialSlide: 0,
            slidesToScroll: 1,
            slidesToShow: 5,
            speed: 500,
            // touchMove: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
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
            <div className="most-visit">
                <div className="container">
                    <div className="most-visit-header">
                        <h2>پر بازدید ترین ها</h2>
                        <p>بر اساس بیشترین بازدید در همه ی بخش ها</p>
                    </div>
                </div>
                <Slider {...settings}>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit01} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slideshow-list">
                            <img src={mostvisit02} alt="mostvisit01" className="img-fluid"/>
                            <div className="overlay">
                                <div className="icon-title">
                                    <span className="icon"></span>
                                    <a href="#" className="title">عنوان ویدیو</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default Visit;