import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Fonts from '../../../../utils/Fonts'
import Shadows from '../../../../utils/Shadow'
import {Dimensions} from 'react-native'

export const Wrapper = styled.View `
    width: 100%;
    height: 650;
    padding-top: 30;
    padding-left: 20;
    padding-right: 20;
    padding-bottom: 50;
`
export const Bt = styled.TouchableOpacity ``
export const WrapperTitle = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10;
    margin-left: 3;
    margin-right: 3;
`
export const TxtTitle = styled.Text `
    font-size: 18;
    font-weight: bold;
    color: ${Colors.black};
`
export const TxtTitleMore = styled.Text `
    font-size: 15;
    color: ${Colors.primary_1};
`
export const WrapperItemFLRecentLy = styled.TouchableOpacity`
    width: 300;
    height: 300;
    margin-right: 10;
    border-radius: 15;
    background-color: ${Colors.white_3};
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 0;
`
export const TxtDay = styled.Text `
    width: 60;
    height: 25;
    background-color: ${Colors.black};
    border-top-left-radius: 50;
    border-bottom-left-radius: 50;
    color: ${Colors.white};
    position: absolute;
    top: 10%;
    right: 0;
    padding-left: 10;
    padding-top: 3;
    font-size: 12;
`
export const TxtContentDay = styled.Text `
    font-size: 13;
    color: ${Colors.black};
    padding-top: 3;
    padding-left: 2;
    padding-right: 5;
    font-weight: bold;
`