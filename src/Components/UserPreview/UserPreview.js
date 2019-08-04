import React from 'react';

import {Row, Col} from 'react-bootstrap';
import classes from './UserPreview.module.css';
import UserPreviewImage from './UserPreviewImage';

const userPreview = (props) => {
  return (
      <Row className={classes.User}>
        <Col xs={6}>
          <UserPreviewImage src={props.image} alt={props.login}/>
        </Col>
        <Col className={classes.Bio} xs={6}>
          <p><strong>{props.login}</strong></p>
        </Col>
      </Row>
  )
};

export default userPreview;