import React, { useState, useEffect } from 'react'
import { FlatList, Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import Helpers from '../../../utils/Helpers'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import dataFake from './fakeData'
import {FlatList as FlatListComponent} from '../../../components'
import {isLoadingOverview, successfullyOverview, listTour} from '../atom'
import {useRecoilState} from 'recoil'
import {getListTour} from '../selector'
import {Loading} from '../../../components'
import {
    Wrapper,
    ViewHeader,
    TxtTitle,
    Bt,
    TxtContentTitle,
    TxtItem,
    BtSchedule,
    TxtSchedule,
    TxtMore,
    WrapperItemFLRecentLy,
    ViewAccFL,
    ViewNameAcc,
    TxtItemName,
    TxtItemTimeAgo,
    TitleTourItem,
    WrapContentTour,
    ViewChildContentTour,
    ScrollView,
    View,
    RefreshControl
} from './styled'

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();

    const [isLoadingState, setIsLoadingState] = useRecoilState(isLoadingOverview)
    const [successfullyState, setSuccessfullyState] = useRecoilState(successfullyOverview)
    const [listTourState, setListTourState] = useRecoilState(listTour)

    const [widgetRefreshing, setWidgetRefreshing] = useState(false)

    useEffect(() => {
        getListTour(setListTourState, setIsLoadingState)
    }, [])

    function renderHeader() {
        return(
            <ViewHeader>
                <TxtTitle>Lịch trình du lịch tự túc</TxtTitle>
                <Bt>
                    <Icon name = 'search' size = {23} color = {Colors.black} style = {{marginRight: 10, marginTop: 4}}/>
                </Bt>
            </ViewHeader>
        )
    }

    function getLinkUrl(key) {
        switch (key) {
            case 'lich_trinh':
                return 'https://travel.com.vn/du-lich-viet-nam.aspx'
            case 'khach_san':
                return 'https://tripu.vn/vi/hotels'
            case 'chuyen_bay':
                return 'http://www.worldtrans.vn/'
            case 'combo':
                return 'https://travel.com.vn/tim-tour/FASGN/ket-qua-tim-kiem.aspx'
            case 'nha_hang':
                return 'https://dulichviet.com.vn/khach-san'
            case 'tham_quan':
                return 'https://dulichviet.com.vn/'
            case 've_tour':
                return 'https://dulichviet.com.vn/tour-bay'
        }
    }
    
    function renderItemFL({item}) {
        const linkUrl = getLinkUrl(item.key)
        return(
            <Bt style= {{marginLeft: 23, marginTop: 10, width: 70, height: 60, alignItems: 'center'}}
                onPress = {() => navigation.navigate(Routes.webview, {linkUrl, title: item.name})}>
                <Image source = {item.image} style = {{width: 40, height: 40}}/>
                <TxtItem style = {{fontSize: 12.5}} >{item.name}</TxtItem>
            </Bt>
        )
    }
    
    function renderItemFLRecentLy ({item}) {
        return(
            <WrapperItemFLRecentLy>
                <ViewAccFL onPress = {()=> navigation.navigate(Routes.profile)} >
                    <Image  source = {{uri: item.image}} style = {{width: 30, height: 30, borderRadius: 60, borderWidth: 1, marginRight: 10, borderColor: Colors.gray_4}}/>
                    <ViewNameAcc>
                        <TxtItemName>{item.userName}</TxtItemName>
                        <TxtItemTimeAgo>{Helpers.formatDate(item.timeCreate)}</TxtItemTimeAgo>
                    </ViewNameAcc>
                </ViewAccFL>
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}
                >
                    <Image source = {{uri: item.imageDesCription}} style = {{width: '100%', height: '55%'}}/>
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
    function renderItemFLDealTour ({item}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 200, height: 220}} >
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}
                >
                    <Image source = {{uri: item.imageDesCription}} style = {{width: '100%', height: '55%', borderTopLeftRadius: 14, borderTopRightRadius: 14}}/>
                    <TitleTourItem style = {{fontSize: 14}} >{item.title}</TitleTourItem>
                    <WrapContentTour style = {{paddingTop: 5, height: 50}} >
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <TxtItemTimeAgo style = {{fontSize: 13}}>giá từ  </TxtItemTimeAgo>
                            <TxtItemTimeAgo style = {{fontSize: 13, color: Colors.black, fontWeight: 'bold'}}>{Helpers.formatNumber(item.sumMoney)}đ</TxtItemTimeAgo>
                        </ViewChildContentTour>
                    </WrapContentTour>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }
    function renderItemPicktureLike ({item}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 200, height: 270}} >
                <Bt>
                    <Image source = {{uri: item.imageDesCription}} style = {{width: '100%', height: '100%', borderRadius: 14}}/>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }
    function renderLoading() {
        return(
            <Loading isVisible = {isLoadingState} />
        )
    }
    return (
        <Wrapper        
            style = {{
                    paddingTop: insets.top,
                    // paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }}>
                {renderHeader()}
                <TxtContentTitle>Lên lịch trình du lịch, chia sẻ khoảnh khắc, tìm kiếm tuyến đường, dự báo thời tiết.</TxtContentTitle>
            <ScrollView
                refreshControl={
                    <RefreshControl
                    refreshing={widgetRefreshing}
                    onRefresh={() => getListTour(setListTourState, setIsLoadingState)}/>
                }
                showsVerticalScrollIndicator = {false}>
                <FlatList
                    style = {{flexGrow: 0, marginBottom: 20}}
                    data = {dataFake.data}
                    renderItem = {renderItemFL}
                    numColumns = {4}
                />
                <BtSchedule
                    onPress = {() => navigation.navigate(Routes.createtour)}>
                    <TxtSchedule>Lên lịch trình</TxtSchedule>
                </BtSchedule>
                <FlatListComponent
                    styleViewHeader = {{marginTop: 15, marginLeft: 7, marginRight: 7}}
                    data = {listTourState.slice(listTourState.length - 10)}
                    renderItem = {renderItemFLRecentLy}     
                    title = 'Lịch trình được tạo gần đây'
                    onPress
                    item = {listTourState.slice(listTourState.length - 10)}
                    navigation = {navigation}
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {listTourState.filter(e => e.sumLike > 0).sort(function(a,b) {return a.sumLike - b.sumLike}).slice(-10)}
                    renderItem = {renderItemPicktureLike}     
                    title = 'Ảnh được yêu thích nhất'         
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {listTourState.filter(e => e.sumLike > 0).sort(function(a,b) {return a.sumLike - b.sumLike}).slice(-10)}
                    renderItem = {renderItemFLRecentLy}     
                    title = 'Tour được yêu thích nhất'
                    onPress
                    item = {listTourState.filter(e => e.sumLike > 0).sort(function(a,b) {return a.sumLike - b.sumLike}).slice(-10)}
                    navigation = {navigation}
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {listTourState.filter(e => e.deal > 0).slice(-10)}
                    renderItem = {renderItemFLDealTour}     
                    title = 'Vé & Tour khuyến mãi hấp dẫn'
                    onPress
                    item = {listTourState.filter(e => e.deal > 0).slice(-10)}
                    navigation = {navigation}  
                />
            </ScrollView>
            {renderLoading()}
        </Wrapper>
    )
}

export default index
