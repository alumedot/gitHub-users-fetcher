import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import ErrorMessage from '../../Components/UI/ErrorMessage/ErrorMessage';
import UserPreview from '../../Components/UserPreview/UserPreview';
import classes from './UsersList.module.css';
import * as actions from '../../store/actions/index';

class UsersList extends Component {

  componentDidMount() {
    this.props.onFetchUsers();
  }

  nextTenHandler = () => {
    this.props.onFetchUsers();
  };

  render() {
    let list = this.props.error ? <ErrorMessage message={this.props.error.message} /> : <Spinner style={{margin: '0 auto'}} animation="border" />;
    if (this.props.users) {
      list = this.props.users.map((user) => {
        return (
          <Col key={user.id} xs={12} sm={6} lg={4}>
            <Link to={'/users/' + user.login} key={user['id']}>
              <UserPreview
                  login={user['login']}
                  image={user['avatar_url']}/>
            </Link>
          </Col>
        )
      });
    }

    return (
        <React.Fragment>
          <Row>
            <Col className={classes.NextTen}>
              <button onClick={this.nextTenHandler}>Next 10 users</button>
            </Col>
          </Row>
          <Row className={classes.UsersList}>
            {list}
          </Row>
        </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersList.users,
    error: state.usersList.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);