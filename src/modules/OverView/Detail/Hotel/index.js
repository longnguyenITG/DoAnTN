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
    const {itemParams, navigation} = props

    function renderItemFlight({item}) {
        return(
            <WrapperItem>
                <ViewRow>
                    <TxtTitleItem>{item.nameHotel}</TxtTitleItem>
                </ViewRow>
                <TxtTimeItem>{Helpers.formatDate(item.timeBook)}, {item.peopleInRoom} người</TxtTimeItem>
                <TxtTitleItem>{Helpers.formatNumber(item.price)}đ{<TxtTimeItem>/đêm</TxtTimeItem>}</TxtTitleItem>
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
            itemParams.sumFlight.length < 1 ? <TxtEmpty>Chưa có khách sạn nào cho chuyến đi của bạn</TxtEmpty> : null
        }
            
            <FlatList
                data = {itemParams.sumHotel}
                renderItem = {renderItemFlight}
                showsVerticalScrollIndicator = {false}
            />
            <BtFill>
                <IconFontisto name = 'search' size = {15} color = {Colors.secondary_22} />
                <TxtBtFill>Tìm khách sạn</TxtBtFill>
            </BtFill>
        </Wrapper>
    )
}

export default index
