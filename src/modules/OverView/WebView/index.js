import React, { Component } from 'react'
import {
  Header
} from '../../../components'
import { WebView } from 'react-native-webview';
import {
  Wrapper
} from './styled'
function index(props) {
  const {navigation, route} = props
  const {linkUrl, title} = route.params
  return (
    <Wrapper>
      <Header navigation = {navigation} title = {title}/>
      <WebView source={{ uri: linkUrl }} />
    </Wrapper>
  )
  }

export default index
