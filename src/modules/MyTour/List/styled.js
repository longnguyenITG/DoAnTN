import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'
import Fonts from '../../../utils/Fonts'

export const Wrapper = styled.View `
    flex: 1;
    padding: 10px;
    background: gray;
    align-items: center;
`
export const TxtTitle = styled.Text `
    font-size: 14;
    color: ${Colors.black};
    text-align: center;
    margin-top: 10;
`
export const ViewEmpty = styled.View `
    padding: 10px;
`
export const BtJoin = styled.TouchableOpacity `
    width: 125;
    height: 43;
    background-color: ${Colors.red};
    border-radius: 5;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 20;
`
export const TxtBtJoin = styled.Text `
    color: white;
    font-size: 16;
`