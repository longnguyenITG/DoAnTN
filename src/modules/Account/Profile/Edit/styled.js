import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Shadows from '../../../../utils/Shadow'

export const Wrapper = styled.View `
  flex: 1;
`
export const TxtUserName = styled.Text `
  font-size: 14;
  align-self: center;
  margin-top: 10;
  color: ${Colors.blue_custom};
`
export const Bt = styled.TouchableOpacity ``
export const ViewIP = styled.View `
    width: 90%;
    align-self: center;
    margin-left: 18;
    margin-bottom: 30;
`
export const TxtIpTitle = styled.Text `
    font-size: 11;
    color: ${Colors.primary_1};
    margin-left: 4;
`
export const WrapperIP = styled.View `
    flex-direction: row;
    border-bottom-width: 1;
    border-color: ${Colors.black};
    width: 95%;
    height: 45;
`
export const TxtIpEmail = styled.TextInput `
    width: 80%;
`
export const View = styled.View ``
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