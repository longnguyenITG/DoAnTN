import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'

export const Wrapper = styled.View `
    flex: 1;
`
export const WrapperBT = styled.TouchableOpacity `
`
export const View = styled.View ``
export const ViewIP = styled.View `
    width: 90%;
    align-self: center;
    margin-left: 10;
    margin-bottom: 30;
`
export const TxtTitle = styled.Text `
    ${Fonts.header};
    color: ${Colors.black};
    align-self: center;
    margin-top: 80;
    margin-bottom: 100;
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