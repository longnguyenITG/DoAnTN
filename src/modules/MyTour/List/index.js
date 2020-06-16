import React, { useState, useEffect, createRef } from 'react'
import { Image, View } from 'react-native'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
// import imagetravel from '../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png'
const imagetravel = require ('../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png')
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'
import Data from '../../OverView/Home/fakeData'
import UpComing from './UpComing'
import Walking from './Walking'
import Went from './Went'
import IconOcticons from 'react-native-vector-icons/Octicons'

import {
    Wrapper,
    TxtTitle,
    ViewEmpty,
    BtJoin,
    TxtBtJoin,
    ViewHeader,
    TxtHeader,
    Bt,
    TabView,
    BtTabView,
    TxtTabView
} from './styled'

// const arrTest = []
const arrTest = Data.dataRecently

function index(props) {
    
    const {navigation} = props

    const scrollableTabViewRef = createRef()
    const [colorWrapper, setColorWrapper] = useState(arrTest.length > 0 ? Colors.white_4 : Colors.gray_4)
    const [scrollIndex, setScrollIndex] = useState(0)

    function renderNotList() {
        return(
            <ViewEmpty>
                <Image source = {imagetravel} 
                    style = {{width: 170, height: 170, alignSelf: 'center', marginTop: '70%'}}/>
                <TxtTitle>
                    Hãy bắt đầu tạo chuyến đi của bạn với một lịch trình hấp dẫn và chi phí tối ưu nhất.
                </TxtTitle>
                <BtJoin
                    onPress = {()=> navigation.navigate(Routes.createtour) }>
                    <TxtBtJoin>Lên lịch trình</TxtBtJoin>
                </BtJoin>
            </ViewEmpty>
        )
    }

    function pressTabView(index) {
        scrollableTabViewRef.current.goToPage(index)
        setScrollIndex(index)
    }

    function renderTabBar() {
        return(
            <TabView>
                <BtTabView style = {{borderTopLeftRadius: 6, borderBottomLeftRadius: 6, backgroundColor: scrollIndex == 0 ? Colors.secondary_22: null}}
                    onPress = {()=> pressTabView(0)} >
                    <TxtTabView style = {{color: scrollIndex == 0 ? Colors.white: Colors.secondary_22}} >Sắp tới</TxtTabView>
                </BtTabView>
                <BtTabView style = {{borderLeftWidth: 0.6, borderRightWidth: 0.6, borderColor: Colors.secondary_22, backgroundColor: scrollIndex == 1 ? Colors.secondary_22: null}}
                    onPress = {()=> pressTabView(1)} >
                    <TxtTabView style = {{color: scrollIndex == 1 ? Colors.white: Colors.secondary_22}} >Đang đi</TxtTabView>
                </BtTabView>
                <BtTabView style = {{borderTopRightRadius: 6, borderBottomRightRadius: 6, backgroundColor: scrollIndex == 2 ? Colors.secondary_22: null}}
                    onPress = {()=> pressTabView(2)} >
                    <TxtTabView style = {{color: scrollIndex == 2 ? Colors.white: Colors.secondary_22}} >Đã đi</TxtTabView>
                </BtTabView>
            </TabView>
        )
    }

    function renderList() {
        return(
            <ScrollableTabView
                style = {{margin: 10}}
                ref = {scrollableTabViewRef}
                renderTabBar = {() => renderTabBar()}
                onChangeTab={event => setScrollIndex(event.i)}
                showsHorizontalScrollIndicator={false}
                tabBarUnderlineStyle={{backgroundColor: Colors.secondary_22,height:2}}
                tabBarActiveTextColor={Colors.secondary_22}
                prerenderingSiblingsNumber={Infinity}>
                <UpComing tabLabel='Sắp tới' navigation = {navigation} />                        
                <Walking tabLabel='Đang đi' navigation = {navigation} />                        
                <Went tabLabel='Đã đi' navigation = {navigation} />                        
            </ScrollableTabView>
        )
    }
    function renderHeader() {
        return(
            <ViewHeader>
                <TxtHeader>Lịch trình của tôi</TxtHeader>
                <Bt>
                    <IconOcticons name = 'search' size = {20} style = {{textAlign: 'right'}} />
                </Bt>
            </ViewHeader>
        )
    }

    return (
        <Wrapper style = {{backgroundColor: colorWrapper}} >
            {
                !arrTest.length ? 
                    renderNotList()
                :   [renderHeader(),renderList()]                   
            }
        </Wrapper>
        )
    }

export default index
