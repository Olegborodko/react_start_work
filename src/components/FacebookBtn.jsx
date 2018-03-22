import React, { Component } from 'react';

class FacebookBtn extends Component {
  componentDidMount(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=1708152749243151&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div className="fb-login-button"
         data-max-rows="1"
         data-size="medium"
         data-button-type="login_with"
         data-show-faces="false"
         data-auto-logout-link="true"
         data-use-continue-as="false">
      </div>
    );
  }
}

export default FacebookBtn;