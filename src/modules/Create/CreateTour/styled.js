import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.ScrollView `
    flex: 1;
    margin-bottom: 100;
`
export const ViewComponent = styled.View `
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    margin-top: 20;
`
export const ViewChild = styled.View `
    border-bottom-width: 0.3;
    border-bottom-color: ${Colors.gray_4};
    height: 70;
    width: 90%;
    margin-left: 10;
    justify-content: center;
`
export const BtChild = styled.TouchableOpacity `
    border-bottom-width: 0.3;
    border-bottom-color: ${Colors.gray_4};
    height: 70;
    width: 90%;
    margin-left: 10;
    justify-content: center;
`
export const TxtTitle = styled.Text `
    font-weight: bold;
    color: ${Colors.gray_3};
    font-size: 15;
    padding-left: 4;
`
export const TxtContent = styled.TextInput `
    font-size: 16;
    color: ${Colors.gray_2};
`
export const View = styled.View ``
export const BtJoin = styled.TouchableOpacity `
    width: 250;
    height: 43;
    background-color: ${Colors.red};
    border-radius: 5;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 30;
`
export const TxtBtJoin = styled.Text `
    color: white;
    font-size: 16;
`