import React, { useState } from 'react'
import { Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Header } from '../../../../components'

import {
    Wrapper,
    ScrollView,
    ViewItem,
    ViewChildrenImage,
    ViewChildrenTitle,
    TxtTimeStart
} from './styled'

function index(props) {
    const {navigation, route} = props
    const {item} = route.params
    const insets = useSafeArea()
    debugger

    return (
        <Wrapper
            style = {{
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }}>
                <Header navigation = {navigation} iconRight = 'md-more' title = 'Chi tiết lịch trình'/>
                <ScrollView>
                    {
                        item.map(e => (
                            <ViewItem>
                                <ViewChildrenImage>
                                    <Image source = {{uri: e.imageDay}} style = {{height: 100, width: 106, marginRight: 5}} />
                                    <TxtTimeStart>{e.timeStart}</TxtTimeStart>
                                </ViewChildrenImage>
                                <ViewChildrenTitle></ViewChildrenTitle>
                            </ViewItem>
                        ))
                    }
                </ScrollView>

        </Wrapper>
    )
}

export default index
