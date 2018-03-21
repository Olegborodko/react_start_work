import React, { Component } from 'react';

class FacebookLoginStatus extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    //this.state = {
    //  bounty_program: 0
    //};

    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  componentDidMount(){
    console.log(process.env.FACEBOOK_API);
    var this_ = this;

    window.fbAsyncInit = function(){
      window.FB.init({
        appId      : process.env.FACEBOOK_API,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
      });

      window.FB.AppEvents.logPageView();

      window.FB.getLoginStatus(function(response) {
        this_.statusChangeCallback(response);
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback(response){
    console.log(response['status']);
    if (response['status']==="connected"){
      //window.location.href = gon.dashboard_path;
    }else{
      //console.log(response['status']);
    }
  }

  // statusCheck(){
  //   var status = '';
  //   window.FB.getLoginStatus(function(response) {
  //     status = response;
  //   });
  //   return status;
  // }

  render() {
    return (
    <div>

    </div>
    );
  }
}

export default FacebookLoginStatus;