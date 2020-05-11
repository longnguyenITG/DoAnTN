import React from 'react'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../utils/Colors'
import {
    ViewHeader,
    Bt,
    TxtTitle
} from './styled'

function index(props) {
    const {navigation, iconRight, onCLick, title} = props

    // 'ios-call'
    return(
        <ViewHeader>
            <Bt onPress = {() => navigation.goBack()}>
                <IconIonicons name = 'md-arrow-back' size = {27} color = {Colors.black}/>
            </Bt>
            {
                title 
                ?   <TxtTitle>{title}</TxtTitle>
                :   null
                }
            {
                iconRight
                ?   <Bt onPress = {() => onCLick ? onCLick() : null} >
                        <IconIonicons name = {iconRight} size = {25} color = {Colors.black}/>
                    </Bt>
                :   null
            }
           
        </ViewHeader>
    )
}
export default index