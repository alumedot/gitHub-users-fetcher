import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";

class UserPreviewImage extends Component {
  state = {
    imageLoading: true,
  };

  render() {
    return (
      <React.Fragment>
        {this.state.imageLoading ? <Spinner animation="border" size="sm" /> : null}
        <img
          style={this.state.imageLoading ? {display: 'none'} : {}}
          onLoad={() => this.setState({imageLoading: false})}
          src={this.props.src}
          alt={this.props.alt}/>
      </React.Fragment>
    )
  }
}

export default UserPreviewImage;