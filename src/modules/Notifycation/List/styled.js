import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1
`
export const ViewHeader = styled.View `
    width: 100%;
    height: 75;
    align-items: center;
    justify-content: center;
    padding-top: 23;
    background-color: ${Colors.white_4};
    ${Shadows.shadow_3}
    border-bottom-width: 0.2;
    border-color: ${Colors.gray_5};
`
export const TxtTitle = styled.Text `
    font-size: 20;
`
export const WrapperItem = styled.TouchableOpacity `
    width: 100%;
    height: 90;
    border-bottom-width: 0.2;
    border-color: ${Colors.gray_4};
    background-color: ${Colors.white_4};
    padding-left: 15;
    padding-right: 15;
    align-items: center;
    flex-direction: row;
`
export const ViewChild = styled.View `
    margin-left: 15;
    width: 80%;
    height: 100%;
    justify-content: center;
`
export const TxtTime = styled.Text `
    font-size: 13;
    color: ${Colors.gray_3};
    margin-top: 5;
`