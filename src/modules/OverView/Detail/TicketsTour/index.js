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
                    <TxtTitleItem>{item.nameTicket}</TxtTitleItem>
                </ViewRow>
                <TxtTimeItem>{Helpers.formatDate(item.timeBook)}</TxtTimeItem>
                <TxtTitleItem>{<TxtTimeItem>Giá từ </TxtTimeItem>}{Helpers.formatNumber(item.price)}đ</TxtTitleItem>
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
            itemDetail.sumTicketsTour && itemDetail.sumTicketsTour.length < 1 ? <TxtEmpty>Chưa có Vé & Tour nào cho chuyến đi của bạn</TxtEmpty> : null
        }
            
            <FlatList
                data = {itemDetail.sumTicketsTour}
                renderItem = {renderItemFlight}
                showsVerticalScrollIndicator = {false}
            />
            <BtFill>
                <IconFontisto name = 'search' size = {15} color = {Colors.secondary_22} />
                <TxtBtFill>Tìm Vé & Tour</TxtBtFill>
            </BtFill>
        </Wrapper>
    )
}

export default index
