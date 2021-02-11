import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/Home";
import ComicPick from "pages/ComicPick";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect from="/" to="/picks/1" />
        </Route>
        <Route path="/picks/:currentPage">
          <Home />
        </Route>
        <Route path="/single-pick/:comicPickId">
          <ComicPick />
        </Route>
      </Switch>
    </Router>
  );
}
