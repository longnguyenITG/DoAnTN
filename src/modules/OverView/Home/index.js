import React, { useState } from 'react'
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
    const [widgetRefreshing, setWidgetRefreshing] = useState(false)
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
    
    function renderItemFL({item}) {
        return(
            <Bt style= {{marginLeft: 23, marginTop: 10, width: 70, height: 60, alignItems: 'center'}}>
                <Image source = {item.image} style = {{width: 40, height: 40}}/>
                <TxtItem style = {{fontSize: 13}} >{item.key}</TxtItem>
            </Bt>
        )
    }
    
    function renderItemFLRecentLy ({item}) {
        return(
            <WrapperItemFLRecentLy>
                <ViewAccFL>
                    <Image  source = {{uri: item.imageAcc}} style = {{width: 30, height: 30, borderRadius: 60, borderWidth: 1, marginRight: 10, borderColor: Colors.gray_4}}/>
                    <ViewNameAcc>
                        <TxtItemName>{item.nameAcc}</TxtItemName>
                        <TxtItemTimeAgo>18 phút trước</TxtItemTimeAgo>
                    </ViewNameAcc>
                </ViewAccFL>
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}
                >
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
    function renderItemFLDealTour ({item}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 200, height: 220}} >
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}
                >
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '55%', borderTopLeftRadius: 14, borderTopRightRadius: 14}}/>
                    <TitleTourItem style = {{fontSize: 14}} >{item.title}</TitleTourItem>
                    <WrapContentTour style = {{paddingTop: 5, height: 50}} >
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <TxtItemTimeAgo style = {{fontSize: 13}}>giá từ  </TxtItemTimeAgo>
                            <TxtItemTimeAgo style = {{fontSize: 13, color: Colors.black, fontWeight: 'bold'}}>7,000,000đ</TxtItemTimeAgo>
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
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '100%', borderRadius: 14}}/>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }
    function widgetOnRefresh() {
        // getWidgetDetail(widgetInfoCustom)
        // refresh lại 
        return setWidgetRefreshing(false)
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
                    onRefresh={() => widgetOnRefresh()}/>
                }
                showsVerticalScrollIndicator = {false}>
                <FlatList
                    style = {{flexGrow: 0, marginBottom: 20}}
                    data = {dataFake.data}
                    renderItem = {renderItemFL}
                    numColumns = {4}
                />
                <BtSchedule>
                    <TxtSchedule>Lên lịch trình</TxtSchedule>
                </BtSchedule>
                <FlatListComponent
                    styleViewHeader = {{marginTop: 15, marginLeft: 7, marginRight: 7}}
                    data = {dataFake.dataRecently}
                    renderItem = {renderItemFLRecentLy}     
                    title = 'Lịch trình được tạo gần đây'         
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {dataFake.dataRecently}
                    renderItem = {renderItemPicktureLike}     
                    title = 'Ảnh được yêu thích nhất'         
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {dataFake.dataRecently}
                    renderItem = {renderItemFLRecentLy}     
                    title = 'Tour được yêu thích nhất'         
                />
                <FlatListComponent
                    styleViewHeader = {{marginTop: 1, marginLeft: 7, marginRight: 7}}
                    data = {dataFake.dataRecently}
                    renderItem = {renderItemFLDealTour}     
                    title = 'Vé & Tour khuyến mãi hấp dẫn'         
                />
            </ScrollView>
        </Wrapper>
    )
}

export default index
