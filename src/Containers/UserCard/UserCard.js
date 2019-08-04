import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';

import classes from './UserCard.module.css';
import * as Icons from '../../Components/UI/icons/icons';
import ErrorMessage from '../../Components/UI/ErrorMessage/ErrorMessage';
import ReposList from '../ReposList/ReposList';
import * as actions from '../../store/actions/index';

class UserCard extends Component {

  componentDidMount() {
    this.props.onFetchUser(this.props.match.params.login);
    this.props.onFetchRepos(this.props.match.params.login);
  }

  render() {
    let userCard = this.props.error ?
        <ErrorMessage message={this.props.error.message}/>
        : <Spinner style={{margin: '0 auto'}} animation="border" />;
    if (this.props.loadedUser) {

      let location = null;
      if (this.props.loadedUser.location) {
        location = (
            <div>
              {Icons.locationIcon}<p className={classes.Bio}>{this.props.loadedUser.location}</p>
            </div>
        );
      }

      let email = null;
      if (this.props.loadedUser.email) {
        email = (
            <div>
              {Icons.emailIcon}<a href={`mailto:${this.props.loadedUser.email}`}
                                  className={classes.Bio}>{this.props.loadedUser.email}</a>
            </div>
        );
      }

      let blogLink = null;
      if (this.props.loadedUser.blog) {
        blogLink = (
            <div>
              {Icons.blogIcon}<a href={this.props.loadedUser.blog}
                                 target='_blank'
                                 rel='nofollow me noopener noreferrer'
                                 className={classes.Bio}>{this.props.loadedUser.blog}</a>
            </div>
        );
      }

      let company = null;
      if (this.props.loadedUser.company) {
        company = (
            <div>
              {Icons.companyIcon}<p className={classes.Bio}>{this.props.loadedUser.company}</p>
            </div>
        );
      }

      userCard = (
        <Row className={classes.UserCard}>
          <Col xs={12} sm={5} md={4} lg={3}>
            <Row>
              <Col xs={6} sm={10} md={12} className={classes.UserImg}>
                {!this.props.loading ? <img
                    style={this.props.loading ? {display: 'none'} : {}}
                    src={this.props.loadedUser.avatar_url}
                    alt={this.props.loadedUser.login}/> : <Spinner animation="border" size="sm" />}
              </Col>
            </Row>
            <Row>
              {!this.props.loading ? <Col xs={12} className={classes.UserBio}>
                <p className={classes.UserName}>{this.props.loadedUser.name}</p>
                <p className={classes.UserLogin}>{this.props.loadedUser.login}</p>
                {company}
                {location}
                {email}
                {blogLink}
                <hr/>
              </Col> : null}
            </Row>
          </Col>
          <Col xs={12} sm={7} md={8} lg={9}>
            <ReposList login={this.props.loadedUser.login}/>
          </Col>
        </Row>
      );
    }
    return (
        <React.Fragment>
          {userCard}
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loadedUser: state.userCard.loadedUser,
    error: state.userCard.error,
    loading: state.userCard.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (login) => dispatch(actions.fetchUser(login)),
    onFetchRepos: (login) => dispatch(actions.fetchRepos(login)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);