import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import IconEye from 'react-native-vector-icons/Feather'
import { useSafeArea } from 'react-native-safe-area-context'
import {
    Wrapper,
    TxtTitle,
    BackBT,
    WrapperIP,
    TxtIpTitle,
    TxtIpEmail,
    ViewIP,
    Bt,
    View
} from './styled'

function index(props) {
    const insets = useSafeArea();
    const [hideTitleEmail, SetHideTitleEmail] = useState(false)
    const [hideTitlePassWord, SetHideTitlePassWord] = useState(false)
    const [seePass, SetSeePass] = useState(false)
    const [txtEmail, SettxtEmail] = useState('')
    const [txtPassWord, SettxtPassWord] = useState('')
    
    function renderInput(hideTitle, txtTitle, playHoder, setText, setHide, value, setHideMore, icon){
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
                            />  
                        {icon 
                            ? 
                                <Bt
                                    onPress = {() => SetSeePass(!seePass)}
                                >
                                    {
                                        seePass 
                                        ? <IconEye name= 'eye-off' size = {18} style = {{marginTop: 13, marginLeft: 20}}/> 
                                        : <IconEye name= 'eye' size = {18} style = {{marginTop: 13, marginLeft: 20}}/> 
                                    }                                
                                </Bt>
                            : null}        
                </WrapperIP>
            </ViewIP>
        )
    }
    function renderTxtIP() {
        return(
        <View>
            {renderInput(hideTitleEmail, 'Email', 'Email...', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitlePassWord)}
            {renderInput(hideTitlePassWord, 'Mật khẩu', 'Mật khẩu...', SettxtPassWord, SetHideTitlePassWord, txtPassWord, SetHideTitleEmail, true)}
        </View>
        )        
    }

    function eventClickHide(){
        SetHideTitleEmail(false)
        SetHideTitlePassWord(false)
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
            <BackBT>
                <Icon name = 'md-arrow-back' size = {25} />
            </BackBT>
            <TxtTitle>Đăng nhập</TxtTitle>
            {renderTxtIP()}
        </Wrapper>
    )
}

export default index
