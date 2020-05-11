import styled from 'styled-components/native'
import Colors from '../../utils/Colors'
import Shadows from '../../utils/Shadow'

export const Bt = styled.TouchableOpacity ``
export const ViewHeader = styled.View `
    flex-direction: row;
    justify-content: space-between;
    height: 75;
    padding-left: 20;
    padding-right: 20;
    padding-bottom: 5;
    align-items: flex-end;
    background-color: ${Colors.white_4};
    ${Shadows.shadow_3}

`
export const TxtTitle = styled.Text `
    font-size: 19;
    font-weight: bold;
    color: ${Colors.black};
    padding-right: 40;
`