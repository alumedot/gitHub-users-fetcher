import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import UsersList from '../UsersList/UsersList';
import UserCard from '../UserCard/UserCard';
import MainPage from '../MainPage/MainPage';
import Repo from "../Repo/Repo";

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/users/:login/:repo/' component={Repo} />
        <Route path='/users/:login' component={UserCard}/>
        <Route path='/users' component={UsersList} />
        <Route path='/' exact component={MainPage}/>
      </Switch>
    );
  }
}

export default App;
