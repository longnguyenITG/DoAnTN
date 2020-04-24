import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import IconEye from 'react-native-vector-icons/Feather'
import { useSafeArea } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();
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
                {renderInput(hideTitleEmail, 'Email', 'Email...', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitlePassWord, false, false)}
                {renderInput(hideTitlePassWord, 'Mật khẩu', 'Mật khẩu...', SettxtPassWord, SetHideTitlePassWord, txtPassWord, SetHideTitleEmail, true, true)}
            </View>
        )        
    }

    return(
        <Wrapper
            style = {{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right
            }}
        >
            <BackBT onPress = {() => navigation.goBack()} >
                <Icon name = 'md-arrow-back' size = {25} />
            </BackBT>
            <TxtTitle>Đăng nhập</TxtTitle>
            {renderTxtIP()}
            <BtLogin>
                <TxtBtLogin>Đăng nhập</TxtBtLogin>
            </BtLogin>
            <Bt>
                <TxtBtForgotPass>Quên mật khẩu?</TxtBtForgotPass>
            </Bt>
            <View  style = {{flexDirection: 'row'}} >
                <TxtResgisTraTion>Bạn chưa có tài khoản?</TxtResgisTraTion>
                <Bt>
                    <TxtBtResgisTraTion>Đăng ký</TxtBtResgisTraTion>
                </Bt>
            </View>
        </Wrapper>
    )
}

export default index
