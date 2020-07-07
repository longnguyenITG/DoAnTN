import React, {useState, useEffect} from 'react'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconEye from 'react-native-vector-icons/Feather'
import { useSafeArea } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Routes from '../../../utils/Routes'
import {listAccount, isLoadingAuthen, successfullyAuthen} from '../atom'
import {useRecoilState} from 'recoil'
import {Loading} from '../../../components'
import {uploadAccount} from '../selector'
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
    const {navigation} = props
    const insets = useSafeArea();
    
    const [listAccountState, setListAccountState] = useRecoilState(listAccount)
    const [isLoadingState, setIsLoading] = useRecoilState(isLoadingAuthen)
    const [successfullyState, setSuccessfullyState] = useRecoilState(successfullyAuthen)

    const [hideTitleEmail, SetHideTitleEmail] = useState(false)
    const [hideTitlePassWord, SetHideTitlePassWord] = useState(false)
    const [hideTitleName, SetHideTitleName] = useState(false)
    const [hideTitleSdt, SetHideTitleSdt] = useState(false)
    const [seePass, SetSeePass] = useState(true)
    const [txtEmail, SettxtEmail] = useState('')
    const [txtPassWord, SettxtPassWord] = useState('')
    const [txtName, SettxtName] = useState('')
    const [txtSdt, SettxtSdt] = useState('')

    useEffect(() => {
       
        if(successfullyState){
            Alert.alert('Success', 'Đăng ký thành công.', [
                {
                    text: 'OK',
                    onPress: ()=> navigation.push(Routes.login)
                }
            ])
            SettxtEmail('')
            SettxtPassWord('')
            SettxtName('')
            SettxtSdt('')
            setSuccessfullyState(false)
        } 
    }, [successfullyState])
    
    function renderInput(hideTitle, txtTitle, playHoder, setText, setHide, value, setHideMore, setHideMore1, setHideMore2, icon, hidePass){
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
                {renderInput(hideTitleEmail, 'Tài khoản*', 'Tài khoản*', SettxtEmail, SetHideTitleEmail, txtEmail, SetHideTitlePassWord, SetHideTitleName, SetHideTitleSdt, false, false)}
                {renderInput(hideTitlePassWord, 'Mật khẩu*', 'Mật khẩu*', SettxtPassWord, SetHideTitlePassWord, txtPassWord, SetHideTitleEmail, SetHideTitleName, SetHideTitleSdt, true, true)}
                {renderInput(hideTitleName, 'Họ và tên*', 'Họ và tên*', SettxtName, SetHideTitleName, txtName, SetHideTitleEmail, SetHideTitlePassWord, SetHideTitleSdt, false, false)}
                {renderInput(hideTitleSdt, 'Số điện thoại', 'Số điện thoại', SettxtSdt, SetHideTitleSdt, txtSdt, SetHideTitleEmail, SetHideTitlePassWord, SetHideTitleName, false, false)}
            </View>
        )        
    }

    function regisTration() {
        if(txtEmail || txtPassWord || txtName) {
            const index = listAccountState.findIndex(e => e.userName == txtEmail)
            index < 0 ? uploadAccount(txtEmail, txtPassWord, txtName, txtSdt, setIsLoading, setSuccessfullyState)
            : Alert.alert('Thông báo', 'Tài khoản đã tồn tại!')
        }else{
            Alert.alert('Thông báo', 'Vui lòng nhập những thông tin bắt buộc có dấu *')
        }
         
    }
    function renderLoading(){
        return(
          <Loading isVisible={isLoadingState} />
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
            <BackBT onPress = {() => navigation.goBack()} >
                <Icon name = 'md-arrow-back' size = {25} />
            </BackBT>
            <TxtTitle>Đăng ký</TxtTitle>
            <KeyboardAwareScrollView       
                extraScrollHeight={80}
                scrollEnabled={true}
                keyboardShouldPersistTaps='handled'>
                <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 250}}>
                    {renderTxtIP()}
                    <BtLogin onPress = {()=> regisTration()} >
                        <TxtBtLogin>Đăng ký</TxtBtLogin>
                    </BtLogin>
                    <View  style = {{flexDirection: 'row'}} >
                        <TxtResgisTraTion>Bạn đã có tài khoản?</TxtResgisTraTion>
                        <Bt onPress = {()=> navigation.navigate(Routes.loginapp)} >
                            <TxtBtResgisTraTion>Đăng nhập</TxtBtResgisTraTion>
                        </Bt>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
            {renderLoading()}
        </Wrapper>
    )
}

export default index
