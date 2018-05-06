import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar-component';
import Home from '../home/home-container';
import Matches from '../matches/matches-container';
import Characters from '../characters/characters-container';
import About from '../about/about-container';

class App extends Component {
  state = {
    openMenu: false
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu
    }))
  }

  render() {
    return (
      <div>
        <Navbar open={this.state.openMenu} toggle={this.toggleMenu}/>
        <main key={window.location.href}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/characters/:page" component={Characters} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/comics/:page" component={Matches} />
            <Route exact path="/comics" component={Matches} />
            <Redirect from="/comic" to="/comics"/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
