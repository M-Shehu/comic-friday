import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import ComicPick from "pages/ComicPick";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:comicPickId">
          <ComicPick />
        </Route>
      </Switch>
    </Router>
  );
}
