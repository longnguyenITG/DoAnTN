import React, { useState } from 'react'
import { FlatList } from 'react-native'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../../../../utils/Colors'
import Helpers from '../../../../utils/Helpers'
import Routes from '../../../../utils/Routes'
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
            itemDetail.sumHotel && itemDetail.sumHotel.length < 1 ? <TxtEmpty>Chưa có khách sạn nào cho chuyến đi của bạn</TxtEmpty> : null
        }
            
            <FlatList
                data = {itemDetail.sumHotel}
                renderItem = {renderItemFlight}
                showsVerticalScrollIndicator = {false}
            />
            <BtFill
                onPress = {() => navigation.navigate(Routes.webview, {linkUrl: 'https://tripu.vn/vi/hotels', title: 'Khách sạn'})}>
                <IconFontisto name = 'search' size = {15} color = {Colors.secondary_22} />
                <TxtBtFill>Tìm khách sạn</TxtBtFill>
            </BtFill>
        </Wrapper>
    )
}

export default index
