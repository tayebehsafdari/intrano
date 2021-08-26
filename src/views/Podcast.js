import React, {Component} from 'react';
import podcastlist01 from "../assets/images/podcast-list01.jpg";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Category from "../components/Category/Category";
import playlistname from "../assets/images/playlist-name.jpg";

class Podcast extends Component {
    render() {
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="podcast">
                    <div className="container">
                        <div className="podcast-list">
                            <h3>پادکست</h3>
                            <div className="row">
                                <div className="col-md-6 col-lg-3">
                                    <div className="podcast-part">
                                        <div className="podcast-img">
                                            <img src={podcastlist01} alt="podcastlist01" className="img-fluid"/>
                                            <a href="#" className="more"></a>
                                        </div>
                                        <h4>
                                            <a href="#">پادکست با لورم ایپسوم در مورد مدیریت</a>
                                        </h4>
                                        <div className="time">
                                            <span className="icon"></span>
                                            2:01
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="podcast-part">
                                        <div className="podcast-img">
                                            <img src={podcastlist01} alt="podcastlist01" className="img-fluid"/>
                                            <a href="#" className="more"></a>
                                        </div>
                                        <h4>
                                            <a href="#">پادکست با لورم ایپسوم در مورد مدیریت</a>
                                        </h4>
                                        <div className="time">
                                            <span className="icon"></span>
                                            2:01
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="podcast-part">
                                        <div className="podcast-img">
                                            <img src={podcastlist01} alt="podcastlist01" className="img-fluid"/>
                                            <a href="#" className="more"></a>
                                        </div>
                                        <h4>
                                            <a href="#">پادکست با لورم ایپسوم در مورد مدیریت</a>
                                        </h4>
                                        <div className="time">
                                            <span className="icon"></span>
                                            2:01
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <div className="podcast-part">
                                        <div className="podcast-img">
                                            <img src={podcastlist01} alt="podcastlist01" className="img-fluid"/>
                                            <a href="#" className="more"></a>
                                        </div>
                                        <h4>
                                            <a href="#">پادکست با لورم ایپسوم در مورد مدیریت</a>
                                        </h4>
                                        <div className="time">
                                            <span className="icon"></span>
                                            2:01
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Category/>
                <div className="playlist-name">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="playlist">
                                    <h5>نام پلی لیست</h5>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="playlist">
                                    <h5>نام پلی لیست</h5>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media align-items-center">
                                        <a href="#" className="playlist-img">
                                            <img src={playlistname} alt="podcastlist01"
                                                 className="img-fluid align-self-center"/>
                                        </a>
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mt-0">
                                                    <a href="#">پادکست با لورم ایپسوم در مورد مدیریت </a>
                                                </h6>
                                                <span>2:44</span>
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

export default Podcast;