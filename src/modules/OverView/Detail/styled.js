import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'
import Shadows from '../../../utils/Shadow'
import {Dimensions} from 'react-native'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.white_4};
`
export const ScrollView = styled.ScrollView `
`
export const Bt = styled.TouchableOpacity ``
export const ViewTitleDetail = styled.View `
    position: absolute;
    width: 75%;
    height: 90;
    background-color: ${Colors.white_4};
    z-index: 999;    
    border-radius: 7;
    top: ${Dimensions.get('window').height*0.24};
    left: ${Dimensions.get('window').width*0.13};
    ${Shadows.shadow_1};
    padding: 5px;
    padding-left: 10;
    padding-right: 10;
`
export const TxtTitle = styled.Text `
    font-size: 17.5;
    font-weight: bold;
    color: ${Colors.black};
    margin-bottom: 7;
`
export const TxtTitlechildren = styled.Text `
    font-size: 13;
    color: ${Colors.gray_2};
`
export const WrapperHeader = styled.View `
    width: 100%;
    height: 85;
    background-color: ${Colors.white_4};
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    padding-top: 40px;
`
export const WrapperMoney = styled.View `
    flex-direction: row;
    width: 100%;
    height: 9%;
    background: ${Colors.white_4};
    padding-top: 10;
    padding-bottom: 10;
    padding-left: 20;
    padding-right: 10;
    justify-content: space-between;
    align-items: center;
    border-top-width: 0.5;
`
export const ViewChildrenMoney = styled.View `
`
export const BtJoin = styled.TouchableOpacity `
    width: 120;
    height: 54;
    background-color: ${Colors.red};
    border-radius: 5;
    justify-content: center;
    align-items: center;
`
export const TxtBtJoin = styled.Text `
    color: white;
    font-size: 17;
`
