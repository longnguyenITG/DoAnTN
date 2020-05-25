import React, { useState, useEffect, createRef } from 'react'
import { ListView } from 'react-native'
import { Header } from '../../../components'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../../../utils/Colors'
import Calendar from 'react-native-calendar-select';
import {
    Wrapper,
    ViewComponent,
    ViewChild,
    TxtTitle,
    TxtContent,
    View
} from './styled'

function index(props) {
    const {navigation} = props
    let color = {
        subColor: '#f0f0f0'
      };
      let customI18n = {
        'w': ['', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        'weekday': ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'text': {
          'start': 'Check in',
          'end': 'Check out',
          'date': 'Date',
          'save': 'Confirm',
          'clear': 'Reset'
        },
        'date': 'DD / MM'  // date format
      };
    const dateRef = createRef()

    const [startDate, setStartDate] = useState(new Date(2017, 6, 12))
    const [endDate, setEndDate] = useState(new Date(2017, 8, 2))

    function confirmDate({startDate, endDate, startMoment, endMoment}) {
        setStartDate(startDate)
        setEndDate(endDate)
    }

    function renderDate() {
        return(
            <Calendar
            i18n="en"
            ref={dateRef}
            customI18n={customI18n}
            color={color}
            format="YYYYMMDD"
            minDate="20100510"
            maxDate="20100312"
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
                                placeholder = '25/05/2020'
                                editable = {false}
                            />
                    </View>
                    <IconFontAwesome5 name = 'exchange-alt' size = {20} color = {Colors.gray_3} />
                    <View style = {{marginRight: 50}} >
                        <TxtTitle>Ngày về</TxtTitle>
                            <TxtContent
                                placeholder = '25/05/2020'
                                editable = {false}
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
            {renderDate()}
        </Wrapper>
    )
}

export default index
