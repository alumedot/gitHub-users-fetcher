import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import classes from './Repo.module.css';

const repoPreview = (props) => {
  let text = props.description;
  text = text !== null && text.length > 100 ? text.substring(0, 100) + '...' : text;
  return (
  <Col xs={12} md={6} style={{height: '150px', padding: '10px'}}>
    <Row className={classes.Repo}>
      <Col>
        <Row>
          <Col>
            <Link to={`/users/${props.login}/${props.name}`}>
              <strong>{props.name}</strong>
            </Link>
          </Col>
        </Row>
        <Row className={classes.Text}>
          <Col>
            {text}
          </Col>
        </Row>
        <Row className={classes.RepoLanguage}>
          <Col>
            <span className={classes.RepoLanguageColor}></span>{props.language}
          </Col>
          <Col>

          </Col>
          <Col>

          </Col>
        </Row>
      </Col>
    </Row>
  </Col>
  )
};

export default repoPreview;