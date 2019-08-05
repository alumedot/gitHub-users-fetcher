import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'react-bootstrap';

import {Row} from 'react-bootstrap';
import RepoPreview from '../../Components/RepoPreview/RepoPreview';
import * as actions from '../../store/actions/index';
import ErrorMessage from '../../Components/UI/ErrorMessage/ErrorMessage';

class ReposList extends Component {

  render() {
    let repos = this.props.loading ? <Spinner style={{margin: '40px auto'}} animation="border" />
        : this.props.error ? <ErrorMessage message={this.props.error.message} /> : null;
    if (this.props.repos && !this.props.loading) {
      repos = this.props.repos.map(repo => {
        return <RepoPreview
            login={this.props.loadedUser.login}
            key={repo.id}
            stargazers={repo.stargazers_count}
            defaultBranch={repo.default_branch}
            language={repo.language}
            description={repo.description}
            name={repo.name} />
      });
    }
    return (
        <Row >
          {repos}
        </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadedUser: state.userCard.loadedUser,
    repos: state.reposList.repos,
    error: state.reposList.error,
    loading: state.reposList.loading,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRepos: (login) => dispatch(actions.fetchRepos(login)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReposList);