import Index from "components/pages/home.components.jsx";
import About from "components/pages/about.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function BaseRoute()
{
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
        </Router>
    );
}

export default BaseRoute;
