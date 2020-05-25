import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import Colors from '../../../utils/Colors'
import Routes from '../../../utils/Routes'
import imagetravel from '../../../assets/image/156-1563673_about-me-icon-đi-du-lịch.png'

import {
    Wrapper,
    TxtTitle,
    ViewEmpty,
    BtJoin,
    TxtBtJoin
} from './styled'

const arrTest = []

function index(props) {
    
    const {navigation} = props
    const [colorWrapper, setColorWrapper] = useState(arrTest.length > 0 ? Colors.white_4 : Colors.gray_4)
    return (
        <Wrapper style = {{backgroundColor: colorWrapper}} >
            {
                !arrTest.length ? 
                    <ViewEmpty>
                        <Image source = {imagetravel} 
                            style = {{width: 170, height: 170, alignSelf: 'center', marginTop: '70%'}}/>
                        <TxtTitle>
                            Hãy bắt đầu tạo chuyến đi của bạn với một lịch trình hấp dẫn và chi phí tối ưu nhất.
                        </TxtTitle>
                        <BtJoin
                            onPress = {()=> navigation.navigate(Routes.createtour) }>
                            <TxtBtJoin>Lên lịch trình</TxtBtJoin>
                        </BtJoin>
                    </ViewEmpty>
                :
                    <TxtTitle>
                        Từ từ mới làmm
                    </TxtTitle>
            }
           
        </Wrapper>
        )
    }

export default index
