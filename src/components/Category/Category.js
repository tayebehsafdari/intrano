import React, {Component} from 'react';
import category01 from '../../assets/images/category01.jpg';

class Category extends Component {
    render() {
        return (
            <div className="category">
                <div className="container">
                    <div className="header d-flex align-items-center justify-content-between">
                        <h3>دستـه‌بندی‌ها</h3>
                        <a href="#" className="link">بیشتر</a>
                    </div>
                    <div className="category-list">
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <a href="#" className="list-part">
                                    <img src={category01} alt="category01" className="img-fluid"/>
                                    <div className="overlay">
                                        <span className="icon icon01"></span>
                                        <h3>هنر و طراحی</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <a href="#" className="list-part">
                                    <img src={category01} alt="category01" className="img-fluid"/>
                                    <div className="overlay">
                                        <span className="icon icon02"></span>
                                        <h3>سفر و ماجراجویی</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <a href="#" className="list-part">
                                    <img src={category01} alt="category01" className="img-fluid"/>
                                    <div className="overlay">
                                        <span className="icon icon03"></span>
                                        <h3>موسیقی</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <a href="#" className="list-part">
                                    <img src={category01} alt="category01" className="img-fluid"/>
                                    <div className="overlay">
                                        <span className="icon icon01"></span>
                                        <h3>هنر و طراحی</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;