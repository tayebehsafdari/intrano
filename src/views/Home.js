import React, {Component} from 'react';
import SliderCountdown from "../components/SliderCountdown/SliderCountdown";
import Program from "../components/Program/Program";
import Visit from "../components/Visit/Visit";
import CategoryVisit from "../components/CategoryVisit/CategoryVisit";


class Home extends Component {
    render() {
        return (
            <div className="main-page">
                <SliderCountdown/>
                <Program/>
                <CategoryVisit/>
                <Visit/>
            </div>
        );
    }
}

export default Home;