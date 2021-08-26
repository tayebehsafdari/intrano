import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Courses from "./views/Courses";
import DailySchedule from "./views/DailySchedule";
import EmployeeVideoSystem from "./views/EmployeeVideoSystem";
import EveningProgram from "./views/EveningProgram";
import Home from "./views/Home";
import Links from "./components/Link/Link";
import LiveProgram from "./views/LiveProgram";
import Login from "./views/Login";
import MyUniversity from "./views/MyUniversity";
import Notes from "./views/Notes";
import Podcast from "./views/Podcast";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Links/>
                        <Nav/>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/courses">
                                <Courses/>
                            </Route>
                            <Route path="/dailySchedule">
                                <DailySchedule/>
                            </Route>
                            <Route path="/employeeVideoSystem">
                                <EmployeeVideoSystem/>
                            </Route>
                            <Route path="/eveningProgram">
                                <EveningProgram/>
                            </Route>
                            <Route path="/liveProgram">
                                <LiveProgram/>
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/myUniversity">
                                <MyUniversity/>
                            </Route>
                            <Route path="/notes">
                                <Notes/>
                            </Route>
                            <Route path="/podcast">
                                <Podcast/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;