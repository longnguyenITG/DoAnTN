import React, { useState, useEffect, createRef } from 'react'
import {Image, CheckBox, Alert} from 'react-native'
import { Header } from '../../../../components'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import Colors from '../../../../utils/Colors'
import Calendar from 'react-native-calendar-select';
import moment from 'moment'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
import {isLoadingCreate} from '../../atom'
import {useRecoilState} from 'recoil'
import {Loading} from '../../../../components'
import Routes from '../../../../utils/Routes'
import {listTour} from '../../../OverView/atom'
import {getListTourUpdated} from '../../selector'
import TimePicker from "react-native-24h-timepicker";
import {
    Wrapper,
    ViewComponent,
    ViewChild,
    TxtTitle,
    TxtContent,
    View,
    BtJoin,
    TxtBtJoin,
    BtChild,
    ViewBtDetail
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
    const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    };
    const dateRef = createRef()
    const clockRef = createRef()

    const [isLoadingCreateState, setIsLoadingCreateState] = useRecoilState(isLoadingCreate)
    const [listTourState, setListTourState] = useRecoilState(listTour)

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [place, setPlace] = useState('')
    const [goTime, setGoTime] = useState('')
    const [namePlace, setNamePlace] = useState('')
    const [location, setLocation] = useState('')
    const [timeStart, setTimeStart] = useState('')
    const [image, setImage] = useState(null)
    const [data, setData] = useState('')

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
    function everImagePicker(){
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            // const source = { uri: response.uri };
            console.log('data image', response)
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            setImage(response.uri)
            setData(response.data)
          }
        });
      }

      function updateTour() {
        setIsLoadingCreateState(true)
        if(!data || !title || !image || !startDate || !endDate || !sumDay || !sumMoney) {
          setIsLoadingAccountState(false)
          Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin')
        } else {
    
        RNFetchBlob.fetch('POST', `${Constant.host}/DoAnTN/UploadTour.php`, {
          Authorization: "Bearer access-token",
          otherHeader: "foo",
          'Content-Type': 'multipart/form-data',
        }, [
            { name: 'image', filename: 'image.png', type: 'image/png', data },
            { name: 'idUser', data: dataAccount.idUser },
            { name: 'title', data: title },
            { name: 'timeCreate', data: startDate },
            { name: 'sumDay', data: sumDay },
            { name: 'sumMoney', data: sumMoney },
            { name: 'deal', data: deal ? 1 : 0 },
    
          ]).then((resp) => {
            setIsLoadingCreateState(false)
            if(JSON.parse(resp.data).success) {
              getListTourUpdated(setListTourState)
              navigation.navigate(Routes.createdetail)
            } else {
                Alert.alert('Thông báo', 'Thêm Tour không thành công')
            }
    
          }).catch((err) => {
            console.log('updateAccount err', err)
          })
        }
      }
    
      function renderLoading() {
        return(
          <Loading isVisible = {isLoadingCreateState} />
        )
      }

      function renderTimePicker() {
        return(
          <TimePicker
            ref={clockRef}
            onCancel={() => clockRef.current.close()}
            onConfirm={(hour, minute) => conFirmTime(hour, minute)}
          />
        )
      }
      function conFirmTime(hour, minute) {
        setTimeStart(`${hour}:${minute}`)
        clockRef.current.close()
      }
    return (
        <Wrapper
            showsVerticalScrollIndicator = {false} >
            <Header navigation = {navigation} title = 'Tạo chi tiết lịch trình'/>
            <ViewComponent>
                <IconMaterialIcons name = 'location-city' size = {25}  />
                <BtChild>
                    <TxtTitle>Địa điểm</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn địa điểm'
                        value = {location}
                        editable = {false}
                    />
                </BtChild>
            </ViewComponent>
            <ViewComponent>
                <IconMaterialIcons name = 'image' size = {26} style = {{marginRight: 5}} />
                {
                    image && <Image source = {{uri: image}} style = {{width: 100, height: 100, marginBottom: 60, marginLeft: 10, alignSelf: 'center'}} />
                }
                <BtChild
                    onPress = {()=> everImagePicker()}>
                    <TxtTitle>Ảnh mô tả</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn ảnh'
                        editable = {false}
                    />
                </BtChild>
            </ViewComponent>
            <ViewComponent>
                <IconAntDesign name = 'calendar' size = {22} style = {{marginLeft: 1, marginRight: 5}}/>
                <BtChild style = {{flexDirection: 'row', justifyContent: 'space-between'}} 
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
                </BtChild>
            </ViewComponent>
            <ViewComponent>
                <IconMaterialIcons name = 'location-on' size = {21} style = {{marginRight: 4, marginLeft: 2}} />
                <ViewChild>
                    <TxtTitle>Tổng số địa điểm & khoảng cách</TxtTitle>
                    <TxtContent
                        placeholder = 'Nhập...'
                        onChangeText = {text=> setPlace(text)}
                        value = {place}
                    />
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconMaterialIcons name = 'directions-bike' size = {21} style = {{marginRight: 3, marginLeft: 4}} />
                <ViewChild>
                    <TxtTitle>Thời gian di chuyển</TxtTitle>
                    <TxtContent
                        placeholder = 'Nhập thời gian di chuyển'
                        onChangeText = {text=> setGoTime(text)}
                        value = {goTime}
                    />
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconMaterialCommunityIcons name = 'rename-box' size = {21} style = {{marginRight: 3, marginLeft: 4}} />
                <ViewChild>
                    <TxtTitle>Tên địa điểm</TxtTitle>
                    <TxtContent
                        placeholder = 'Nhập tên địa điểm'
                        onChangeText = {text=> setNamePlace(text)}
                        value = {namePlace}
                    />
                </ViewChild>
            </ViewComponent>
            <ViewComponent>
                <IconAntDesign name = 'clockcircleo' size = {21} style = {{marginRight: 1, marginLeft: 5}} />
                <BtChild
                    onPress = {()=> clockRef.current.open()}>
                    <TxtTitle>Thời gian bắt đầu</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn thời gian bắt đầu'
                        value = {timeStart}
                        editable = {false}
                    />
                </BtChild>
            </ViewComponent>
            <ViewBtDetail>
              <BtJoin
                  style = {{borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: 3}}
                  onPress = {()=> null}>
                  <TxtBtJoin>Hoàn thành</TxtBtJoin>
              </BtJoin>
              <BtJoin
                  style = {{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                  onPress = {()=> null}>
                  <TxtBtJoin>Thêm lịch trình</TxtBtJoin>
              </BtJoin>
            </ViewBtDetail>
           
            {renderDate()}
            {renderLoading()}
            {renderTimePicker()}
        </Wrapper>
    )
}

export default index
