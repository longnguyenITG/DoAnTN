import React from 'react'
import {Image} from 'react-native'
// import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {LoginManager} from 'react-native-fbsdk'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import iconLogin from '../../../assets/image/d1e285affc590ce2e87fd225aacfd15a.png'
import iconLoginFB from '../../../assets/image/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art-thumbnail.png'
import {
  Wraper,
  TxtTitle,
  LoginBT,
  WraperTitle,
  TxtTitleMore,
  TxtLogin,
  View
} from './styled'

function Login(props) {

  const {navigation} = props
  function renderTitle() {
    return(
      <WraperTitle>        
        <Image  
            style = {{width: 170, height: 150, marginTop: 20, marginBottom: 10}} 
            source = {iconLogin} /> 
            <TxtTitle>JOURNEY</TxtTitle>
        <TxtTitleMore>Exciting</TxtTitleMore>
      </WraperTitle>
    )
  }
  function renderRegistrationWithApp() {
    return(
      <LoginBT style = {{borderColor: Colors.primary_2, borderWidth: 2, backgroundColor: Colors.white}}>
        <View 
          style = {{justifyContent: 'center'}}>       
          <TxtLogin
            style = {{color: Colors.primary_2}}
          >Tạo tài khoản Exciting Journey</TxtLogin>        
        </View>
      </LoginBT>
    )
  }
  function renderLoginWithApp() {
    return(
      <LoginBT
        onPress = {() => navigation.navigate(Routes.loginapp)}
      >
        <View>   
          <Image  style = {{width: 22, height: 22, marginRight: 18}} 
                  source = {iconLogin} />     
          <TxtLogin>Đăng nhập với Exciting Journey</TxtLogin>        
        </View>
      </LoginBT>
    )
  }

  function  handleFacebookLogin () {
    LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled')
        } else {
          console.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  function renderLoginWithFB() {
    return(
      // <LoginButton
      //   style = {{width: '70%', height: 40, marginBottom: 10}}
      //   onLoginFinished={(error, result) => {
      //     if (error) {
      //       console.log('login has error: ' + result.error);
      //     } else if (result.isCancelled) {
      //       console.log('login is cancelled.');
      //     } else {
      //       AccessToken.getCurrentAccessToken().then(data => {
      //         console.log(data.accessToken.toString());
      //       });
      //     }
      //   }}
      //   onLogoutFinished={() => console.log('logout.')}
      // /> 
      <LoginBT
        style = {{backgroundColor: Colors.primary_2}}
        onPress = {()=> handleFacebookLogin()}
      >
        <View>   
          <Image  style = {{width: 24, height: 24, marginRight: 18}} 
                  source = {iconLoginFB} />     
          <TxtLogin style = {{marginLeft: 15}}>Đăng nhập với FaceBook</TxtLogin>        
        </View>
      </LoginBT>
    )
  }
  return (
    <Wraper>   
      {renderTitle()}
      {renderLoginWithFB()}
      {renderLoginWithApp()}
      {renderRegistrationWithApp()}
      <TxtLogin
            style = {{color: Colors.primary_2, marginTop: 200}}
          >~~ Good luck to everyone ~~</TxtLogin>
    </Wraper>
  )
}
export default Login;
