import React, {useState, useEffect} from 'react'
import {Image, Dimensions, Alert, Linking, Platform, Share} from 'react-native'
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
import {detailTour, isLoadingOverview, liked} from '../atom'
import {useRecoilState} from 'recoil'
import {getDetailTour, joinTour, getLiked, deleteLiked, uploadLiked} from '../selector'
import {Account} from '../../Login/atom'
import {Loading} from '../../../components'

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

    const [isLoadingState, setIsLoadingState] = useRecoilState(isLoadingOverview)
    const [detailTourState, setDetailTourState] = useRecoilState(detailTour)
    const [accountState, setAccountState] = useRecoilState(Account)
    const [likedState, setLikedState] = useRecoilState(liked)

    const [opacityHeader, setOpacityHeader] = useState('transparent')

    useEffect(() => {
        getDetailTour(item.idTour, setDetailTourState, setIsLoadingState)
        getLiked(item.idTour, accountState.idUser, setLikedState)
    }, [])

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
                <Bt
                    onPress = {async ()=> {
                        try {
                        const result = await Share.share({
                            message:
                            'Xin chào, bạn đang chia sẻ từ Exciting Journey',
                        });
                        if (result.action === Share.sharedAction) {
                            if (result.activityType) {
                            // shared with activity type of result.activityType
                            } else {
                            // shared
                            }
                        } else if (result.action === Share.dismissedAction) {
                            // dismissed
                        }
                        } catch (error) {
                        alert(error.message);
                        }
                    }}>
                    <IconIonicons name = 'md-share' size = {25} color = {opacityHeader == 'transparent' ? 'white' :'black'} style = {{marginRight: 30}} />
                </Bt>
                <Bt
                    onPress = {() => {
                        likedState ? deleteLiked(item.idTour, accountState.idUser, setLikedState)
                        : uploadLiked(item.idTour, accountState.idUser, setLikedState)
                    }}>
                    {
                        likedState ? 
                        <IconIonicons name = 'ios-heart' size = {25} color = 'red' style = {{marginRight: 40}} />
                        : <IconIonicons name = 'ios-heart-empty' size = {25} color = {opacityHeader == 'transparent' ? 'white' :'black'} style = {{marginRight: 40}} />
                    }
                    
                </Bt>
            </WrapperHeader>
        )
    }

    function renderTitle() {
        if(detailTourState) {
        return(
            <ViewTitleDetail>
                <TxtTitle>{item.title}</TxtTitle>
                <TxtTitlechildren>{Helpers.formatDate(item.timeCreate)},  {detailTourState.sumPeopleJoin && detailTourState.sumPeopleJoin.length} người tham gia</TxtTitlechildren>
                <TxtTitlechildren>Tạo bởi {<TxtTitlechildren style = {{color: Colors.black}}>{item.userName}</TxtTitlechildren>}</TxtTitlechildren>
            </ViewTitleDetail>
        )}
    }

    function callHotline() {
        let phoneNumber = '0984087956'
        Platform.OS === 'android' ? phoneNumber = 'tel:${0984087956}' : phoneNumber = 'telprompt:${0984087956}'
        Linking.openURL(phoneNumber)
    }
    function ReportApp() {
        const linkReport = 'https://docs.google.com/forms/d/11XUO2--WBsoG2OnBbD5C7WnoRgEA0bHVpve5P4VGNHo/edit'
        Linking.openURL(linkReport)
    }

    function renderLoading() {
        return(
            <Loading isVisible = {isLoadingState} />
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
                    source = {{uri: item.imageDesCription}} 
                    style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.3, marginBottom: 70 }}/>
                  
                    {renderTitle()}
                    <ScrollableTabView
                         showsHorizontalScrollIndicator={false}
                         tabBarUnderlineStyle={{backgroundColor: Colors.secondary_22,height:2}}
                         tabBarActiveTextColor={Colors.secondary_22}
                         prerenderingSiblingsNumber={Infinity}
                         locked = {true}>
                        <Trip tabLabel='Chuyến đi' itemParams = {item} itemDetail = {detailTourState} navigation = {navigation} />                        
                        <Flight tabLabel='Chuyến bay' itemParams = {item} itemDetail = {detailTourState} navigation = {navigation} />                        
                        <Hotel tabLabel='Khách sạn' itemParams = {item} itemDetail = {detailTourState} navigation = {navigation} />                        
                        <TicketsTour tabLabel='Vé & Tour' itemParams = {item} itemDetail = {detailTourState} navigation = {navigation} />                        
                    </ScrollableTabView>
            </ScrollView>
            <FloatingAction
                actions={actions}
                color = {Colors.secondary_22}
                distanceToEdge = { { vertical:150, horizontal: 20 }}
                floatingIcon = {<IconFontAwesome5 name = 'headphones-alt' size = {30} color = {Colors.white} />}
                onPressItem={name => {
                    name == 'bt_guiyeucau' 
                    ? ReportApp()
                    : callHotline()
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
                                    joinTour(item.idTour, accountState.idUser, setIsLoadingState)
                                }
                            },
                            {
                                text: 'Hủy',
                                onPress: ()=> null,
                                style: 'cancel'
                            },
                        ])
                        }
                >
                    <TxtBtJoin>Đặt ngay</TxtBtJoin>
                </BtJoin>
            </WrapperMoney>
            {renderLoading()}
        </Wrapper>
    )
}

export default index
