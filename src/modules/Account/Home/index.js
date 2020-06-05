import React, { Component } from 'react'
import {Image} from 'react-native'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    Wrapper,
    ViewHeader,
    TxtTitle,
    ViewProfile,
    TxtProfile,
    View,
    ViewComponent,
    ViewChild,
    TxtComponent,
    WarpperComponent
} from './styled'
function index(props) {
    const {navigation} = props
    const listOption = [
        {
            key: 1,
            icon: 'ios-list-box',
            title: 'Lịch trình của tôi',
            navigateTo: 'listmytour'
        },
        {
            key: 2,
            icon: 'burst-sale',
            title: 'Khuyến mãi',
            navigateTo: 'listmytour'
        },
        {
            key: 3,
            icon: 'checklist',
            title: 'Lịch trình đã tham gia',
            navigateTo: 'listmytour'
        },
        {
            key: 4,
            icon: 'star-box',
            title: 'Đánh giá ứng dụng',
            navigateTo: 'listmytour'
        },
        {
            key: 5,
            icon: 'account-search',
            title: 'Tìm bạn bè quanh đây',
            navigateTo: 'listmytour'
        },
        {
            key: 6,
            icon: 'ios-settings',
            title: 'Cài đặt',
            navigateTo: 'Setting'
        },
    ]

    function renderHeader() {
        return(
            <ViewHeader>
                <TxtTitle>Khác</TxtTitle>
            </ViewHeader>
        )
    }

    function renderProfile() {
        return(
            <ViewProfile
                onPress = {() => navigation.navigate(Routes.profile)}>
                <View>
                    <Image 
                        source ={{uri: 'https://1.bp.blogspot.com/-A7UYXuVWb_Q/XncdHaYbcOI/AAAAAAAAZhM/hYOevjRkrJEZhcXPnfP42nL3ZMu4PvIhgCLcBGAsYHQ/s1600/Trend-Avatar-Facebook%2B%25281%2529.jpg'}} 
                        style = {{width: 60, height: 60, borderRadius: 50, borderWidth: 1, borderColor: Colors.gray_5}}
                    />
                    <TxtProfile>Long nguyễn</TxtProfile>
                </View>
                <IconIonicons name = 'ios-arrow-forward' size = {23} color = {Colors.gray_3} />
            </ViewProfile>
        )
    }

    function renderIcon(item) {
        switch (item.key) {
            case 1:
                return <IconIonicons name = {item.icon} size = {25} color = {Colors.red}/>
            case 2:
                return <IconFoundation name = {item.icon} size = {33} color = {Colors.secondary_22}/>
            case 3:
                return <IconOcticons name = {item.icon} size = {30} color = {Colors.secondary_22}/>
            case 4:
                return <IconMaterialCommunityIcons name = {item.icon} size = {27} color = {Colors.secondary_13}/>
            case 5:
                return <IconMaterialCommunityIcons name = {item.icon} size = {27} color = {Colors.secondary_22}/>
            case 6:
                return <IconIonicons name = {item.icon} size = {27} color = {Colors.gray_2}/>
            default:
                break;
        }
    }
    function renderMargin(key) {
        switch (key) {
            case 1:
                return 20
            case 2:
                return 15
            case 3:
                return 11
            case 4:
                return 12
            case 5:
                return 12
            case 6:
                return 18
            default:
                break;
        }
    }
    function renderMarginWrapper(key) {
        switch (key) {
            case 1:
                return 20
            case 2:
                return 17
            case 3:
                return 20
            case 4:
                return 15
            case 5:
                return 17
            case 6:
                return 19
            default:
                break;
        }
    }

    function renderComponent(e, i) {
        return(
            <ViewComponent style = {{borderTopWidth: e.key == 1 ? 0.3 : 0, 
                                    borderColor: Colors.gray_3,
                                    borderBottomWidth: e.key == 6 ? 0.3 : 0,
                                    paddingLeft: renderMarginWrapper(e.key)}}
                                    onPress = {()=> e.key == 6 ? navigation.navigate(e.navigateTo) : null}>
                {renderIcon(e)}
                <ViewChild style = {{marginLeft: renderMargin(e.key)}}  >
                    <TxtComponent style = {{paddingLeft: e.key == 4 ? 5 : 0}} >{e.title}</TxtComponent>
                    <IconIonicons name = 'ios-arrow-forward' size = {20} color = {Colors.gray_3} />
                </ViewChild>
            </ViewComponent>
        )
    }
    return (
        <Wrapper>
            {renderHeader()}
            {renderProfile()}
            {
                listOption.map( (e, i) => (
                    <WarpperComponent>
                        {renderComponent(e, i)}
                    </WarpperComponent>
                ) )
            }
        </Wrapper>
    )
}

export default index
