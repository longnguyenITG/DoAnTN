import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.gray_6};
`
export const View = styled.View `
    background-color: ${Colors.white};
    border-width: 0.2;
    border-color: ${Colors.gray_5};
    padding-left: 20;

`
export const ViewComponent = styled.TouchableOpacity `
    width: 100%;
    height: 50;
    background: ${Colors.white};
    margin-top: 30;
    border-width: 0.2;
    border-color: ${Colors.gray_5};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 20;
    padding-right: 20;
    margin-bottom: 30;
`
export const TxtComponent = styled.Text `
    font-size: 16;
`
export const ViewComponentChild = styled.TouchableOpacity `
    background-color: ${Colors.white};
    padding-right: 20;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50;
`