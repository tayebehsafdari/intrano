import React, {Component} from 'react';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import video from "../assets/images/video.mp4";
import visitimg01 from "../assets/images/visit-img01.jpg";
import avatarcomments from "../assets/images/avatar-comments.jpg";
import {Editor, EditorState, RichUtils} from "draft-js";

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: 'نوشتن نظر',
            editorState: EditorState.createEmpty()
        };
        this.onChange = editorState => this.setState({editorState});
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onItalicClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    }

    _onUnderlineClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <div className="internal-pages">
                <div className="page-path">
                    <div className="container">
                        <Breadcrumb/>
                    </div>
                </div>
                <div className="test-video">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-9">
                                <div className="courses">
                                    <div className="header">
                                        <div className="current-session">
                                            <h3>دوره سپرده های کوتاه مدت</h3>
                                            <p className="number-sessions">جلسه دوم</p>
                                        </div>
                                        <div className="sessions">
                                            <a href="#">جلسه قبلی</a>
                                            <a href="#">جلسه بعدی</a>
                                        </div>
                                    </div>
                                    <div className="courses-video embed-responsive embed-responsive-16by9">
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
                                        <p className="comment">توضیح جلسه اول لورم ایپسوم متن ساختگی با تولید
                                            سادگی
                                            نامفهوم از صنعت
                                            چاپ لورم ایپسوم متن
                                            ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                            گرافیک
                                            است</p>
                                        <div className="tag">
                                            <a href="#">#منابع انسانی</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3">
                                <div className="test-editor">
                                    <div className="test">
                                        <a href="#" className="btn btn-success btn-block">
                                            <span className="icon"></span>
                                            آزمون
                                        </a>
                                        <p className="details">برای شرکت در آزمون فیلم را تا انتها ببینید</p>
                                    </div>
                                    <div className="editor shadow-lg">
                                        <div className="content-block">
                                            <h6>یادداشت</h6>
                                            <button type="button" className="btn btn-img"
                                                    onClick={this._onBoldClick.bind(this)}></button>
                                            <button type="button" className="btn btn-list"
                                                    onClick={this._onBoldClick.bind(this)}></button>
                                            <button type="button" className="btn btn-italic"
                                                    onClick={this._onItalicClick.bind(this)}></button>
                                            <button type="button" className="btn btn-underline"
                                                    onClick={this._onUnderlineClick.bind(this)}></button>
                                            <button type="button" className="btn btn-bold"
                                                    onClick={this._onBoldClick.bind(this)}></button>
                                        </div>
                                        <Editor
                                            editorState={this.state.editorState}
                                            handleKeyCommand={this.handleKeyCommand}
                                            onChange={this.onChange}
                                            textAlignment='right'
                                            placeholder="نوشتن یادداشت"
                                        />
                                        <div className="mark-save">
                                            <div className="mark">
                                                <span className="icon"></span>
                                                نشان کردن
                                            </div>
                                            <div className="save">
                                                <button type="submit" className="btn btn-success">ذخیره</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="attachments">
                                        <h6>
                                            <span className="icon"></span>
                                            فایل های ضمیمه
                                        </h6>
                                        <div className="attachments-list">
                                            <a href="#">part 1.pdf</a>
                                            <a href="#">part 1.pdf</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="visit-recent">
                            <div className="visit">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Courses;