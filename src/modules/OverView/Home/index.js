import React, { useState } from 'react'
import { FlatList, Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Colors from '../../../utils/Colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import image from '../../../assets/image/d1e285affc590ce2e87fd225aacfd15a.png'
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
    View
} from './styled'

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();
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
            <Bt style= {{marginLeft: 30, marginTop: 5}}>
                <Image source = {image} style = {{width: 50, height: 50}}/>
                <TxtItem>Text Item</TxtItem>
            </Bt>
        )
    }
    
    function renderItemFLRecentLy ({item}) {
        return(
            <WrapperItemFLRecentLy>
                <ViewAccFL>
                    <Image  source = {{uri: item.imageAcc}} style = {{width: 30, height: 30, borderRadius: 60, borderWidth: 0.3, marginRight: 10}}/>
                    <ViewNameAcc>
                        <TxtItemName>{item.nameAcc}</TxtItemName>
                        <TxtItemTimeAgo>18 phút trước</TxtItemTimeAgo>
                    </ViewNameAcc>
                </ViewAccFL>
                <Bt>
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '55%'}}/>
                    <TitleTourItem>{item.title}</TitleTourItem>
                    <WrapContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconIonicons name = 'md-time' size = {25} color = {Colors.gray_3} style = {{marginRight: 10}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{item.sumDay}</TxtItemTimeAgo>
                        </ViewChildContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconFoundation name = 'dollar' size = {27} color = {Colors.secondary_12} style = {{marginRight: 5}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{item.sumMoney}đ</TxtItemTimeAgo>
                        </ViewChildContentTour>
                    </WrapContentTour>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }
    function renderItemFLDealTour ({item}) {
        return(
            <WrapperItemFLRecentLy style = {{width: 200, height: 220}} >
                <Bt>
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '55%'}}/>
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
            <WrapperItemFLRecentLy style = {{width: 200, height: 220}} >
                <Bt>
                    <Image source = {{uri: item.imageDesCripTion}} style = {{width: '100%', height: '100%'}}/>
                    <TitleTourItem style = {{fontSize: 14}} >{item.title}</TitleTourItem>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }
    function renderFL(styleViewHeader, data, renderItem, title){
        return(
            <View>
                <ViewHeader style = {styleViewHeader} >
                    <TxtTitle style = {{fontSize: 20}} >{title}</TxtTitle>
                    <Bt>
                        <TxtMore>Tất cả</TxtMore>
                    </Bt>
                </ViewHeader>
                <FlatList
                    style = {{flexGrow: 0, marginBottom: 20, marginTop: 10, marginLeft: 20}}
                    data = {data}
                    renderItem = {renderItem}
                    showsHorizontalScrollIndicator={false}
                    horizontal = {true}
                />
            </View>
        )
    }
    return (
        <Wrapper        
            style = {{
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }}>
                {renderHeader()}
                <TxtContentTitle>Lên lịch trình du lịch, chia sẻ khoảnh khắc, tìm kiếm tuyến đường, dự báo thời tiết.</TxtContentTitle>
            <ScrollView>
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
                    renderItem = {renderItemFLRecentLy}     
                    title = 'Tour được yêu thích nhất'         
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
                    renderItem = {renderItemFLDealTour}     
                    title = 'Vé & Tour khuyến mãi hấp dẫn'         
                />
            </ScrollView>
        </Wrapper>
    )
}

export default index
