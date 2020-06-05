import React from 'react'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Colors from '../../utils/Colors'
import {
    ViewHeader,
    Bt,
    TxtTitle
} from './styled'

function index(props) {
    const {navigation, iconRight, onCLick, title, transparent} = props

    // 'ios-call'
    return(
        <ViewHeader style = {{justifyContent: iconRight ? 'space-between' : null, backgroundColor: transparent ? 'transparent' : Colors.white_5}} >
            <Bt onPress = {() => navigation.goBack()}>
                <IconIonicons name = 'md-arrow-back' size = {27} color = {transparent ? 'white' : Colors.black}/>
            </Bt>
            {
                title 
                ?   <TxtTitle style = {{marginLeft: iconRight ? 0 : 30, color: transparent ? 'white' : Colors.black }}>{title}</TxtTitle>
                :   null
                }
            {
                iconRight
                ?   <Bt onPress = {() => onCLick ? onCLick() : null} >
                        <IconIonicons name = {iconRight} size = {25} color = {transparent ? 'white' : Colors.black}/>
                    </Bt>
                :   null
            }
           
        </ViewHeader>
    )
}
export default index