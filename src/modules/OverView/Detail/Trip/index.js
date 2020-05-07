import React, { useState } from 'react'
import {Image, FlatList} from 'react-native'
import Colors from '../../../../utils/Colors'
import Helpers from '../../../../utils/Helpers'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import {
    Wrapper,
    WrapperTitle,
    TxtTitle,
    TxtTitleMore,
    Bt,
    WrapperItemFLRecentLy,
    TxtDay,
    TxtContentDay,
    WrapperInclude,
    WrapperChildrenInclude,
    View,
    WrapperAcc,
    WrapperKey
} from './styled'

function index(props) {
    const {itemParams} = props

    function renderItemPicktureLike ({item, index}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 130, height: 240, backgroundColor: 'transparent'}} >
                <Image source = {{uri: item.imageDay}} 
                style = {{width: '100%', height: 180, borderRadius: 5}}/>
                <TxtDay>Ngày {index+1}</TxtDay>
                <TxtContentDay>{Helpers.formatDate(item.timeDay)}</TxtContentDay>
                <TxtContentDay style = {{color: Colors.gray_3}} >{item.place}</TxtContentDay>
            </WrapperItemFLRecentLy>
        )
    }
    function renderTitle(title, more) {
        return(
            <WrapperTitle style = {{marginTop: title == 'Thành viên' ? 30 : 0}} >
                <TxtTitle>{title}</TxtTitle>
                {more == '' ? null : 
                <Bt>
                    <TxtTitleMore>{more}</TxtTitleMore>
                </Bt>}                
            </WrapperTitle>
        )
    }
    function renderInclude(titile, titleMore, iconName) {
        return(
            <WrapperInclude>
                <View>
                    <IconFontAwesome name = {iconName} size = {iconName == 'hotel' ? 20 : 22} color = {Colors.gray_3} />
                    <WrapperChildrenInclude style = {{marginLeft: iconName == 'hotel' ? 10 : 16}} >
                        <TxtContentDay style = {{color: Colors.gray_2}} >{titile}</TxtContentDay>
                        <TxtContentDay style = {{color: Colors.gray_2}} >{titleMore}</TxtContentDay>                        
                    </WrapperChildrenInclude>
                </View>
                <IconFontAwesome name = 'angle-right' size = {25} color = {Colors.gray_3} />
            </WrapperInclude>
        )
    }
    function renderItemAcc({item}) {
        return(
            <WrapperAcc>
                <Image source = {{uri: item.imageAcc ? item.imageAcc : 'https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg'}} 
                    style = {{width: '100%', height: '100%', borderRadius: 50}}/>
                    {
                        item.nameAcc == itemParams.nameAcc
                        ?  
                        <WrapperKey>
                            <IconFontisto name = 'key' size = {10} color = {Colors.secondary_12} />
                        </WrapperKey>
                        : null
                    }                    
            </WrapperAcc>
        )
    }
    return (
        <Wrapper>
           {renderTitle('Lịch trình', 'Chi tiết')}
            <FlatList
                style = {{marginBottom: 20}}
                data = {itemParams.imageDesCripTionDetail}
                renderItem = {renderItemPicktureLike}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
            />
            {renderTitle('Bao gồm', 'Chi tiết')}
            {renderInclude('Khách sạn', '1 khách sạn, 3 ngày 2 đêm', 'hotel')}
            {renderInclude('Chuyến bay', '4 vé máy bay khứ hồi', 'plane')}
            {renderTitle('Thành viên', '')}
            <FlatList
                style = {{marginBottom: 20}}
                data = {itemParams.sumPeopleJoin}
                renderItem = {renderItemAcc}
                numColumns = {5}
                showsHorizontalScrollIndicator={false}
            />
        </Wrapper>
    )
}

export default index
