import React, { useState, useEffect, createRef } from 'react'
import {Image, CheckBox, Alert} from 'react-native'
import { Header } from '../../../../components'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconOcticons from 'react-native-vector-icons/Octicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import IconEntypo from 'react-native-vector-icons/Entypo'
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
import RNPickerSelect from 'react-native-picker-select';
import DataLocal from '../../../OverView/Home/fakeData'
import Modal from 'react-native-modal'
import MapView, { Marker, Callout } from 'react-native-maps';
import Constants from '../../../../utils/Constants'

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
    ViewBtDetail,
    ViewModal,
    BtModal,
    TxtBtModal,
    Bt
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
    }};

    const latitudeDelta = 0.0999;
    const longitudeDelta = 0.0621;
   
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
    const [statusVisibale ,setStatusVisibale] = useState(false)
    const [currentLat, setCurrentLat] = useState(20.942220)
    const [currentLong, setCurrentLong] = useState(106.060027)
    const [typeMap , setTypeMap] = useState('standard')

    const region = {
      latitude: currentLat,
      longitude: currentLong,
      latitudeDelta,
      longitudeDelta,
    }

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
      function conFirmPickerSelect(value) {
        setLocation(value)
      }
     
      function renderModalLocation() {
        return(
            <Modal
                isVisible={statusVisibale}
                style = {{height: '100%', maxWidth: '100%', alignSelf: "center"}}
                coverScreen
                backdropOpacity={0.5}
                useNativeDriver={true}>
                <ViewModal>
                    <MapView
                      initialRegion={region}
                      showsUserLocation={true}
                      scrollEnabled
                      zoomEnabled
                      pitchEnabled
                      style={{
                        marginTop: 5 ,
                        shadowColor: 'gray',
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        height: '90.5%',
                        borderRadius: 10,
                        marginHorizontal: 5,
                        marginVertical: 5,
                        elevation: 1

                      }}
                      onPress={(e)=>{
                        setCurrentLat(e.nativeEvent.coordinate.latitude);
                        setCurrentLong(e.nativeEvent.coordinate.longitude);
                        console.log('lat', e.nativeEvent.coordinate.latitude)
                        console.log('lng', e.nativeEvent.coordinate.longitude)
                      }}
                      mapType={typeMap}
                      // ref={mapRef}
                    >
                      <Marker.Animated
                        ref={marker => { this.marker = marker }}
                        coordinate={{
                          latitude: currentLat,
                          longitude: currentLong 
                        }}
                      />
                    </MapView>
                    <BtModal>
                        <Bt onPress = {() => setStatusVisibale(false)} style = {{borderBottomRightRadius: 7, borderBottomLeftRadius: 7}} >
                          <TxtBtModal>OK</TxtBtModal>
                        </Bt>
                    </BtModal>
                </ViewModal>
            </Modal>
        )
    }

    function addDetailTour() {
      setIsLoadingCreateState(true)
      if(!data || !location || !image || !startDate || !endDate || !place || !namePlace || !goTime || !currentLat || !currentLong) {
        setIsLoadingCreateState(false)
        Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin')
      } else {
  
      RNFetchBlob.fetch('POST', `${Constants.host}/DoAnTN/UploadDetailTour.php`, {
        Authorization: "Bearer access-token",
        otherHeader: "foo",
        'Content-Type': 'multipart/form-data',
      }, [
          { name: 'image', filename: 'image.png', type: 'image/png', data },
          { name: 'timeDay', data: startDate },
          { name: 'place', data: place },
          { name: 'goTime', data: goTime },
          { name: 'namePlace', data: namePlace },
          { name: 'timeStart', data: timeStart },
          { name: 'location', data: location },
          { name: 'idTour', data: `${listTourState[listTourState.length - 1].idTour}`},
          { name: 'latidute', data: `${currentLat}` },
          { name: 'longitude', data: `${currentLong}` },
  
        ]).then((resp) => {
          setIsLoadingCreateState(false)
          if(JSON.parse(resp.data).success) {
              Alert.alert('Thành công', 'Thêm lịch trình thành công \n Bạn có muốn tiếp tục thêm địa điểm cho lịch trình không?', [
                {
                  text: 'Cancel',
                  onPress:() => navigation.navigate(Routes.home)
                },
                {
                  text: 'OK',
                  onPress:() => {
                    setLocation('')
                    setData('')
                    setImage(null)
                    setStartDate()
                    setEndDate()
                    setPlace('')
                    setGoTime('')
                    setNamePlace('')
                    setTimeStart('')
                    setCurrentLat(20.942220)
                    setCurrentLong(106.060027)
                  },
                  style: 'cancel'
                }
              ])
          } else {
              Alert.alert('Thông báo', 'Thêm chi tiết tour không thành công')
          }
  
        }).catch((err) => {
          console.log('updateDetailTour err', err)
        })
      }
    }
    return (
        <Wrapper
            showsVerticalScrollIndicator = {false} >
            <Header navigation = {navigation} title = 'Tạo chi tiết lịch trình'/>
            <ViewComponent>
                <IconMaterialIcons name = 'location-city' size = {25} style = {{marginRight: 5}} />
                <BtChild
                    onPress = {()=> null}>
                    <TxtTitle>Địa điểm</TxtTitle>
                    <RNPickerSelect
                    onValueChange={(value) => conFirmPickerSelect(value)}
                    placeholder={{
                      label: 'Chọn địa điểm...',
                      value: '',
                    }}
                    placeholderTextColor = {Colors.gray_3}
                    items={DataLocal.dataDistrict}
                    value = {location}
                    useNativeAndroidPickerStyle={false}
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
            <ViewComponent>
                <IconEntypo name = 'location' size = {21} style = {{marginRight: 1, marginLeft: 5}} />
                <BtChild
                    onPress = {() => setStatusVisibale(true)}>
                    <TxtTitle>Toạ độ</TxtTitle>
                    <TxtContent
                        placeholder = 'Chọn toạ độ'
                        value = {`${currentLat}, ${currentLong}`}
                        editable = {false}
                    />
                </BtChild>
            </ViewComponent>
            <ViewBtDetail>
              <BtJoin
                  onPress = {()=> addDetailTour()}>
                  <TxtBtJoin>Thêm lịch trình</TxtBtJoin>
              </BtJoin>
            </ViewBtDetail>
            {renderDate()}
            {renderLoading()}
            {renderTimePicker()}
            {renderModalLocation()}
        </Wrapper>
    )
}

export default index
