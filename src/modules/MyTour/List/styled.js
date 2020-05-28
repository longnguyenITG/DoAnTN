import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'
import Fonts from '../../../utils/Fonts'

export const Wrapper = styled.View `
    flex: 1;
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
export const ViewHeader = styled.View `
    width: 100%;
    height: 75;
    align-items: center;
    padding-top: 23;
    background-color: ${Colors.white_5};
    ${Shadows.shadow_3}
    border-bottom-width: 0.2;
    border-color: ${Colors.gray_5};
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20;
    padding-right: 20;
`
export const TxtHeader = styled.Text `
    font-size: 19;
    padding-left: 29%;
`
export const Bt = styled.TouchableOpacity ``

export const TabView = styled.View `
    width: 100%;
    height: 37;
    border-radius: 7;
    border-width: 1;
    margin-top: 10;
    border-color: ${Colors.blue_custom};
    flex-direction: row;
`
export const BtTabView = styled.TouchableOpacity `
    width: 33.4%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
export const TxtTabView = styled.Text `
    font-size: 15;
    color: ${Colors.blue_custom};
`