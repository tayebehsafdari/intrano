import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Links extends Component {
    render() {
        return (
            <div className="auxiliary-link">
                <ul className="list-unstyled">
                    <li className="link01">
                        <Link to="/podcast" title="پادکست"></Link>
                    </li>
                    <li className="link02">
                        <Link to="/podcast" title="پادکست"></Link>
                    </li>
                    <li className="link03">
                        <Link to="/notes" title="یادداشت ها"></Link>
                    </li>
                    <li className="link04">
                        <Link to="/" title="پادکست"></Link>
                    </li>
                    <li className="link05">
                        <Link to="/" title="پادکست"></Link>
                    </li>
                    <li className="link06">
                        <Link to="/" title="پادکست"></Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Links;