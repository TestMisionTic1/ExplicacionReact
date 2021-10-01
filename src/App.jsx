import 'styles/styles.css';
import PitbullinfoPage from 'pages/pitbull';
import AmericanBullyPage from 'pages/americanbully';
import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";
import Index from 'pages';
import Layout from 'layouts/Layout';


function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/pitbull">
                            <PitbullinfoPage />
                        </Route>
                        <Route path="/americanbully">
                            <AmericanBullyPage />
                        </Route>
                        <Route path="/">
                            <Index />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
