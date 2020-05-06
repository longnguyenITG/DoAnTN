import React, { useState } from 'react'
import {Image, FlatList} from 'react-native'
import Colors from '../../../../utils/Colors'
import {
    Wrapper,
    WrapperTitle,
    TxtTitle,
    TxtTitleMore,
    Bt,
    WrapperItemFLRecentLy,
    TxtDay,
    TxtContentDay
} from './styled'

function index(props) {
    const {item} = props

    function renderItemPicktureLike ({item, index}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 130, height: 240, backgroundColor: 'transparent'}} >
                <Image source = {{uri: item}} 
                style = {{width: '100%', height: 180, borderRadius: 5}}/>
                <TxtDay>Ngày {index+1}</TxtDay>
                <TxtContentDay>06-05-2020</TxtContentDay>
                <TxtContentDay style = {{color: Colors.gray_3}} >6 địa điểm, 68,5km</TxtContentDay>
            </WrapperItemFLRecentLy>
        )
    }
    return (
        <Wrapper>
            <WrapperTitle>
                <TxtTitle>Lịch trình</TxtTitle>
                <Bt>
                    <TxtTitleMore>Chi tiết</TxtTitleMore>
                </Bt>
            </WrapperTitle>
            <FlatList
                data = {item}
                renderItem = {renderItemPicktureLike}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
            />
        </Wrapper>
    )
}

export default index
