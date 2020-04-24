import React, { useState } from 'react'
import { FlatList, Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Colors from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import image from '../../../assets/image/d1e285affc590ce2e87fd225aacfd15a.png'
import dataFake from './fakeData'
import {
    Wrapper,
    ViewHeader,
    TxtTitle,
    Bt,
    TxtContentTitle,
    TxtItem,
    BtSchedule,
    TxtSchedule,
    TxtMore,
    WrapperItemFLRecentLy
} from './styled'

function renderHeader() {
    return(
        <ViewHeader>
            <TxtTitle>Lịch trình du lịch tự túc</TxtTitle>
            <Bt>
                <Icon name = 'search' size = {23} color = {Colors.black} style = {{marginRight: 10, marginTop: 4}}/>
            </Bt>
        </ViewHeader>
    )
}

function renderItemFL(item) {
    return(
        <Bt style= {{marginLeft: 30, marginTop: 5}}>
            <Image source = {image} style = {{width: 60, height: 60}}/>
            <TxtItem>Text Item</TxtItem>
        </Bt>
    )
}

function renderItemFLRecentLy (item) {
    return(
        <WrapperItemFLRecentLy>
            <TxtItem>tesst</TxtItem>
        </WrapperItemFLRecentLy>
    )
}

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();
    return (
        <Wrapper        
            style = {{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }}>

            {renderHeader()}
            <TxtContentTitle>Lên lịch trình du lịch, chia sẻ khoảnh khắc, tìm kiếm tuyến đường, dự báo thời tiết.</TxtContentTitle>
            <FlatList
                style = {{flexGrow: 0, marginBottom: 20}}
                data = {dataFake.data}
                renderItem = {renderItemFL}
                numColumns = {4}
            />
            <BtSchedule>
                <TxtSchedule>Lên lịch trình</TxtSchedule>
            </BtSchedule>
            <ViewHeader style = {{marginTop: 15, marginLeft: 7, marginRight: 7}} >
                <TxtTitle style = {{fontSize: 20}} >Lịch trình được tạo gần đây</TxtTitle>
                <Bt>
                    <TxtMore>Tất cả</TxtMore>
                </Bt>
            </ViewHeader>
            <FlatList
                style = {{flexGrow: 0, marginBottom: 20, marginTop: 10, marginLeft: 20}}
                data = {dataFake.dataRecently}
                renderItem = {renderItemFLRecentLy}
                horizontal = {true}
            />
        </Wrapper>
    )
}

export default index
