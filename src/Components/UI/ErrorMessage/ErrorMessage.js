import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

import classes from './ErrorMessage.module.css';

class ErrorMessage extends Component {

  state = {
    redirect: false,
  };

  onCloseHandler = () => {
    this.setState({redirect: true});
  };

  render() {
    let alertMes = <Redirect to='/' />;
    if (!this.state.redirect) {
      alertMes = (
          <Alert className={classes.ErrorMessage}
                 variant="danger"
                 onClose={() => this.onCloseHandler()}
                 dismissible>
            <Alert.Heading>{this.props.message}</Alert.Heading>
          </Alert>
      );
    }
    return alertMes;
  }
}

export default ErrorMessage;