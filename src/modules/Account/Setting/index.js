import React, {} from 'react'
import {Header} from '../../../components'
import Colors from '../../../utils/Colors'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import {
    Wrapper,
    View,
    ViewComponent,
    TxtComponent,
    ViewComponentChild
} from './styled'
import Routes from '../../../utils/Routes'
function index(props) {

    const {navigation} = props
    const listOption = [
        {
            key: 1,
            title: 'Chính sách bảo mật',
            linkURL: 'https://vnguide.vn/dieu-khoan-bao-mat-app/'
        },
        {
            key: 2,
            title: 'Điều kiện điều khoản',
            linkURL: 'https://www.apple.com/legal/internet-services/itunes/vn/terms.html'
        },
        {
            key: 3,
            title: 'Hướng dẫn thanh toán',
            linkURL: 'https://galle.vn/ct-huong-dan-thanh-toan.html'
        },
        {
            key: 4,
            title: 'Giới thiệu Exciting journey',
            linkURL: 'https://vnguide.vn/dieu-khoan-bao-mat-app/'
        },
        {
            key: 5,
            title: 'Góp ý',
            linkURL: 'https://vnguide.vn/dieu-khoan-bao-mat-app/'
        },
    ]

    function renderListComponent() {
        return(
            <View>
                {listOption.map((item, index) => (
                    <ViewComponentChild key = {index} 
                    style = {{borderTopWidth: item.key == 1 ? 0 : 0.3, borderColor: Colors.gray_5}}
                    onPress = {()=> navigation.navigate(Routes.webview, {linkUrl: item.linkURL, title: item.title})} >
                        <TxtComponent>{item.title}</TxtComponent>
                        <IconIonicons name = 'ios-arrow-forward' size = {20} color = {Colors.gray_3} />
                    </ViewComponentChild>
                ))}
            </View>
        )
    }
    return(
        <Wrapper>
            <Header navigation = {navigation} title = 'Cài đặt' />
            <ViewComponent
                onPress = {() => navigation.navigate(Routes.changepass)}>
                <TxtComponent>Đổi mật khẩu</TxtComponent>
                <IconIonicons name = 'ios-arrow-forward' size = {20} color = {Colors.gray_3} />
            </ViewComponent>
            {renderListComponent()}
            <ViewComponent 
                onPress = {() => navigation.push(Routes.login)} >
                <TxtComponent>Đăng xuất</TxtComponent>
                <IconIonicons name = 'ios-arrow-forward' size = {20} color = {Colors.gray_3} />
            </ViewComponent>
        </Wrapper>
    )
}
export default index