import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar-component';
import Footer from '../../components/footer/footer-component';
import Home from '../home/home-container';
import Signin from '../access/signin-container';
import Signup from '../access/signup-container';
import CurrentMatches from '../matches/current-matches-container';
import MatchArchive from '../matches/matches-archive-container';
import Match from '../matches/match-container';
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
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Route path="/characters/:page" component={Characters} />
            <Route exact path="/characters" component={Characters} />
            <Redirect from="/character" to="/characters"/>
            <Route exact path="/comics" component={CurrentMatches} />
            <Route path="/comics/archive/:page" component={MatchArchive} />
            <Route path="/comic/:id" component={Match} />
            <Redirect from="/comics/archive" to="/comics/archive/1"/>
            <Redirect exact from="/comic" to="/comics"/>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
