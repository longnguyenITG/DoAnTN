import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Fonts from '../../../../utils/Fonts'
import Shadows from '../../../../utils/Shadow'
import {Dimensions} from 'react-native'

export const Wrapper = styled.View `
    width: 100%;
    padding-top: 20;
    padding-left: 20;
    padding-right: 20;
    padding-bottom: 50;
`
export const TxtEmpty = styled.Text `
    font-size: 14;
    font-style: italic;
    color: ${Colors.gray_3};
    align-self: center;
`
export const WrapperItem = styled.View `
    ${Shadows.shadow_2};
    width: 97%;
    height: 150;
    background-color: ${Colors.white_4};
    z-index: 999;    
    border-radius: 7;
    margin-bottom: 10;
    align-self: center;
    border-width: 0.5;
    border-color: ${Colors.gray_5};
    padding: 10px;
`
export const TxtTitleItem = styled.Text `
    color: ${Colors.black};
    font-weight: bold;
    font-size: 16;
    margin-right: 10;
`
export const TxtTimeItem = styled.Text `
    font-size: 13;
    color: ${Colors.gray_3};
    font-weight: bold;
    margin-top: 3;
`
export const ViewRow = styled.View `
    flex-direction: row;
    width: 155;
`
export const ViewBtItem = styled.View `
    height: 55;
    width: 320;
    border-top-width: 0.3;
    margin-top: 17;
    padding: 20px;
    justify-content: center;
`
export const BtDetailItem = styled.TouchableOpacity `
    width: 80;
    height: 35;
    border-radius: 5;
    background-color: ${Colors.secondary_23};
    align-self: flex-end;
    align-items: center;
    justify-content: center;
`
export const TxtBtDetail = styled.Text `
    font-size: 15;
    color: ${Colors.white_4};
    font-weight: bold;
`
export const BtFill = styled.TouchableOpacity `
    flex-direction: row;
    ${Shadows.shadow_2};
    width: 97%;
    height: 50;
    background-color: ${Colors.white_4};
    z-index: 999;    
    border-radius: 7;
    align-self: center;
    border-width: 0.5;
    border-color: ${Colors.gray_5};
    padding: 10px;
    margin-top: 5;
    align-items: center;
    justify-content: center;
`
export const TxtBtFill = styled.Text `
    color: ${Colors.secondary_22};
    font-size: 15;
    margin-left: 5;
    font-weight: bold;
`