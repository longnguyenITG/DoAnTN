import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'

export const Wrapper = styled.View `
    flex: 1;
`
export const ScrollView = styled.ScrollView ``
export const WrapperBT = styled.TouchableOpacity `
`
export const View = styled.View ``
export const ViewIP = styled.View `
    width: 90%;
    align-self: center;
    margin-left: 18;
    margin-bottom: 30;
`
export const TxtTitle = styled.Text `
    ${Fonts.header};
    color: ${Colors.black};
    align-self: center;
    margin-top: 60;
    margin-bottom: 70;
`
export const BackBT = styled.TouchableOpacity `
    position: absolute;
    margin-top: 50;
    margin-left: 20;
    margin-bottom: 10;
    width: 30;
    height: 30;
`
export const WrapperIP = styled.View `
    flex-direction: row;
    border-bottom-width: 1;
    border-color: ${Colors.black};
    width: 95%;
    height: 45;
`
export const TxtIpTitle = styled.Text `
    font-size: 11;
    color: ${Colors.primary_1};
    margin-left: 4;
`
export const TxtIpEmail = styled.TextInput `
    width: 80%;
`
export const Bt = styled.TouchableOpacity `
`
export const BtLogin = styled.TouchableOpacity `
    width: 85%;
    height: 45;
    background: ${Colors.red_3};
    align-items: center;
    justify-content: center;
    align-self: center;
    border-radius: 4;
    margin-top: 15;
`
export const TxtBtLogin = styled.Text `
    color: ${Colors.white};
    font-size: 16;
`
export const TxtResgisTraTion = styled.Text `
    color: ${Colors.black};
    font-size: 16;
    margin-top: 25;
    margin-left: 30;
`
export const TxtBtResgisTraTion = styled.Text `
    color: ${Colors.primary_1};
    font-size: 16;
    margin-top: 25;
    margin-left: 5;
`