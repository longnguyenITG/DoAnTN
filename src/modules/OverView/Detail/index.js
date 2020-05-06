import React, {useState} from 'react'
import {Image, Dimensions, Alert} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'
import Colors from '../../../utils/Colors'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Trip from './Trip'
import Flight from './Flight'
import Hotel from './Hotel'
import TicketsTour from './TicketsTour'

import {
    Wrapper,
    ScrollView,
    ViewTitleDetail,
    View,
    TxtTabBar,
    TxtTitle,
    TxtTitlechildren,
    WrapperHeader,
    Bt,
} from './styled'

function index(props) {
    const {navigation, route} = props
    const {item} = route.params
    const insets = useSafeArea()
    console.log('data', item)


    const [opacityHeader, setOpacityHeader] = useState('transparent')

    function renderHeader() {
        return(
            <WrapperHeader style = {{backgroundColor: opacityHeader}} >
                <Bt
                    onPress = {() => navigation.goBack()}
                >
                    <IconIonicons name = 'md-arrow-back' size = {27} color = {opacityHeader == 'transparent' ? 'white' :'black'} style = {{marginRight: opacityHeader == 'transparent' ? 270 : 40}} />
                </Bt>
                {
                    opacityHeader == 'transparent' ? null :
                    <TxtTitle style = {{ color: 'black', fontSize: 20, marginRight: 40}} >3 ngày đi mộc châu...</TxtTitle>
                }                
                <Bt>
                    <IconIonicons name = 'md-share' size = {25} color = {opacityHeader == 'transparent' ? 'white' :'black'} style = {{marginRight: 30}} />
                </Bt>
                <Bt>
                    <IconIonicons name = 'ios-heart-empty' size = {25} color = {opacityHeader == 'transparent' ? 'white' :'black'} style = {{marginRight: 40}} />
                </Bt>
            </WrapperHeader>
        )
    }

    function renderTitle() {
        return(
            <ViewTitleDetail>
                <TxtTitle>3 ngày đi Mộc châu từ Hưng Yên</TxtTitle>
                <TxtTitlechildren>12-5-2020,  6 người tham gia</TxtTitlechildren>
                <TxtTitlechildren>Tạo bởi {<TxtTitlechildren style = {{color: Colors.black}}>Long nguyễn</TxtTitlechildren>}</TxtTitlechildren>
            </ViewTitleDetail>
        )
    }
    return (
        <Wrapper 
            style = {{
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }}>
            {renderHeader()}
            <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={e => {
                var windowHeight = Dimensions.get('window').height,
                    offset = e.nativeEvent.contentOffset.y
                if (offset > 150) {
                    setOpacityHeader(Colors.white_4)                   
                }else if (offset < 150) {
                    setOpacityHeader('transparent')                   
              }
            }}>
                <Image  
                    source = {{uri: 'https://media-a.laodong.vn/Storage/NewsPortal/2017/8/28/551691/Du-Lich_1.jpg'}} 
                    style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.3, marginBottom: 70 }}/>
                  
                    {renderTitle()}
                    <ScrollableTabView
                         showsHorizontalScrollIndicator={false}
                         tabBarUnderlineStyle={{backgroundColor: Colors.secondary_22,height:2}}
                         tabBarActiveTextColor={Colors.secondary_22}
                         prerenderingSiblingsNumber={Infinity}
                         locked = {true}>
                        <Trip tabLabel='Chuyến đi' item = {item.imageDesCripTionDetail} />                        
                        <Flight tabLabel='Chuyến bay' />                        
                        <Hotel tabLabel='Khách sạn' />                        
                        <TicketsTour tabLabel='Vé & Tour' />                        
                    </ScrollableTabView>
            </ScrollView>
        </Wrapper>
    )
}

export default index
