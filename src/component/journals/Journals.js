import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import First from "./1/First";
import Second from "./2/Second";
import Third from "./3/Third";

let arr = [
  {
    name: "同学甲",
    list: [
      {
        title: "1",
        pathName: "/1"
      }
    ]
  },{
    name: "同学乙",
    list: [
      {
        title: "2",
        pathName: "/2"
      }
    ]
  },{
    name: "同学丙",
    list: [
      {
        title: "3",
        pathName: "/3"
      }
    ]
  }
];

const JournalRouter = (name, list, key, url) => {
  let arr = list.map((val, index) => {
    return (
      <li key={index}>
          <Link to={{
            pathname: `${url}${val.pathName}`
          }}>{val.title}</Link>
      </li>
    )
  }) 
  let handClick  = (e) => {
    let style = e.target.nextElementSibling.style;
    if(style.display === 'none' || undefined) {
      style.display = 'block'
    } else {
      style.display = 'none'
    }
  }
  return (
    <li key={key}>
      <div onClick={(e) => {handClick(e)}}>{name}</div>
      <ul style={{
        display: 'none'
      }}>
       {arr}
      </ul>
    </li>
  );
};

let getRouters = (url) => {
  return arr.map((val, index) => {
    return JournalRouter(val.name, val.list, index, url);
  });
};

const JournalsRouter = (match) => (
  <Router>
    <div>
      <ul style={{
        float: 'left',
        marginRight: '30px'
      }}>
        {getRouters(match.url)}
      </ul>
      {/* <Route exact path={`${match.url}/`} component={First} /> */}
      <Route path={`${match.url}/1`} component={First} />
      <Route path={`${match.url}/2`} component={Second} />
      <Route path={`${match.url}/3`} component={Third} />
    </div>
  </Router>
);

class Journals extends Component {
  render() {
    return (
      <div>
        {JournalsRouter(this.props.match)}
      </div>
    );
  }
}

export default Journals;
