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
        <Route path="/picks/:currentPage">
          <Home />
        </Route>
        <Route path="/single-pick/:comicPickId">
          <ComicPick />
        </Route>
        <Route path="*">
          <Redirect to="/picks/1" />
        </Route>
      </Switch>
    </Router>
  );
}
