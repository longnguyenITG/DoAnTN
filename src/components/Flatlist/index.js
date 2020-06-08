import React from 'react'
import { FlatList } from 'react-native'
import Routes from '../../utils/Routes'
import {
    ViewHeader,
    TxtTitle,
    Bt,
    TxtMore,
    View
} from './styled'

function index (props){
    const {styleViewHeader, data, renderItem, title, onPress, navigation, item} = props
    return(
        <View>
            <ViewHeader style = {styleViewHeader} >
                <TxtTitle style = {{fontSize: 20}} >{title}</TxtTitle>
                <Bt
                    onPress = {() => onPress ? navigation.navigate(Routes.viewall, {item}) : null}>
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
