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
export const View = styled.View `
    width: 100%;
    height: 100%;
    background: blue;
`
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
export const TxtTabBar = styled.Text `
    font-size: 13;
`
export const TxtTitle = styled.Text `
    font-size: 17.5;
    font-weight: bold;
    color: ${Colors.black};
    margin-bottom: 7;
`
export const TxtTitlechildren = styled.Text `
    font-size: 15;
    color: ${Colors.gray_3};
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