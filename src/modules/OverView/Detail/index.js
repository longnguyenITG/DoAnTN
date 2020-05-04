import React from 'react'
import {Image, Dimensions} from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

import {
    Wrapper,
    ScrollView,
    ViewTitleDetail,
} from './styled'

function index(props) {
    const {navigation} = props
    const insets = useSafeArea();
    return (
        <Wrapper 
            style = {{
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }}>

            <ScrollView>
                <Image  
                    source = {{uri: 'https://media-a.laodong.vn/Storage/NewsPortal/2017/8/28/551691/Du-Lich_1.jpg'}} 
                    style = {{width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.3 }}/>
                  
                    <ViewTitleDetail></ViewTitleDetail>
            </ScrollView>
        </Wrapper>
    )
}

export default index
