import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import UsersList from '../UsersList/UsersList';
import UserCard from '../UserCard/UserCard';
import MainPage from '../MainPage/MainPage';
import Repo from "../Repo/Repo";
import ErrorMessage from '../../Components/UI/ErrorMessage/ErrorMessage';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/users/:login/:repo/' component={Repo} />
        <Route path='/users/:login' component={UserCard}/>
        <Route path='/users' exact component={UsersList} />
        <Route path='/' exact component={MainPage}/>
        <Route render={() => <ErrorMessage message='Page not found 404'/>} />
      </Switch>
    );
  }
}

export default App;
