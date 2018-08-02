import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Document from "./document/Document";
import Journals from "./journals/Journals";

const RootRouter = () => (
  <Router>
    <div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/document">文档</Link>
          </li>
          <li>
            <Link to="/journals">每日总结</Link>
          </li>
        </ul>
      </div>
      <Route exact path="/" component={Document} />
      <Route path="/document" component={Document} />
      <Route path="/journals" component={Journals} />
    </div>
  </Router>
);
class App extends Component {
  render() {
    return <div>{RootRouter()}</div>;
  }
}

export default App;
