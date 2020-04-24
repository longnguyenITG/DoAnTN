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
    TxtResgisTraTion,
    TxtBtResgisTraTion,
    ScrollView
} from './styled'

function index(props) {
    const insets = useSafeArea();
    const [hideTitleEmail, SetHideTitleEmail] = useState(false)
    const [hideTitlePassWord, SetHideTitlePassWord] = useState(false)
    const [hideTitleName, SetHideTitleName] = useState(false)
    const [hideTitleSdt, SetHideTitleSdt] = useState(false)
    const [seePass, SetSeePass] = useState(false)
    const [txtEmail, SettxtEmail] = useState('')
    const [txtPassWord, SettxtPassWord] = useState('')
    const [txtName, SettxtName] = useState('')
    const [txtSdt, SettxtSdt] = useState('')
    
    function renderInput(hideTitle, txtTitle, playHoder, setText, setHide, value, setHideMore, setHideMore1, setHideMore2, icon){
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
                                setHideMore1(false)
                                setHideMore2(false)
                            }}
                            value = {value}
                            />  
                        {icon ? <Bt onPress = {() => SetSeePass(!seePass)}>
                            {
                                seePass 
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
                {renderInput(hideTitleEmail, 'Email*', 'Email*', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitlePassWord, SetHideTitleName, SetHideTitleSdt)}
                {renderInput(hideTitlePassWord, 'Mật khẩu*', 'Mật khẩu*', SettxtPassWord, SetHideTitlePassWord, txtPassWord, SetHideTitleEmail, SetHideTitleName, SetHideTitleSdt, true)}
                {renderInput(hideTitleName, 'Họ và tên*', 'Họ và tên*', SettxtName, SetHideTitleName, txtName, SetHideTitleEmail, SetHideTitlePassWord, SetHideTitleSdt)}
                {renderInput(hideTitleSdt, 'Số điện thoại', 'Số điện thoại', SettxtSdt, SetHideTitleSdt, txtSdt, SetHideTitleEmail, SetHideTitlePassWord, SetHideTitleName)}
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
            }}>
            <BackBT>
                <Icon name = 'md-arrow-back' size = {25} />
            </BackBT>
            <TxtTitle>Đăng ký</TxtTitle>
            <KeyboardAwareScrollView       
                extraScrollHeight={80}
                scrollEnabled={true}
                keyboardShouldPersistTaps='handled'>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 250}}>
                    {renderTxtIP()}
                    <BtLogin>
                        <TxtBtLogin>Đăng ký</TxtBtLogin>
                    </BtLogin>
                    <View  style = {{flexDirection: 'row'}} >
                        <TxtResgisTraTion>Bạn đã có tài khoản?</TxtResgisTraTion>
                        <Bt>
                            <TxtBtResgisTraTion>Đăng nhập</TxtBtResgisTraTion>
                        </Bt>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </Wrapper>
    )
}

export default index
