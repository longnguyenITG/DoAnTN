import React, { useState } from 'react'
import { FlatList, Image } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import Colors from '../../../../utils/Colors'
import Helpers from '../../../../utils/Helpers'
import Routes from '../../../../utils/Routes'
import IconFeather from 'react-native-vector-icons/Feather'
// import imagetravel from '../../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png'
const imagetravel = require ('../../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png')
import Data from '../../../OverView/Home/fakeData'
import {
    Wrapper,
    WrapperItemFLRecentLy,
    ViewAccFL,
    ViewNameAcc,
    TxtItemName,
    TxtItemTimeAgo,
    Bt,
    TitleTourItem,
    WrapContentTour,
    ViewChildContentTour,
    ViewAccChild,
    ViewIcon,
    BtAddTour,
    ViewEmpty,
    TxtTitle,
    BtJoin,
    TxtBtJoin
} from './styled'
function index(props) {

    const {navigation} = props

    const data = []
    // const data = Data.dataRecently

    function renderItemUpComing ({item}) {
        return(
            <WrapperItemFLRecentLy>
                <ViewAccFL>
                    <Image  source = {{uri: item.imageAcc}} style = {{width: 30, height: 30, borderRadius: 60, borderWidth: 1, marginRight: 10, borderColor: Colors.gray_4}}/>
                    <ViewAccChild>
                        <ViewNameAcc>
                            <TxtItemName>{item.nameAcc}</TxtItemName>
                            <TxtItemTimeAgo>{Helpers.formatDate(item.timeCreate)}</TxtItemTimeAgo>
                        </ViewNameAcc>
                        <ViewIcon>
                            <Bt>
                                <IconIonicons name = 'md-share' size = {23} color = {Colors.gray_3} style = {{marginRight: 20}} />
                            </Bt>
                            <Bt>
                                <IconIonicons name = 'ios-heart-empty' size = {23} color = {Colors.gray_3} />
                            </Bt>
                        </ViewIcon>
                    </ViewAccChild>
                </ViewAccFL>
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}>
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '55%'}}/>
                    <TitleTourItem>{item.title}</TitleTourItem>
                    <WrapContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconIonicons name = 'md-time' size = {25} color = {Colors.gray_3} style = {{marginRight: 10}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{item.sumDay}</TxtItemTimeAgo>
                        </ViewChildContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconFoundation name = 'dollar' size = {27} color = {Colors.secondary_12} style = {{marginRight: 5}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{Helpers.formatNumber(item.sumMoney)}đ</TxtItemTimeAgo>
                        </ViewChildContentTour>
                    </WrapContentTour>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }

    function renderNotList() {
        return(
            <ViewEmpty>
                <Image source = {imagetravel} 
                    style = {{width: 130, height: 130, alignSelf: 'center', marginTop: '30%'}}/>
                <TxtTitle>
                    Bạn chưa có chuyến đi nào đã hoàn thành.
                </TxtTitle>
                <BtJoin
                    onPress = {()=> navigation.navigate(Routes.createtour) }>
                    <TxtBtJoin>Lên lịch trình</TxtBtJoin>
                </BtJoin>
            </ViewEmpty>
        )
    }
    return (
        <Wrapper>
            {
                !data.length
                ? renderNotList()
                : <FlatList
                    style = {{paddingTop: 7}}
                    data = {data}
                    renderItem = {renderItemUpComing}
                    showsVerticalScrollIndicator = {false}
                    />
            }
        </Wrapper>
    )
}

export default index
