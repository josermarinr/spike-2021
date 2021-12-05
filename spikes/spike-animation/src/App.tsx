import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListOfAnimationLibrary } from "./ListOfAnimationLibrary/ListOfAnimationLibrary";
import { MotionPage } from "./motion/MotionPage";
import { ReactTransitionGroup } from "./ReactTransitionGroup/ReactTransitionGroup";
import { CSS } from "./CSS/CSS";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/rtg">
                        <ReactTransitionGroup />
                    </Route>

                    <Route path="/motion">
                        <MotionPage />
                    </Route>

                    <Route path="/css">
                        <CSS />
                    </Route>

                    <Route exact path="/">
                        <ListOfAnimationLibrary />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
