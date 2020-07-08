import React, { useState, useEffect } from 'react'
import {Image} from 'react-native'
import {Header} from '../../../components'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import {Account} from '../../Login/atom'
import {listTour} from '../../OverView/atom'
import {useRecoilState} from 'recoil'
import {
  Wrapper,
  TxtUserName,
  BtEditProfile,
  TxtBt,
  ViewChild,
  BtChild,
  TxtNumber,
  TxtTitle,
  ViewFlex
} from './styled'

function index(props) {
  const {navigation, detailAccount} = props

  const [accountState, setAccountState] = useRecoilState(Account)
  const [listTourState, setListTourState] = useRecoilState(listTour)
  const [dataAccount, setDataAccount] = useState(accountState)

  useEffect(() => {
    detailAccount && Object.keys(detailAccount).length ? setDataAccount(detailAccount)
    : setDataAccount(accountState)
  }, [accountState, detailAccount])

  function renderChild(number, text) {
    return(
      <BtChild>
        <TxtNumber>{number}</TxtNumber>
        <TxtTitle>{text}</TxtTitle>
      </BtChild>
    )
  }
  return (
    <Wrapper>
      <Image source = {{uri: 'https://toplist.vn/images/800px/ha-noi-thu-do-ngan-nam-van-hien-14173.jpg'}}
           style = {{width: '100%', height: '25%', position: 'absolute'}} />
      <Header navigation = {navigation}  iconRight = 'md-settings' transparent
          onCLick = {() => navigation.navigate(Routes.setting)}
      />
      <Image source = {{uri: dataAccount.image}}
            style = {{width: 90, height: 90, borderRadius: 95, alignSelf: 'center', marginTop: '20%', borderWidth: 2, borderColor: Colors.white_4}} />
      <TxtUserName>{dataAccount.userName}</TxtUserName>
      <BtEditProfile
        onPress = {() => navigation.navigate(Routes.editprofile, {dataAccount})}>
        <TxtBt>Chỉnh sửa trang cá nhân</TxtBt>
      </BtEditProfile>
      <ViewChild style = {{borderBottomWidth: 0.5, borderColor: Colors.gray_5}} >
        {renderChild(`${listTourState.filter(e => e.idUser == dataAccount.idUser).length}` ? `${listTourState.filter(e => e.idUser == dataAccount.idUser).length}` : '0', 'Tour')}
        {renderChild('0', 'Thích')}
        {renderChild('0', 'Ảnh')}
      </ViewChild>
      <ViewChild>
        {renderChild('0', 'Người theo dõi')}
        {renderChild('0', 'Đang theo dõi')}
        {renderChild('0', 'Đánh giá')}
      </ViewChild>
      <ViewFlex></ViewFlex>
    </Wrapper>
  )
}

export default index
