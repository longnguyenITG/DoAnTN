import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
`
export const ViewComponent = styled.View `
    flex-direction: row;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    margin-top:20;
`
export const ViewChild = styled.TouchableOpacity `
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