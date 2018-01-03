import React from 'react'
import {
  HashRouter as Router,Route, Link, NavLink, Switch} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)


class Jokes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    //Could be a place to fethc data, WHY ??
  }
  render() {
    return (
      <div>
        <p>Change this view to show all jokes (only show the setup property) </p>
        <ul>
        </ul>
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/jokes">Jokes </NavLink></li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/jokes" component={Jokes} />
      </Switch>
    </div>
  </Router>
)
export default App;
