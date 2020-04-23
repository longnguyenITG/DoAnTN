import React, {useRef, useEffect} from 'react'
import {Animated, StyleSheet, View} from 'react-native'
import image from '../../../assets/image/sflashscreen.jpg'

import {
    Wrapper,
    Image
} from './styled'

function index (props) {
    const {navigation} = props
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000
          }).start();
    }, [])
    function renderLogin (){
        setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 2000
            }).start();
        }, 5000);
        setTimeout(() => {
            navigation.navigate('Login');
        }, 7000);
    }
    return(
        <Wrapper>
            <Animated.View  style = {{opacity: fadeAnim}} >
                <Image source = {image}/>      
            </Animated.View>     
            {renderLogin()}
        </Wrapper>
    );
}

export default index
