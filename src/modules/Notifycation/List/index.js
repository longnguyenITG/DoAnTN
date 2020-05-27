import React, {useState} from 'react'
import {FlatList, Image, Alert} from 'react-native'
import Data from '../../OverView/Home/fakeData'
import Helpers from '../../../utils/Helpers'
import Swipeout from 'react-native-swipeout';
import {
  Wrapper,
  ViewHeader,
  TxtTitle,
  WrapperItem,
  ViewChild,
  TxtTime
} from './styled'
function index(props) {
  const {navigation} = props
  const [keyItem, setKeyItem] = useState()
  const [dataArr, setDataArr] = useState(Data.dataNotify)
  const [reFreshing, setReFreshing] = useState(false)
  const swipeoutBtns = [
    {
      text: 'Xoá',
      type: 'delete',
      onPress: () => {
        Alert.alert('Thông báo', 'bạn có thực sự muốn xoá không?', [
          {
            text: 'Cancel',
            onPress: ()=> {
              null
            }
          },
          {
            text: 'OK',
            onPress: ()=> {
              dataArr.splice(dataArr.findIndex(e => e.idNotify == keyItem), 1)
              setDataArr(dataArr.slice())
            }
          },
        ])
      }
    }
  ]
  function renderHeader() {
    return(
        <ViewHeader>
            <TxtTitle>Thông báo</TxtTitle>
        </ViewHeader>
    )
}
  function renderItem({item, index}) {
    return(
      <Swipeout right = {swipeoutBtns} autoClose onOpen = {() => setKeyItem(item.idNotify)} >
        <WrapperItem>
          <Image source = {{uri: item.image}} style = {{width: 65, height: 65, borderRadius: 10}} />
          <ViewChild>
            <TxtTitle style = {{fontSize: 15}} >{item.content}</TxtTitle>
            <TxtTime>{Helpers.formatDate(item.time)}</TxtTime>
          </ViewChild>
        </WrapperItem>
      </Swipeout>
    )
  }

  return (
    <Wrapper>
      {renderHeader()}
      <FlatList
        data = {dataArr}
        renderItem = {renderItem}
        showsVerticalScrollIndicator = {false}
        onRefresh = {() => setReFreshing(false)}
        refreshing = {reFreshing}
      />
    </Wrapper>
  )
}

export default index
