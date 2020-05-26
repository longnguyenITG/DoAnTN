import React, { useState, useEffect, createRef } from 'react'
import { Header } from '../../../components'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../../../utils/Colors'
import Calendar from 'react-native-calendar-select';
import moment from 'moment'
import {
    Wrapper,
    ViewComponent,
    ViewChild,
    TxtTitle,
    TxtContent,
    View,
    BtJoin,
    TxtBtJoin
} from './styled'

function index(props) {
    const {navigation} = props
    let customI18n = {
        'w': ['', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        'weekday': ['', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
        'text': {
          'start': 'Ngày đi',
          'end': 'Ngày về',
          'date': '--',
          'save': 'Hoàn thành',
          'clear': 'Xoá'
        },
        'date': 'DD-MM-YYYY'  // date format
      };
    let color = {
        subColor: Colors.white_4
      };
    const dateRef = createRef()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    function confirmDate({startDate, endDate, startMoment, endMoment}) {
        setStartDate(moment(String(startDate)).format('DD-MM-YYYY'))
        setEndDate(moment(String(endDate)).format('DD-MM-YYYY'))
    }

    function renderDate() {
        return(
            <Calendar
            i18n="en"
            ref={dateRef}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            // minDate="20100510"
            // maxDate="20100312"
            startDate={startDate}
            endDate={endDate}
            onConfirm={confirmDate}
        />
        )
    }
    return (
        <Wrapper>
            <Header navigation = {navigation} title = 'Tạo lịch trình' iconRight = 'md-help-circle'/>
            <ViewComponent>
                <IconMaterialIcons name = 'my-location' size = {25}  />
                <ViewChild>
                    <TxtTitle>Điểm xuất phát</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn điểm xuất phát'
                        editable = {false}
                    />
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconOcticons name = 'location' size = {24} style = {{marginLeft: 3, marginRight: 5}} />
                <ViewChild>
                    <TxtTitle>Điểm đến</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn điểm đến'
                        editable = {false}
                    />
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconAntDesign name = 'calendar' size = {22} style = {{marginLeft: 1, marginRight: 5}}/>
                <ViewChild style = {{flexDirection: 'row', justifyContent: 'space-between'}} 
                    onPress = {() => dateRef.current.open()}>
                    <View>
                        <TxtTitle>Ngày khởi hành</TxtTitle>
                            <TxtContent
                                placeholder = 'Chọn ngày'
                                editable = {false}
                                value = {startDate}
                            />
                    </View>
                    <IconFontAwesome5 name = 'exchange-alt' size = {20} color = {Colors.gray_3} />
                    <View style = {{marginRight: 50}} >
                        <TxtTitle>Ngày về</TxtTitle>
                            <TxtContent
                                placeholder = 'Chọn ngày'
                                editable = {false}
                                value = {endDate}
                            />
                    </View>
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconFontisto name = 'persons' size = {21} style = {{marginRight: 4}} />
                <ViewChild>
                    <TxtTitle>Số người</TxtTitle>
                    <TxtContent
                        placeholder = '2 người lớn'
                        editable = {false}
                    />
                </ViewChild>
            </ViewComponent>
            <BtJoin
                onPress = {()=> null}>
                <TxtBtJoin>Tiếp tục</TxtBtJoin>
             </BtJoin>
            {renderDate()}
        </Wrapper>
    )
}

export default index
