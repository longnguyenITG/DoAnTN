import React, { useState, useEffect } from 'react'
import { Image, View } from 'react-native'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import imagetravel from '../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png'
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
    Bt
} from './styled'

// const arrTest = []
const arrTest = Data.dataRecently

function index(props) {
    
    const {navigation} = props
    const [colorWrapper, setColorWrapper] = useState(arrTest.length > 0 ? Colors.white_4 : Colors.gray_4)

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

    function renderList() {
        return(
            <ScrollableTabView
                style = {{margin: 15}}
                showsHorizontalScrollIndicator={false}
                tabBarUnderlineStyle={{backgroundColor: Colors.secondary_22,height:2}}
                tabBarActiveTextColor={Colors.secondary_22}
                prerenderingSiblingsNumber={Infinity}>
                <UpComing tabLabel='Sắp tới' />                        
                <Walking tabLabel='Đang đi' />                        
                <Went tabLabel='Đã đi' />                        
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

    function renderListAll() {
        return (
            <View>
                
            </View>
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
