import React, { useState } from 'react'
import {Image, Alert} from 'react-native'
import {Header} from '../../../../components'
import Colors from '../../../../utils/Colors'
import Routes from '../../../../utils/Routes'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
import Constant from '../../../../utils/Constants'
import {Account} from '../../../Login/atom'
import {isLoadingAccount} from '../../atom'
import {useRecoilState} from 'recoil'
import {Loading} from '../../../../components'
import {getAccountUpdated} from '../../selector'

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
  const {navigation, route} = props
  const {dataAccount} = route.params

  const [accountState, setAccountState] = useRecoilState(Account)
  const [isLoadingAccountState, setIsLoadingAccountState] = useRecoilState(isLoadingAccount)

  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [hideTitleEmail, SetHideTitleEmail] = useState(false)
  const [hideTitleSDT, SetHideTitleSDT] = useState(false)
  const [hideTitleFullName, SetHideTitleFullName] = useState(false)
  const [txtEmail, SettxtEmail] = useState(dataAccount.email)
  const [txtSDT, SettxtSDT] = useState(dataAccount.sdt)
  const [txtFullName, SettxtFullName] = useState(dataAccount.fullName)
  const [image, setImage] = useState(dataAccount.image)
  const [data, setData] = useState('')

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
  function everImagePicker(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        debugger
        // const source = { uri: response.uri };
        console.log('data image', response)
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImage(response.uri)
        setData(response.data)
      }
    });
  }

  function updateAccount() {
    setIsLoadingAccountState(true)
    if(data == null || !txtFullName || !txtEmail || !txtSDT) {
      setIsLoadingAccountState(false)
      Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin')
    } else {

    RNFetchBlob.fetch('POST', `${Constant.host}/DoAnTN/UpdateAccount.php`, {
      Authorization: "Bearer access-token",
      otherHeader: "foo",
      'Content-Type': 'multipart/form-data',
    }, [
        { name: 'image', filename: 'image.png', type: 'image/png', data },
        { name: 'idUser', data: dataAccount.idUser },
        { name: 'fullName', data: txtFullName },
        { name: 'email', data: txtEmail },
        { name: 'sdt', data: txtSDT },

      ]).then((resp) => {
        debugger
        setIsLoadingAccountState(false)
        if(JSON.parse(resp.data).success) {
          getAccountUpdated(accountState.idUser, setAccountState)
          navigation.goBack()
        } 

      }).catch((err) => {
        console.log('updateAccount err', err)
      })
    }
  }

  function renderLoading() {
    return(
      <Loading isVisible = {isLoadingAccountState} />
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
        <Image source = {{uri: image}}
              style = {{width: 90, height: 90, borderRadius: 95, alignSelf: 'center', marginTop: '20%', borderWidth: 2, borderColor: Colors.white_4}} />
      </Bt>
      <Bt
        onPress = {()=> everImagePicker()}>
        <TxtUserName>Đổi ảnh đại diện</TxtUserName>
      </Bt>
      {renderTxtIP()}
      <BtLogin onPress = {() => updateAccount()} >
        <TxtBtLogin>Lưu thay đổi</TxtBtLogin>
      </BtLogin>
      {renderLoading()}
    </Wrapper>
  )
}

export default index
