import 'styles/styles.css';
import PitbullinfoPage from 'pages/pitbull';
import AmericanBullyPage from 'pages/americanbully';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Index from 'pages';


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/pitbull">
                        <PitbullinfoPage />
                    </Route>
                    <Route path= "/americanbully">
                        <AmericanBullyPage />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
