import React from 'react'
import { FlatList } from 'react-native'
import {
    ViewHeader,
    TxtTitle,
    Bt,
    TxtMore,
    View
} from './styled'

function index (props){
    const {styleViewHeader, data, renderItem, title} = props
    return(
        <View>
            <ViewHeader style = {styleViewHeader} >
                <TxtTitle style = {{fontSize: 20}} >{title}</TxtTitle>
                <Bt>
                    <TxtMore>Tất cả</TxtMore>
                </Bt>
            </ViewHeader>
            <FlatList
                style = {{flexGrow: 0, marginBottom: 20, marginTop: 10, marginLeft: 20}}
                data = {data}
                renderItem = {renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal = {true}
            />
        </View>
    )
}

export default index
