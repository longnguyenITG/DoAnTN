import React, {useState} from 'react'
import {Alert} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconEye from 'react-native-vector-icons/Feather'
import { useSafeArea } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Routes from '../../../utils/Routes'
import {listAccount, Account} from '../atom'
import {
    Wrapper,
    TxtTitle,
    BackBT,
    WrapperIP,
    TxtIpTitle,
    TxtIpEmail,
    ViewIP,
    Bt,
    View,
    BtLogin,
    TxtBtLogin,
    TxtBtForgotPass,
    TxtResgisTraTion,
    TxtBtResgisTraTion,
    ScrollView
} from './styled'
import { useRecoilState } from 'recoil'

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();

    const [listAccountState, setListAccountState] = useRecoilState(listAccount)
    const [AccountState, setAccountState] = useRecoilState(Account)

    const [hideTitleEmail, SetHideTitleEmail] = useState(false)
    const [hideTitlePassWord, SetHideTitlePassWord] = useState(false)
    const [seePass, SetSeePass] = useState(true)
    const [txtEmail, SettxtEmail] = useState('')
    const [txtPassWord, SettxtPassWord] = useState('')
    
    function renderInput(hideTitle, txtTitle, playHoder, setText, setHide, value, setHideMore, icon, hidePass){
        return(
            <ViewIP>
                {hideTitle ? <TxtIpTitle>{txtTitle}</TxtIpTitle> : null}
                <WrapperIP >
                        <TxtIpEmail 
                            placeholder = {playHoder}
                            onChangeText = {text => setText(text)}
                            onFocus = {() => {
                                setHide(true)
                                setHideMore(false)
                            }}
                            value = {value}
                            secureTextEntry = {hidePass ? seePass : false}
                            />  
                        {icon ? <Bt onPress = {() => SetSeePass(!seePass)}>
                            {
                                seePass == false 
                                ? <IconEye name= 'eye-off' size = {18} style = {{marginTop: 13, marginLeft: 20}}/> 
                                : <IconEye name= 'eye' size = {18} style = {{marginTop: 13, marginLeft: 20}}/> 
                            }                                
                                </Bt>
                        : null }        
                </WrapperIP>
            </ViewIP>
        )
    }
    function renderTxtIP() {
        return(
            <View>
                {renderInput(hideTitleEmail, 'Tài khoản', 'Tài khoản...', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitlePassWord, false, false)}
                {renderInput(hideTitlePassWord, 'Mật khẩu', 'Mật khẩu...', SettxtPassWord, SetHideTitlePassWord, txtPassWord, SetHideTitleEmail, true, true)}
            </View>
        )        
    }

    function Login() {
        if(listAccountState) {
           let AccountIndex = listAccountState.findIndex(e => e.userName == txtEmail && e.passWord == txtPassWord)
           if(AccountIndex >= 0){
                setAccountState(listAccountState[AccountIndex])
                navigation.navigate(Routes.home)
                SettxtPassWord('')
           }else{
                Alert.alert('Thông báo', 'Tài khoản hoặc mật khẩu không chính xác!')
           }
        } 
    }

    return(
        <Wrapper
            style = {{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }}>
            <BackBT onPress = {() => navigation.goBack()} >
                <Icon name = 'md-arrow-back' size = {25} />
            </BackBT>
            <TxtTitle>Đăng nhập</TxtTitle>
            {renderTxtIP()}
            <BtLogin onPress = {() => Login()} >
                <TxtBtLogin>Đăng nhập</TxtBtLogin>
            </BtLogin>
            <Bt onPress = {()=> navigation.navigate(Routes.forgotpassword)} >
                <TxtBtForgotPass>Quên mật khẩu?</TxtBtForgotPass>
            </Bt>
            <View  style = {{flexDirection: 'row'}} >
                <TxtResgisTraTion>Bạn chưa có tài khoản?</TxtResgisTraTion>
                <Bt onPress = {()=> navigation.navigate(Routes.registration)} >
                    <TxtBtResgisTraTion>Đăng ký</TxtBtResgisTraTion>
                </Bt>
            </View>
        </Wrapper>
    )
}

export default index
