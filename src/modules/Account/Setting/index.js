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
            navigateTo: ''
        },
        {
            key: 2,
            title: 'Điều kiện điều khoản',
            navigateTo: ''
        },
        {
            key: 3,
            title: 'Hướng dẫn thanh toán',
            navigateTo: ''
        },
        {
            key: 4,
            title: 'Giới thiệu Exciting journey',
            navigateTo: ''
        },
        {
            key: 5,
            title: 'Góp ý',
            navigateTo: ''
        },
    ]

    function renderListComponent() {
        return(
            <View>
                {listOption.map((item, index) => (
                    <ViewComponentChild style = {{borderTopWidth: item.key == 1 ? 0 : 0.3, borderColor: Colors.gray_5}} >
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
            <ViewComponent>
                <TxtComponent>Đăng xuất</TxtComponent>
                <IconIonicons name = 'ios-arrow-forward' size = {20} color = {Colors.gray_3} />
            </ViewComponent>
        </Wrapper>
    )
}
export default index