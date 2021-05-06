import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "pages/Home";
import ComicPick from "pages/ComicPick";
import { ExclusiveClub1, ExclusiveClub2 } from "pages/ExclusiveClub";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/picks/:currentPage">
          <Home />
        </Route>
        <Route path="/single-pick/:comicPickId/:currentComic">
          <ComicPick />
        </Route>
        <Route path="/single-pick/:comicPickId">
          <ComicPick />
        </Route>
        <Route exact path="/exclusive-club">
          <ExclusiveClub1 />
        </Route>
        <Route path="/exclusive-club-2">
          <ExclusiveClub2 />
        </Route>
        <Route path="*">
          <Redirect to="/picks/1" />
        </Route>
      </Switch>
    </Router>
  );
}
