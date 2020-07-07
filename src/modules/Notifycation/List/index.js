import React, {useState, useEffect} from 'react'
import {FlatList, Image, Alert} from 'react-native'
import Helpers from '../../../utils/Helpers'
import Swipeout from 'react-native-swipeout';
import {useRecoilState} from 'recoil'
import {isLoadingNotify, listNotify, successFullyNotify} from '../atom'
import {getListNotify, deleteNotify} from '../selector'
import {Loading} from '../../../components'

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

  const [isLoadingNotifyState, setIsLoadingNotifyState] = useRecoilState(isLoadingNotify)
  const [listNotifyState, setListNotifyState] = useRecoilState(listNotify)
  const [successFullyNotifyState, setSuccessFullyNotifyState] = useRecoilState(successFullyNotify)

  const [keyItem, setKeyItem] = useState()
  const [dataArr, setDataArr] = useState([])
  const [reFreshing, setReFreshing] = useState(false)

  const swipeoutBtns = [
    {
      text: 'Xoá',
      type: 'delete',
      onPress: () => {
        debugger
        deleteNotify(keyItem, setIsLoadingNotifyState, setSuccessFullyNotifyState)
      }
    }
  ]

  useEffect(() => {
    getListNotify(setListNotifyState, setIsLoadingNotifyState)
  }, [])

  useEffect(() => {
    setDataArr(listNotifyState)
  }, [listNotifyState])

  useEffect(() => {
    if(successFullyNotifyState) {
      const index = dataArr.findIndex(e => e.idNoti == keyItem)
      dataArr.splice(index, 1)
      setDataArr(dataArr)
      setSuccessFullyNotifyState(false)
    }
  }, [successFullyNotifyState])
  
  function renderHeader() {
    return(
        <ViewHeader>
            <TxtTitle>Thông báo</TxtTitle>
        </ViewHeader>
    )
}
  function renderItem({item, index}) {
    return(
      <Swipeout right = {swipeoutBtns} autoClose onOpen = {() => setKeyItem(item.idNoti)} >
        <WrapperItem>
          <Image source = {{uri: item.image}} style = {{width: 65, height: 65, borderRadius: 10}} />
          <ViewChild>
            <TxtTitle style = {{fontSize: 15}} >{item.content}</TxtTitle>
            <TxtTime>{Helpers.formatDate(item.timeCreate)}</TxtTime>
          </ViewChild>
        </WrapperItem>
      </Swipeout>
    )
  }

  function renderLoading() {
    return(
      <Loading isVisible = {isLoadingNotifyState} />
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
        refreshing = {reFreshing}/>
      {renderLoading()}
    </Wrapper>
  )
}

export default index
