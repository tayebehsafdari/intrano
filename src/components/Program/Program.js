import React, {Component} from 'react';
import media01 from '../../assets/images/media01.jpg';

class Program extends Component {
    render() {
        return (
            <div className="program">
                <div className="container">
                    <div className="header d-flex align-items-center justify-content-between">
                        <h3>لیست پخش برنامه های امروز</h3>
                        <a href="#" className="link">مشاهده همه روز ها</a>
                    </div>
                    <div className="program-list">
                        <div className="row row-cols-1 row-cols-lg-2">
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">سلام و خوش آمد گویی مجری</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon01"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">پخش موسیقی</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon01"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">پخش خبر</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon01"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">برنامه میکروفون</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon02"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">پخش موسیقی</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon01"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">برنامه مهمان شو</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon03"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">برنامه پله</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon04"></span>
                                                16:00-16:08
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="list-part">
                                    <div className="media align-items-center">
                                        <a href="#" className="overlay">
                                            <div className="hover"></div>
                                            <img src={media01} alt="media01" className="img-fluid"/>
                                        </a>
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                <a href="">برنامه مهمان شو</a>
                                            </h5>
                                            <div className="playtime">
                                                <span className="icon icon05"></span>
                                                16:00-16:08
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

export default Program;