import React, { Component } from 'react'
import {Image} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {Header} from '../../../../components'
import Colors from '../../../../utils/Colors'
import IcoAntDesign from 'react-native-vector-icons/AntDesign'
import {
    Wrapper,
    ViewTitle,
    TxtNamePlace,
    ViewIcon,
    TxtLabel,
    ViewDetailPlace,
    ViewDot,
    TxtDetailLabel
} from './styled.js'

function index(props) {
    const {navigation, route} = props
    const {item} = route.params
    const arrStar = []
    for(var i = 0; i< item.report; i++){
        arrStar.push('Star')
    }
    return (
        <Wrapper>
            <Header navigation = {navigation} title = 'Vị trí' />
            <ViewTitle>
                <Image source = {{uri: item.imageDay}}
                       style = {{width: '100%', height: '75%', borderRadius: 10, position: 'absolute', marginTop: 10, marginLeft: 10}} />
                <TxtNamePlace>{item.namePlace}</TxtNamePlace>
                <ViewIcon>
                    {
                        arrStar.map(e => (
                            <IcoAntDesign name = 'star' color = {Colors.gold} size = {17} />
                        ))
                    }
                </ViewIcon>
                <TxtLabel>Thông tin vị trí:</TxtLabel>
                <ViewDetailPlace>
                    <ViewDot></ViewDot>
                    <TxtDetailLabel>{item.location}</TxtDetailLabel>
                </ViewDetailPlace>
            </ViewTitle>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style = {{flex: 1}}
                region={{
                    latitude: item.latitude ? Number(item.latitude) : 20.890656,
                    longitude: item.longitude ? Number(item.longitude) : 104.686605,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.5,
                }}>
                <Marker
                    coordinate = {{latitude: item.latitude ? Number(item.latitude) : 20.890656, longitude: item.longitude ? Number(item.longitude) : 104.686605}}
                    title = {item.namePlace}
                />
            </MapView>
        </Wrapper>
    )
    }

export default index
