import React, {Component} from 'react';
import {Container} from "react-bootstrap";

import Layout from '../../hoc/Layout/Layout';
import UserCreation from '../UserCreation/UserCreation';
import './App.css';

class App extends Component {
  render() {
    return (
        <Layout>
          <Container fluid className="App">
            <UserCreation />
          </Container>
        </Layout>

    );
  }
}

export default App;
