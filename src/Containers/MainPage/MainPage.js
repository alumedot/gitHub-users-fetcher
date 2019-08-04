import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

import MainPageElements from '../../Components/MainPageElements/MainPageElements';

class MainPage extends Component {
  state = {
    inputValue: '',
    login: null,
    searchSuccess: false,
  };

  inputChangeHandler = (event) => {
    const val = event.target.value.replace(/\s+/g, '');
    this.setState({
      inputValue: val,
    });
  };

  searchHandler = async () => {
    await this.props.onFetchUser(this.state.inputValue);
    if (!this.props.error) {
      await this.setState({
        login: this.props.loadedUser.login,
      })
    }

  };

  searchHandlerEnter = async(event) => {
    if (event.key === 'Enter' && this.state.inputValue) {
      await this.props.onFetchUser(this.state.inputValue);
      if (!this.props.error) {
        await this.setState({
          login: this.props.loadedUser.login,
        })
      }
    }
  };

  componentDidUpdate() {
    if (this.state.login) {
      this.props.history.push(`/users/${this.state.login}`);
    }
  };

  render() {
    return (
      <React.Fragment>
        <MainPageElements
            error={this.props.error}
            searchEnter={this.searchHandlerEnter}
            loading={this.props.loading}
            search={this.searchHandler}
            value={this.state.inputValue}
            changed={this.inputChangeHandler} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.userCard.loading,
    error: state.userCard.error,
    loadedUser: state.userCard.loadedUser,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (login) => dispatch(actions.fetchUser(login)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);