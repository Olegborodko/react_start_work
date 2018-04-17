import React, { Component } from 'react';
import FacebookBtn from '../components/FacebookBtn.jsx';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

class Facebook extends Component {
  render() {
    return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col sm={12}>
      <FacebookBtn/>
      <br/><br/>
      <FacebookLoginStatus
      facebookApi={ process.env.FACEBOOK_API }
      linkToDashboard = '/dashboard'
      linkToLogin = '/facebook'
      history = {this.props.history}
      />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Facebook;