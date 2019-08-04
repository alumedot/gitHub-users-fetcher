import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {Spinner} from 'react-bootstrap';

import classes from './MainPageElements.module.css';

const mainPageElements = (props) => (
    <Row className='justify-content-center' style={{padding: '0 30px'}}>
      <Col xs={12} lg={6} className={classes.MainPageElements}>
        <h1>Hey there!</h1>
        <br/>
        <Link to={'/users'} className={classes.GoToUsers}>10 random users</Link>
        <p className={classes.Or}><strong>OR</strong></p>
        <p className={classes.SearchText}>Search for some Person:</p>
        {!props.loading ? <React.Fragment>
          <input onKeyPress={props.searchEnter}
                 value={props.value}
                 onChange={props.changed}
                 type='text'/>
          <button onClick={props.search} disabled={!props.value}>Go!</button>
          {props.error ? <p className={classes.Error}>Can't find this person, try again</p> : null}
        </React.Fragment>: <Spinner animation="border" size="sm" />}
      </Col>
    </Row>
);

export default mainPageElements;