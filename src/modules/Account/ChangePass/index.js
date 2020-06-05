import React, { useState } from 'react'
import { Header } from '../../../components'
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

  const [passOld, setPassOld] = useState('')
  const [passNew, setPassNew] = useState('')
  const [hidePassOld, setHidePassOld] = useState(true)
  const [hidePassNew, setHidePassNew] = useState(true)
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
      <BtSave>
        <TxtSave>Lưu</TxtSave>
      </BtSave>
    </Wrapper>
  )
  }

export default index