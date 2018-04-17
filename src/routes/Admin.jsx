import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
import UserAdd from '../components/UserAdd';
import Cookies from 'universal-cookie';
import { Grid, Row, Col } from 'react-bootstrap';

const cookies = new Cookies();
var axios = require('axios');

class Admin extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    this.state = {
      users: []
    };

    this.users_show = this.users_show.bind(this);
    this.error = this.error.bind(this);
    this.user_add = this.user_add.bind(this);
    this.user_delete = this.user_delete.bind(this);
  }

  error(){
    cookies.remove('market_admin_co', { path: '/', secure: true });
    window.location = '/';
  }

  user_delete(email, index){
    var this_=this;
    axios({
      url: 'https://'+process.env.HOST_RAILS+'/api/admin/user_delete',
      method: 'delete',
      headers: {'Token': this_.props.g_currentUser['token']},
      data: {
        email: email,
      }
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          let users = this_.state.users;
          users['users'].splice(index, 1);
          this_.setState({
            users: users
          });
        }
      }
    })
    .catch(function (response) {
      if (response.response){
        // this_.setState({
        //   error: response.response.data.error
        // });
      }else{
        // this_.setState({
        //   error: 'Server connection error'
        // });
      }
    });
  }

  user_add(user){
    let users = this.state.users;
    users['users'].push(user);
    this.setState({
      users: users
    });
  }

  users_show(token){
    var this_=this;
    axios({
      url: 'https://'+process.env.HOST_RAILS+'/api/admin/users',
      method: 'post',
      headers: {'Token': token}
    }).then(function (response) {
      if (response){
        if (response['data']){
          //if (response['data'].isArray) {
          this_.setState({users: response['data']});
          //}
          return;
        }
      }
      this_.error();
    })
    .catch(function (response) {
      this_.error();
    });
  }

  componentDidMount(){
    var this_=this;
    var response_params = {method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification'};

    var token_cookie = cookies.get('market_admin_co');
    if (token_cookie){
      response_params['headers'] = {'Token': token_cookie};
    }else{
      response_params['headers'] = {'Token': this_.props.g_currentUser['token']};
    }

    axios(response_params).then(function (response) {
      if (response){
        if (response['data']){
          if (response['data']['email'] === process.env.ADMIN_EMAIL) {
            this_.props.g_tokenChange(response['data']['token']);
            cookies.set('market_admin_co', response['data']['token'], { path: '/', secure: true });
            this_.users_show(response['data']['token']);
            return;
          }
        }
      }
      this_.error();
    })
    .catch(function (response) {
      this_.error();
    });
  }

  render() {
    //const {user_add} = this.props;
    const {users} = this.state;
    return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col sm={12}>
            <Logout facebook_logout={false}/>
            <br/><br/>
            <UserAdd user_add={this.user_add}/>
            <br/><br/>
            <table className="admin_table">
              <tbody>
              <tr>
                <td className="title">
                  Email
                </td>
                <td className="title">
                  Name
                </td>
                <td>

                </td>
              </tr>
              {users['users'] && users['users'].map((key, idx) => {
                return (
                <tr key={idx}>
                  <td>
                    {key['email']}
                  </td>
                  <td>
                    {key['name']}
                  </td>
                  <td>
                    { key['email']!==process.env.ADMIN_EMAIL &&
                      <div className="delete" onClick={() => this.user_delete(key['email'], idx)}>Delete</div>
                    }
                  </td>
                </tr>
                );
              })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default connect(
state => ({
  g_currentUser: state.currentUser
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Admin);