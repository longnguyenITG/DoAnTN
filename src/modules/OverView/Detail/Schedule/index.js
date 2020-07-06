import React, { useState, createRef } from 'react'
import { Image } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Header } from '../../../../components'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../../../utils/Colors'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Modal from 'react-native-modal'
import Routes from '../../../../utils/Routes'

import {
    Wrapper,
    ScrollView,
    ViewItem,
    ViewChildrenImage,
    ViewChildrenTitle,
    TxtTimeStart,
    TxtTitle,
    TxtPlace,
    ViewRowChild,
    TxtDocument,
    BtDetail,
    ViewFatherItem,
    Line,
    ViewCar,
    TxtGoTime,
    ViewGoTime,
    ViewModal,
    BtModal,
    TxtBtModal,
    TxtReport,
} from './styled'

function index(props) {
    
    const {navigation, route} = props
    const {item} = route.params
    const insets = useSafeArea()
    const refReport = createRef()
    const [statusVisibale ,setStatusVisibale] = useState(false)
    const [statusReport, setStatusReport] = useState(false)
    function renderCar(e, i) {
        return (
            <ViewCar>
                <Line></Line>
                <IconFontAwesome5 name = 'car' size = {23} color = {Colors.secondary_22} style = {{marginLeft: 20, marginTop: 3, marginBottom: 5}} />
                <ViewGoTime>
                <TxtGoTime>{e.goTime}</TxtGoTime>
                </ViewGoTime>
                <Line  style = {{marginTop: 5, marginBottom: 5}}></Line>
            </ViewCar>
        )
    }

    function renderModalReport(item) {
        return(
            <Modal
                isVisible={statusVisibale}
                style = {{maxHeight: '80%', maxWidth: '80%', alignSelf: "center"}}
                coverScreen
                backdropOpacity={0.5}
                useNativeDriver={true}>
                <ViewModal>
                    {/* <TxtReport>{item.desCription}</TxtReport> */}
                    <BtModal
                        onPress = {() => setStatusVisibale(false)}>
                        <TxtBtModal>OK</TxtBtModal>
                    </BtModal>
                </ViewModal>
            </Modal>
        )
    }

    return (
        <Wrapper
            style = {{
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                }}>
                <Header navigation = {navigation} iconRight = 'md-more' title = 'Chi tiết lịch trình'/>
                <ScrollView
                    showsVerticalScrollIndicator = {false}>
                    {
                        item.map((e, i) => (
                            <ViewFatherItem key = {i} >
                                <ViewItem>
                                    <ViewChildrenImage>
                                        <Image source = {{uri: e.imageDay}} style = {{height: 100, width: 106, marginRight: 5}} />
                                        <TxtTimeStart>{e.timeStart}</TxtTimeStart>
                                    </ViewChildrenImage>
                                    <ViewChildrenTitle>
                                        <TxtTitle>{e.namePlace}</TxtTitle>
                                        <TxtPlace>{e.place}</TxtPlace>
                                        <ViewRowChild>
                                            <BtDetail
                                                onPress = {() => setStatusVisibale(true)}>
                                                <IconMaterialCommunityIcons name = 'file-document-edit-outline' size = {18} color = {Colors.primary_3} />
                                                <TxtDocument>Mô tả</TxtDocument>
                                            </BtDetail>
                                            <BtDetail onPress = {() => navigation.navigate(Routes.map, {item: e})} >
                                                <IconMaterialIcons name = 'location-on' size = {18} color = {Colors.primary_3} />
                                                <TxtDocument>Vị trí</TxtDocument>
                                            </BtDetail>
                                        </ViewRowChild>
                                    </ViewChildrenTitle>
                                </ViewItem>
                                {
                                    i == item.length - 1 ? null 
                                    : renderCar(e, i)

                                }
                                {statusVisibale && renderModalReport(e)}
                            </ViewFatherItem>
                        ))
                    }
                </ScrollView>                
        </Wrapper>
    )
}

export default index
