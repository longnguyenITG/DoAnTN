import React, { useState, useEffect } from 'react'
import { FlatList, Image, Share } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import Colors from '../../../../utils/Colors'
import Helpers from '../../../../utils/Helpers'
import Routes from '../../../../utils/Routes'
import IconFeather from 'react-native-vector-icons/Feather'
import {isLoadingMyTour, listTourWent} from '../../atom'
import {Account} from '../../../Login/atom'
import {useRecoilState, useSetRecoilState} from 'recoil'
import {getListTourWent, deleteLiked, uploadLiked, deleteAtomLikeWent, uploadAtomLikeWent} from '../../selector'
import {Loading} from '../../../../components'
import {
    Wrapper,
    WrapperItemFLRecentLy,
    ViewAccFL,
    ViewNameAcc,
    TxtItemName,
    TxtItemTimeAgo,
    Bt,
    TitleTourItem,
    WrapContentTour,
    ViewChildContentTour,
    ViewAccChild,
    ViewIcon,
    BtAddTour,
    ViewEmpty,
    TxtTitle,
    BtJoin,
    TxtBtJoin
} from './styled'
function index(props) {

    const {navigation} = props

    const [isLoadingState, setIsLoadingState] = useRecoilState(isLoadingMyTour)
    const [listTourWentState, setListTourWentState] = useRecoilState(listTourWent)
    const [accountState, setAccountState] = useRecoilState(Account)

    const deleteAtomLikeWentState = useSetRecoilState(deleteAtomLikeWent)
    const uploadAtomLikeWentState = useSetRecoilState(uploadAtomLikeWent)

    useEffect(()=> {
        getListTourWent(accountState.idUser, setListTourWentState, setIsLoadingState)
    }, [])

    function renderItemUpComing ({item, index}) {
        return(
            <WrapperItemFLRecentLy>
                <ViewAccFL>
                    <Image  source = {{uri: item.image}} style = {{width: 30, height: 30, borderRadius: 60, borderWidth: 1, marginRight: 10, borderColor: Colors.gray_4}}/>
                    <ViewAccChild>
                        <ViewNameAcc>
                            <TxtItemName>{item.userName}</TxtItemName>
                            <TxtItemTimeAgo>{item.timeCreate}</TxtItemTimeAgo>
                        </ViewNameAcc>
                        <ViewIcon>
                            <Bt
                                onPress = {async ()=> {
                                try {
                                const result = await Share.share({
                                    message:
                                    'Xin chào, bạn đang chia sẻ từ Exciting Journey',
                                });
                                if (result.action === Share.sharedAction) {
                                    if (result.activityType) {
                                    // shared with activity type of result.activityType
                                    } else {
                                    // shared
                                    }
                                } else if (result.action === Share.dismissedAction) {
                                    // dismissed
                                }
                                } catch (error) {
                                alert(error.message);
                                }
                            }}>
                                <IconIonicons name = 'md-share' size = {23} color = {Colors.gray_3} style = {{marginRight: 20}} />
                            </Bt>
                            <Bt
                                onPress = {()=> {
                                    if(item.like_yn){
                                        deleteLiked(item.idTour, accountState.idUser)
                                        deleteAtomLikeWentState(index)
                                        
                                    } else {
                                        uploadLiked(item.idTour, accountState.idUser)
                                        uploadAtomLikeWentState(index)
                                        
                                    }
                                }}>
                                {
                                    item.like_yn ? 
                                    <IconIonicons name = 'ios-heart' size = {23} color = 'red'/>
                                    : <IconIonicons name = 'ios-heart-empty' size = {23} color = {Colors.gray_3} />
                                }
                            </Bt>
                        </ViewIcon>
                    </ViewAccChild>
                </ViewAccFL>
                <Bt
                    onPress = {() => navigation.navigate(Routes.detail, {item})}>
                    <Image source = {{uri: item.imageDesCription}} style = {{width: '100%', height: '55%'}}/>
                    <TitleTourItem>{item.title}</TitleTourItem>
                    <WrapContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconIonicons name = 'md-time' size = {25} color = {Colors.gray_3} style = {{marginRight: 10}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{item.sumDay}</TxtItemTimeAgo>
                        </ViewChildContentTour>
                        <ViewChildContentTour style = {{marginLeft: 10}} >
                            <IconFoundation name = 'dollar' size = {27} color = {Colors.secondary_12} style = {{marginRight: 5}}/>
                            <TxtItemTimeAgo style = {{fontSize: 13}}>{Helpers.formatNumber(item.sumMoney)}đ</TxtItemTimeAgo>
                        </ViewChildContentTour>
                    </WrapContentTour>
                </Bt>
            </WrapperItemFLRecentLy>
        )
    }

    function renderNotList() {
        return(
            <ViewEmpty>
                {/* <Image source = {imagetravel}  */}
                <Image source = {{uri: 'https://github.com/longnguyenITG/DoAnTN/blob/master/src/assets/image/156-1563673_about-me-icon-%C4%91i-du-l%E1%BB%8Bch.png?raw=true'}} 
                    style = {{width: 130, height: 130, alignSelf: 'center', marginTop: '30%'}}/>
                <TxtTitle>
                    Bạn chưa có chuyến đi nào đã hoàn thành.
                </TxtTitle>
                <BtJoin
                    onPress = {()=> navigation.navigate(Routes.createtour) }>
                    <TxtBtJoin>Lên lịch trình</TxtBtJoin>
                </BtJoin>
            </ViewEmpty>
        )
    }

    function renderLoading(){
        return(
            <Loading isVisible = {isLoadingState} />
        )
    }

    return (
        <Wrapper>
            {
                !listTourWentState.length
                ? renderNotList()
                : <FlatList
                    style = {{paddingTop: 7}}
                    data = {listTourWentState}
                    renderItem = {renderItemUpComing}
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {(item, index) => `Went${item.idTour}`}
                    />
            }
            {renderLoading()}
        </Wrapper>
    )
}

export default index
