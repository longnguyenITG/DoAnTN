import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Fonts from '../../../../utils/Fonts'
import Shadows from '../../../../utils/Shadow'
import {Dimensions} from 'react-native'

export const Wrapper = styled.View `
    width: 100%;
    padding-top: 30;
    padding-left: 20;
    padding-right: 20;
    padding-bottom: 50;
`
export const Bt = styled.TouchableOpacity ``
export const View = styled.View `
    flex-direction: row;
    align-items: center;
`
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
export const WrapperInclude = styled.TouchableOpacity `
    flex-direction: row;
    justify-content: space-between;
    margin-left: 3;
    margin-right: 3;
    padding-bottom: 15;
    height: 50;
    border-bottom-width: 0.3;
    align-items: center;
    margin-top: 10;
`
export const WrapperChildrenInclude = styled.View `
    margin-left: 10;
    width: 250;
`
export const WrapperAcc = styled.TouchableOpacity `
    width: 45;
    height: 45;
    border-radius: 50;
    ${'' /* shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 0; */}
    margin-right: 15;
    margin-bottom: 7;
    border-width: 2;
    border-color: ${Colors.gray_5};
`
export const WrapperKey = styled.View `
    background-color: ${Colors.white};
    width: 20;
    height: 20;
    position: absolute;
    top: 50%;
    left: 27;
    border-radius: 50;
    border-width: 0.5;
    border-color: ${Colors.gray_3};
    justify-content: center;
    align-items: center;
`