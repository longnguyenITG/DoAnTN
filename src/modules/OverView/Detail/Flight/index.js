import React, { useState } from 'react'
import { FlatList } from 'react-native'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../../../../utils/Colors'
import Helpers from '../../../../utils/Helpers'
import {
    Wrapper,
    TxtEmpty,
    WrapperItem,
    TxtTitleItem,
    TxtTimeItem,
    ViewRow,
    ViewBtItem,
    BtDetailItem,
    TxtBtDetail,
    BtFill,
    TxtBtFill
} from './styled'

function index(props) {
    const {itemParams, navigation, itemDetail} = props

    function renderItemFlight({item}) {
        return(
            <WrapperItem>
                <ViewRow>
                    <TxtTitleItem>{item.fromPlace}</TxtTitleItem>
                    <IconFontisto name = 'arrow-swap' size = {14} color = {Colors.gray_2} style = {{marginRight: 10, marginTop: 5}} />
                    <TxtTitleItem>{item.toPlace}</TxtTitleItem>
                </ViewRow>
                <TxtTimeItem>{Helpers.formatDate(item.timeBook)}, {item.peopleInFlight} người</TxtTimeItem>
                <TxtTitleItem>{Helpers.formatNumber(item.price)}đ</TxtTitleItem>
                <ViewBtItem>
                    <BtDetailItem>
                        <TxtBtDetail>Chi tiết</TxtBtDetail>
                    </BtDetailItem>
                </ViewBtItem>
            </WrapperItem>
        )
    }
    return (
        <Wrapper>
        {
            itemDetail.sumFlight && itemDetail.sumFlight.length < 1 ? <TxtEmpty>Chưa có chuyến bay nào cho chuyến đi của bạn</TxtEmpty> : null
        }
            
            <FlatList
                data = {itemDetail.sumFlight}
                renderItem = {renderItemFlight}
                showsVerticalScrollIndicator = {false}
            />
            <BtFill>
                <IconFontisto name = 'search' size = {15} color = {Colors.secondary_22} />
                <TxtBtFill>Tìm chuyến bay</TxtBtFill>
            </BtFill>
        </Wrapper>
    )
}

export default index
