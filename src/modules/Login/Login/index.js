import React, {useState, useEffect} from 'react'
import {Image, Alert} from 'react-native'
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {LoginManager} from 'react-native-fbsdk'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import iconLogin from '../../../assets/image/d1e285affc590ce2e87fd225aacfd15a.png'
import iconLoginFB from '../../../assets/image/facebook-scalable-graphics-icon-facebook-logo-facebook-logo-png-clip-art-thumbnail.png'
import {useRecoilState} from 'recoil'
import {isLoadingAuthen, listAccount} from '../atom'
import {getListAccount, uploadAccount} from '../selector'
import {Loading} from '../../../components'
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

  const {navigation, route} = props

  const [isLoadingState, setIsLoadingState] = useRecoilState(isLoadingAuthen)
  const [listAccountState, setListAccountState] = useRecoilState(listAccount)

  useEffect(()=> {
    getListAccount(setListAccountState, setIsLoadingState)
  }, [])

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
      <LoginBT style = {{borderColor: Colors.primary_2, borderWidth: 2, backgroundColor: Colors.white}}
        onPress = {() => navigation.navigate(Routes.registration)}
      >
        <View 
          style = {{justifyContent: 'center'}}>       
          <TxtLogin style = {{color: Colors.primary_2}}>Tạo tài khoản Exciting Journey</TxtLogin>        
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

  function getInfoWithFB(token) {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
      if(json){
        let index = listAccountState.findIndex(e => e.userName == json.email)
        if(index < 0) {
          uploadAccount(json.email, '1234', json.name, '1234')
          navigation.navigate(Routes.home)
        } else {
          navigation.navigate(Routes.home)
        }
      }else{
        Alert.alert('Thông báo', 'Không lấy được dữ liệu FaceBook, vui lòng kết nối lại...')
      }
        
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  function  handleFacebookLogin () {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
          const { accessToken } = data
          getInfoWithFB(accessToken)
        })
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      }
    );
  }

  function renderLoginWithFB() {
    return(
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
  function renderLoading(){
    return(
      <Loading isVisible={isLoadingState} />
    )
  }
  return (
    <Wraper>   
      {renderTitle()}
      {renderLoginWithFB()}
      {renderLoginWithApp()}
      {renderRegistrationWithApp()}
      {renderLoading()}
      <TxtLogin
          style = {{color: Colors.primary_2, marginTop: 200}}>
          ~~ Good luck to everyone ~~
      </TxtLogin>
    </Wraper>
  )
}
export default Login;
