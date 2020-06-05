import React, { useState } from 'react'
import {Image} from 'react-native'
import {Header} from '../../../../components'
import Colors from '../../../../utils/Colors'
import Routes from '../../../../utils/Routes'
import {
  Wrapper,
  TxtUserName,
  Bt,
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

  const [hideTitleEmail, SetHideTitleEmail] = useState(false)
  const [hideTitleSDT, SetHideTitleSDT] = useState(false)
  const [hideTitleFullName, SetHideTitleFullName] = useState(false)
  const [txtEmail, SettxtEmail] = useState('')
  const [txtSDT, SettxtSDT] = useState('')
  const [txtFullName, SettxtFullName] = useState('')

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
          {renderInput(hideTitleFullName, 'Họ & tên', 'Full name...', SettxtFullName, SetHideTitleFullName, txtFullName, SetHideTitleSDT, SetHideTitleEmail)}
          {renderInput(hideTitleEmail, 'Email', 'Email...', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitleSDT, SetHideTitleFullName)}
          {renderInput(hideTitleSDT, 'Số điện thoại', 'SĐT...', SettxtSDT, SetHideTitleSDT, txtSDT, SetHideTitleEmail, SetHideTitleFullName)}
      </View>
  )        
}
  return (
    <Wrapper>
      <Image source = {{uri: 'https://toplist.vn/images/800px/ha-noi-thu-do-ngan-nam-van-hien-14173.jpg'}}
           style = {{width: '100%', height: '25%', position: 'absolute'}} />
      <Header navigation = {navigation} title = 'Chỉnh sửa trang cá nhân' transparent
          onCLick = {() => navigation.navigate(Routes.setting)}
      />
      <Bt>
        <Image source = {{uri: 'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg'}}
              style = {{width: 90, height: 90, borderRadius: 95, alignSelf: 'center', marginTop: '20%', borderWidth: 2, borderColor: Colors.white_4}} />
      </Bt>
      <Bt>
        <TxtUserName>Đổi ảnh đại diện</TxtUserName>
      </Bt>
      {renderTxtIP()}
      <BtLogin onPress = {() => null} >
        <TxtBtLogin>Lưu thay đổi</TxtBtLogin>
      </BtLogin>
    </Wrapper>
  )
}

export default index
