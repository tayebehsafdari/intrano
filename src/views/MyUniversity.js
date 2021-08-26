import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import tutorialslist from '../assets/images/tutorials-list.jpg';
// Import react-circular-progressbar module and styles
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
// Animation
import {easeQuadInOut} from "d3-ease";
import AnimatedProgressProvider from "../components/AnimatedProgressProvider/AnimatedProgressProvider";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import Visit from "../components/Visit/Visit";
import {Link} from "react-router-dom";

// import ChangingProgressProvider from "../components/ChangingProgressProvider/ChangingProgressProvider";

class MyUniversity extends Component {
    render() {
        const data = [
            {
                name: 'شنبه',
                time: 1,
                amt: 9
            },
            {
                name: 'یکشنبه',
                time: 2,
                amt: 9
            },
            {
                name: 'دوشنبه',
                time: 3,
                amt: 9
            },
            {
                name: 'سه شنبه',
                time: 4,
                amt: 9
            },
            {
                name: 'چهار شنبه',
                time: 5,
                amt: 9
            },
            {
                name: 'پنج شنبه',
                time: 6,
                amt: 9
            },
            {
                name: 'جمعه',
                time: 7,
                amt: 9
            }
        ];
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="my-university">
                    <div className="container">
                        <div className="university-info">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h3>گزارش عملکرد من</h3>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="performance-report">
                                                <AnimatedProgressProvider
                                                    valueStart={0}
                                                    valueEnd={45}
                                                    duration={1.4}
                                                    easingFunction={easeQuadInOut}
                                                    repeat
                                                >
                                                    {value => {
                                                        const roundedValue = Math.round(value);
                                                        return (
                                                            <CircularProgressbar
                                                                value={value}
                                                                text={`${roundedValue}%`}
                                                                strokeWidth={5}
                                                                styles={buildStyles({
                                                                    strokeLinecap: "butt",
                                                                    textColor: "#242424",
                                                                    pathColor: "#e8651d",
                                                                    trailColor: "#dfdfdf",
                                                                    textSize: "22px",
                                                                    pathTransitionDuration: 0.15,
                                                                    pathTransition: "none"

                                                                })}
                                                            />
                                                        );
                                                    }}
                                                </AnimatedProgressProvider>
                                                <div className="more-information">
                                                    <div className="info">
                                                        <span>گواهینامه های دریافتی</span>
                                                        <span>50</span>
                                                    </div>
                                                    <div className="info">
                                                        <span>مجموع کل دوره های دارای گواهینامه</span>
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-2">
                                            <div className="performance-report">
                                                <AnimatedProgressProvider
                                                    valueStart={0}
                                                    valueEnd={90}
                                                    duration={1.4}
                                                    easingFunction={easeQuadInOut}
                                                    repeat
                                                >
                                                    {value => {
                                                        const roundedValue = Math.round(value);
                                                        return (
                                                            <CircularProgressbar
                                                                value={value}
                                                                text={`${roundedValue}%`}
                                                                strokeWidth={5}
                                                                styles={buildStyles({
                                                                    strokeLinecap: "butt",
                                                                    textColor: "#242424",
                                                                    pathColor: "#e8651d",
                                                                    trailColor: "#dfdfdf",
                                                                    textSize: "22px",
                                                                    pathTransitionDuration: 0.15,
                                                                    pathTransition: "none"

                                                                })}
                                                            />
                                                        );
                                                    }}
                                                </AnimatedProgressProvider>
                                                <div className="more-information">
                                                    <div className="info">
                                                        <span>دوره های عمومی دیده شده</span>
                                                        <span>50</span>
                                                    </div>
                                                    <div className="info">
                                                        <span>مجموع کل دوره های عمومی</span>
                                                        <span>200</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="duration-activities">
                                        <h3>مدت زمان فعالیت روزانه</h3>
                                        <ResponsiveContainer width={600} height={230}>
                                            <BarChart data={data} style={{direction: 'ltr'}}>
                                                <CartesianGrid strokeDasharray="5 5"/>
                                                <XAxis dataKey="name" reversed={true}/>
                                                <YAxis dataKey="time"
                                                       label={{value: 'ساعت', position: 'insideTopRight'}}
                                                       orientation='right' scale='linear'
                                                       type='category'/>
                                                <Tooltip/>
                                                {/*<Legend/>*/}
                                                <Bar dataKey="time" fill="#e8651d" barSize={7}/>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header d-flex align-items-center justify-content-between">
                            <h3>گواهینامه های پیشنهادی منابع انسانی</h3>
                            <a href="#" className="link">مشاهده همه</a>
                        </div>
                        <div className="tutorials-list">
                            <div className="media shadow-lg">
                                <Link to="/courses" className="tutorials-img">
                                    <img src={tutorialslist} alt="tutorialslist" className="img-fluid"/>
                                </Link>
                                <div className="media-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="film-information">
                                                <h5 className="mt-0">
                                                    <Link to="/courses">دوره سپرده های کوتاه مدت</Link>
                                                </h5>
                                                <div className="film-time">
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        6 فیلم
                                                    </div>
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        3 ساعت و 40 ثانیه
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar"
                                                         aria-valuenow="75"
                                                         aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="film-watch">
                                                <a href="#" className="btn btn-secondary">مشاهده</a>
                                                <div className="remaining-time">
                                                    <span>زمان باقی مانده برای دریافت گواهینامه :</span>
                                                    <span>3 روز</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media shadow-lg">
                                <Link to="/courses" className="tutorials-img">
                                    <img src={tutorialslist} alt="tutorialslist" className="img-fluid"/>
                                </Link>
                                <div className="media-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="film-information">
                                                <h5 className="mt-0">
                                                    <Link to="/courses">دوره سپرده های کوتاه مدت</Link>
                                                </h5>
                                                <div className="film-time">
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        6 فیلم
                                                    </div>
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        3 ساعت و 40 ثانیه
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar"
                                                         aria-valuenow="75"
                                                         aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="film-watch">
                                                <a href="#" className="btn btn-secondary">مشاهده</a>
                                                <div className="remaining-time">
                                                    <span>زمان باقی مانده برای دریافت گواهینامه :</span>
                                                    <span>3 روز</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header d-flex align-items-center justify-content-between">
                            <h3>آموزش های عمومی</h3>
                            <a href="#" className="link">مشاهده همه</a>
                        </div>
                        <div className="tutorials-list">
                            <div className="media shadow-lg">
                                <Link to="/courses" className="tutorials-img">
                                    <img src={tutorialslist} alt="tutorialslist" className="img-fluid"/>
                                </Link>
                                <div className="media-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="film-information">
                                                <h5 className="mt-0">
                                                    <Link to="/courses">دوره سپرده های کوتاه مدت</Link>
                                                </h5>
                                                <div className="film-time">
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        6 فیلم
                                                    </div>
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        3 ساعت و 40 ثانیه
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar"
                                                         aria-valuenow="75"
                                                         aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="film-watch">
                                                <a href="#" className="btn btn-secondary">مشاهده</a>
                                                <div className="remaining-time">
                                                    <span>زمان باقی مانده برای دریافت گواهینامه :</span>
                                                    <span>3 روز</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media shadow-lg">
                                <Link to="/courses" className="tutorials-img">
                                    <img src={tutorialslist} alt="tutorialslist" className="img-fluid"/>
                                </Link>
                                <div className="media-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="film-information">
                                                <h5 className="mt-0">
                                                    <Link to="/courses">دوره سپرده های کوتاه مدت</Link>
                                                </h5>
                                                <div className="film-time">
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        6 فیلم
                                                    </div>
                                                    <div className="film">
                                                        <span className="icon"></span>
                                                        3 ساعت و 40 ثانیه
                                                    </div>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar w-75" role="progressbar"
                                                         aria-valuenow="75"
                                                         aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="film-watch">
                                                <a href="#" className="btn btn-secondary">مشاهده</a>
                                                <div className="remaining-time">
                                                    <span>زمان باقی مانده برای دریافت گواهینامه :</span>
                                                    <span>3 روز</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Visit/>
                </div>
            </div>
        );
    }
}

export default MyUniversity;