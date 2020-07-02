import React, {useState} from 'react'
import {Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../../utils/Colors'
import {useSafeArea} from 'react-native-safe-area-context'
import {listAccount} from '../atom'
import {useRecoilState} from 'recoil'
import {
  Wrapper,
  BackBT,
  TxtTitle,
  TxtHelp,
  ViewIP,
  TxtIpTitle,
  WrapperIP,
  TxtIpEmail,
  View,
  BtLogin,
  TxtBtLogin
} from './styled'
function index(props) {

  const {navigation} = props
  const insets = useSafeArea();

  const [listAccountState, setListAccount] = useRecoilState(listAccount)

  const [hideTitleEmail, SetHideTitleEmail] = useState(false)
  const [hideTitleSDT, SetHideTitleSDT] = useState(false)
  const [hideTitleFullName, SetHideTitleFullName] = useState(false)
  const [txtEmail, SettxtEmail] = useState('')
  const [txtSDT, SettxtSDT] = useState('')
  const [txtFullName, SettxtFullName] = useState('')
  const [txtPassWord, setTxtPassWord] = useState('')

  function renderInput(hideTitle, txtTitle, playHoder, setText, setHide, value, setHideMore, setHideMore1){
    return(
        <ViewIP>
            {hideTitle ? <TxtIpTitle>{txtTitle}</TxtIpTitle> : null}
            <WrapperIP >
                    <TxtIpEmail 
                        placeholder = {playHoder}
                        onChangeText = {text => setText(text)}
                        onFocus = {() => {
                            setHide(true)
                            setHideMore(false)
                            setHideMore1(false)
                        }}
                        value = {value}
                        // secureTextEntry = {hidePass ? seePass : false}
                        />  
            </WrapperIP>
        </ViewIP>
    )
}

  function renderTxtIP() {
    return(
        <View>
            {renderInput(hideTitleEmail, 'User', 'User...', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitleSDT, SetHideTitleFullName)}
            {renderInput(hideTitleFullName, 'Họ & tên', 'Full name...', SettxtFullName, SetHideTitleFullName, txtFullName, SetHideTitleSDT, SetHideTitleEmail)}
            {renderInput(hideTitleSDT, 'Số điện thoại', 'SĐT...', SettxtSDT, SetHideTitleSDT, txtSDT, SetHideTitleEmail, SetHideTitleFullName)}
        </View>
    )        
  }

  function eventRecoverPass() {
    const index = listAccountState.findIndex(e => e.userName.toUpperCase() == txtEmail.toUpperCase() && e.fullName.toUpperCase() == txtFullName.toUpperCase() && e.sdt.toUpperCase() == txtSDT.slice(1, txtSDT.length))
    index >= 0 ? setTxtPassWord(listAccountState[index].passWord)
    : Alert.alert('Thông báo', 'Thông tin không chính xác!', [
      {
        text: 'OK',
        onPress: () => setTxtPassWord('')
      }
    ])
    
  }

  return (
    <Wrapper
      style = {{
                  paddingTop: insets.top,
                  paddingBottom: insets.bottom,
                  paddingLeft: insets.left,
                  paddingRight: insets.right
              }}>
        <BackBT onPress = {() => navigation.goBack()} >
          <Icon name = 'md-arrow-back' size = {25} />
        </BackBT>
        <TxtTitle>Quên mật khẩu?</TxtTitle>
        <TxtHelp>Vui lòng nhập thông tin cần thiết để lấy lại mật khẩu.</TxtHelp>
        {renderTxtIP()}
        {
          txtPassWord ?
          <View>
            <TxtHelp>Mật khẩu của bạn là:</TxtHelp>
            <TxtHelp style = {{color: Colors.red}}>{txtPassWord}</TxtHelp>
          </View>
          : null
        }
        <BtLogin onPress = {() => eventRecoverPass()} >
          <TxtBtLogin>Lấy mật khẩu</TxtBtLogin>
        </BtLogin>
    </Wrapper>
  )
}

export default index
