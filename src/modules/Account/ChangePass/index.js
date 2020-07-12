import React, { useState } from 'react'
import {Alert} from 'react-native'
import { Header } from '../../../components'
import {Account} from '../../Login/atom'
import {isLoadingAccount} from '../atom'
import {useRecoilState} from 'recoil'
import {submitChangePass} from '../selector'
import Routes from '../../../utils/Routes'
import {
  Wrapper,
  ViewComponent,
  TxtTitle,
  ViewIP,
  TxtIP,
  Bt,
  TxtBt,
  BtSave,
  TxtSave
} from './styled'
function index(props) {

  const {navigation} = props

  const [accountState, setAccountState] = useRecoilState(Account)
  const [isLoadingAccountState, setIsLoadingAccountState] = useRecoilState(isLoadingAccount)

  const [passOld, setPassOld] = useState('')
  const [passNew, setPassNew] = useState('')
  const [hidePassOld, setHidePassOld] = useState(true)
  const [hidePassNew, setHidePassNew] = useState(true)

  async function ChangePass() {
    if(passOld == accountState.passWord) {
      if(passNew == passOld) {
        Alert.alert('Thông báo', 'Mật khẩu mới không được trùng với mật khẩu cũ, vui lòng nhập lại.')
      } else {
        debugger
     const changePassSuccess = await submitChangePass(accountState.idUser, passNew, setIsLoadingAccountState)
     changePassSuccess.success ?
     Alert.alert('Thành công', 'Đổi mật khẩu thành công.', [
       {
         text: 'OK',
         onPress:()=> navigation.push(Routes.login)
       }
     ])
     :  Alert.alert('Thất bại', 'Có lỗi xảy ra, vui lòng thử lại.')
    }
    } else {
      Alert.alert('Thông báo', 'Mật khẩu cũ không đúng vui lòng nhập lại!')
    }
  }
  return (
    <Wrapper>
      <Header navigation = {navigation} title = 'Thay đổi mật khẩu'/>
      <ViewComponent>
        <TxtTitle>Mật khẩu cũ</TxtTitle>
        <ViewIP>
          <TxtIP
            placeholder = 'Nhập mật khẩu cũ'
            onChangeText = {txt => setPassOld(txt)}
            value = {passOld}
            secureTextEntry = {hidePassOld}
          />
          {
            passOld ? 
            <Bt onPress = {() => setHidePassOld(!hidePassOld)} >
              {
                hidePassOld ? <TxtBt>Hiện</TxtBt> : <TxtBt>Ẩn</TxtBt>
              }
            </Bt>
            : null
          }
          
        </ViewIP>
      </ViewComponent>
      <ViewComponent style = {{marginTop: 10}} >
        <TxtTitle>Mật khẩu mới</TxtTitle>
        <ViewIP>
          <TxtIP
            placeholder = 'Nhập mật khẩu mới'
            onChangeText = {txt => setPassNew(txt)}
            value = {passNew}
            secureTextEntry = {hidePassNew}
          />
           {
            passNew ? 
            <Bt onPress = {() => setHidePassNew(!hidePassNew)} >
              {
                hidePassNew ? <TxtBt>Hiện</TxtBt> : <TxtBt>Ẩn</TxtBt>
              }
            </Bt>
            : null
          }
        </ViewIP>
      </ViewComponent>
      <BtSave
        onPress = {()=> ChangePass()}>
        <TxtSave>Lưu</TxtSave>
      </BtSave>
    </Wrapper>
  )
  }

export default index