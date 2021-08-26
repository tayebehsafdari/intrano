import React, {Component} from 'react';
import Category from "../Category/Category";
import VisitRecent from "../VisitRecent/VisitRecent";

class CategoryVisit extends Component {
    render() {
        return (
            <>
                <Category/>
                <VisitRecent/>
            </>
        );
    }
}

export default CategoryVisit;