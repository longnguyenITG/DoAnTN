import styled from 'styled-components/native'
import Colors from '../../utils/Colors'

export const View = styled.View ``
export const ViewHeader = styled.View `
    flex-direction: row;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    justify-content: space-between;
    ${'' /* ${Shadows.shadow_1};
    background: ${Colors.white_2}; */}
`
export const TxtTitle = styled.Text `
    font-size: 25;
    font-weight: bold;
    color: ${Colors.black};
`
export const Bt = styled.TouchableOpacity ``
export const TxtMore = styled.Text `
    color: ${Colors.primary_1};
    font-size: 15;
    margin-top: 5;
`
