import React, {Component} from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">خانه</a></li>
                    <li className="breadcrumb-item"><a href="#">برنامه زنده</a></li>
                    <li className="breadcrumb-item" aria-current="page">پادکست</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;