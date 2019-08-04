import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {Spinner} from 'react-bootstrap';

import classes from './Repo.module.css';
import * as Icons from '../../Components/UI/icons/icons';
import ErrorMessage from '../../Components/UI/ErrorMessage/ErrorMessage';
import * as actions from '../../store/actions/index';

class Repo extends Component {
  state = {
    currentRepo: null,
  };

  componentDidMount() {
    this.props.onFetchRepoReadme(this.props.match.params.login, this.props.match.params.repo);
    this.props.onFetchRepoContent(this.props.match.params.login, this.props.match.params.repo);
    this.props.onFetchRepos(this.props.match.params.login);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.reposList) {
      const currentRp = this.props.reposList.filter(rp => rp.name === this.props.match.params.repo);
      if(!this.state.currentRepo) {
        this.setState({currentRepo: currentRp[0]});
      }
    }
  }

  render() {
    let repoName = null;
    let repoDescription = null;
    if (this.state.currentRepo) {
      repoName = this.state.currentRepo.name;
      repoDescription = this.state.currentRepo.description;
    }

    let repoContent = this.props.loadingContent ? <Spinner style={{margin: '40px auto', display: 'block'}} animation="border" />
        : this.props.errorContent ? <ErrorMessage message={this.props.errorContent.message}/>
        : null;

    if (!this.props.loadingContent && this.props.repo) {
      const repoDirsFiltered = this.props.repo.filter(rp => rp.type === 'dir' ? rp : '');

      // const reg = new RegExp('(README)', 'g');
      const repoFilesFiltered = this.props.repo.filter(rp => rp.type === 'file' ? rp : '');

      const repoDirs = repoDirsFiltered.map(rp => {
        return (
          <Row key={rp.name}>
            <Col style={{display: 'inline-block'}}>
              {Icons.dirIcon}
              <p className={classes.Name}>{rp.name}</p>
            </Col>
          </Row>
        )
      });

      const repoFiles = repoFilesFiltered.map(rp => {
        return (
            <Row key={rp.name}>
              <Col style={{display: 'inline-block'}}>
                {Icons.fileIcon}
                <p className={classes.Name}>{rp.name}</p>
              </Col>
            </Row>
        )
      });

      repoContent = repoDirs.concat(repoFiles);
    }

    let repoReadme = this.props.loadingReadme ? <Spinner style={{margin: '40px auto', display: 'block'}} animation="border" />
        : this.props.errorReadme ? null : '';
    let readmeRender = null;

    if (!this.props.loadingReadme && this.props.readme) {
      repoReadme = <React.Fragment>
        <a className={classes.ReadmeLink}
           href={`data:application/octet-stream;charset=utf-8;${this.props.readme.encoding},${this.props.readme.content}`}>
          {this.props.readme.name}{Icons.downloadIcon}
        </a>
        <hr/>
      </React.Fragment>;

      const readmeContent = window.atob(this.props.readme.content);
      readmeRender = <React.Fragment>
          <hr/>
          <Row>
            <Col className={classes.RepoContent}>
              <pre lang="xml">{readmeContent}</pre>
            </Col>
          </Row>
      </React.Fragment>;

    }
    // if (this.props.readme) {
    // };
    return (
      <React.Fragment>
        <Row className={classes.RepoHeader}>
          <Col>
            <h1>{repoName}</h1>
            <p>{repoDescription}</p>
          </Col>
        </Row>
        <Row>
          <Col className={classes.Readme}>
            <hr/>
            {repoReadme}
          </Col>
        </Row>
        <Row>
          <Col className={classes.RepoContent}>
            {repoContent}
          </Col>
        </Row>
        {readmeRender}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    reposList: state.reposList.repos,
    repo: state.repo.repository,
    readme: state.repo.readme,
    errorContent: state.repo.errorContent,
    errorReadme: state.repo.errorReadme,
    loadingContent: state.repo.loadingContent,
    loadingReadme: state.repo.loadingReadme,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchRepoContent: (login, name) => dispatch(actions.fetchRepoContent(login, name)),
    onFetchRepoReadme: (login, name) => dispatch(actions.fetchRepoReadme(login, name)),
    onFetchRepos: (login) => dispatch(actions.fetchRepos(login)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Repo);