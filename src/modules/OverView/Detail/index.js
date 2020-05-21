import React, {useState} from 'react'
import {Image, Dimensions, Alert} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import {ScrollableTabView} from '@valdio/react-native-scrollable-tabview'
import Colors from '../../../utils/Colors'
import Helpers from '../../../utils/Helpers'
import Routes from '../../../utils/Routes'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import Trip from './Trip'
import Flight from './Flight'
import Hotel from './Hotel'
import TicketsTour from './TicketsTour'
import { FloatingAction } from "react-native-floating-action";

import {
    Wrapper,
    ScrollView,
    ViewTitleDetail,
    TxtTitle,
    TxtTitlechildren,
    WrapperHeader,
    Bt,
    WrapperMoney,
    ViewChildrenMoney,
    BtJoin,
    TxtBtJoin
} from './styled'

function index(props) {
    const {navigation, route} = props
    const {item} = route.params
    const insets = useSafeArea()
    const actions = [
        {
          text: "Gửi yêu cầu",
          icon: <IconMaterialCommunityIcons name = 'file-document-edit-outline' size = {30} color = {Colors.white} />,
          name: "bt_guiyeucau",
          position: 1,
          color: '#2D9CDB',
          buttonSize: 50
        },
        {
          text: "Gọi Hotline",
          icon: <IconFeather name = 'phone-call' size = {30} color = {Colors.white} />,
          name: "bt_goihotline",
          position: 2,
          color: '#2D9CDB',
          buttonSize: 50
        }
      ]

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
                <TxtTitle>{item.title}</TxtTitle>
                <TxtTitlechildren>{Helpers.formatDate(item.timeCreate)},  {item.sumPeopleJoin.length} người tham gia</TxtTitlechildren>
                <TxtTitlechildren>Tạo bởi {<TxtTitlechildren style = {{color: Colors.black}}>{item.nameAcc}</TxtTitlechildren>}</TxtTitlechildren>
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
                    source = {{uri: item.imageDesCripTion}} 
                    style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.3, marginBottom: 70 }}/>
                  
                    {renderTitle()}
                    <ScrollableTabView
                         showsHorizontalScrollIndicator={false}
                         tabBarUnderlineStyle={{backgroundColor: Colors.secondary_22,height:2}}
                         tabBarActiveTextColor={Colors.secondary_22}
                         prerenderingSiblingsNumber={Infinity}
                         locked = {true}>
                        <Trip tabLabel='Chuyến đi' itemParams = {item} navigation = {navigation} />                        
                        <Flight tabLabel='Chuyến bay' itemParams = {item} navigation = {navigation} />                        
                        <Hotel tabLabel='Khách sạn' itemParams = {item} navigation = {navigation} />                        
                        <TicketsTour tabLabel='Vé & Tour' itemParams = {item} navigation = {navigation} />                        
                    </ScrollableTabView>
            </ScrollView>
            <FloatingAction
                actions={actions}
                color = {Colors.secondary_22}
                distanceToEdge = { { vertical:150, horizontal: 20 }}
                floatingIcon = {<IconFontAwesome5 name = 'headphones-alt' size = {30} color = {Colors.white} />}
                onPressItem={name => {
                    name == 'bt_guiyeucau' ?
                    Alert.alert('Nhấn', 'Gửi yêu cầu')
                    : Alert.alert('Nhấn', 'Hotline')
                }}
            />
            <WrapperMoney>
                <ViewChildrenMoney>
                    <TxtTitle style = {{paddingTop: 5, marginBottom: 3}} >{Helpers.formatNumber(item.sumMoney)}đ</TxtTitle>
                    <TxtTitlechildren>Mỗi người</TxtTitlechildren>
                </ViewChildrenMoney>
                <BtJoin
                    onPress = {() => 
                        Alert.alert('Xác nhận', 'Bạn chắc chắn muốn tham gia tour \nDu lịch này chứ?',
                        [
                            {
                                text: 'Tham gia',
                                onPress: ()=> {
                                    // call api join tour
                                }
                            },
                            {
                                text: 'Hủy',
                                onPress: ()=> {
                                    // cancel
                                }
                            },
                        ])
                        }
                >
                    <TxtBtJoin>Đặt ngay</TxtBtJoin>
                </BtJoin>
            </WrapperMoney>
        </Wrapper>
    )
}

export default index
