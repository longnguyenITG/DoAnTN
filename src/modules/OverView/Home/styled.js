import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
`
export const ViewHeader = styled.View `
    flex-direction: row;
    padding: 15px;
    justify-content: space-between;
`
export const TxtTitle = styled.Text `
    font-size: 25;
    font-weight: bold;
    color: ${Colors.black};
`
export const Bt = styled.TouchableOpacity ``
export const TxtContentTitle = styled.Text `
    margin-left: 15;
    margin-bottom: 10;
`
export const TxtItem = styled.Text ``
export const TxtMore = styled.Text `
    color: ${Colors.primary_1};
    font-size: 15;
    margin-top: 5;
`
export const TxtSchedule = styled.Text `
    color: ${Colors.white};
`
export const BtSchedule = styled.TouchableOpacity `
    width: 88%;
    height: 45;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.red};
    border-radius: 10;
    align-self: center;
`
export const WrapperItemFLRecentLy = styled.View `
    width: 250;
    height: 200;
    border-radius: 5;
    border-width: 0.5;
    margin-right: 10;
    ${'' /* ${Shadows.shadow_1} */}
`