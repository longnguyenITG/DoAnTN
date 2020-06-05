import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
  flex: 1;
`
export const ViewComponent = styled.View `
  margin-top: 30;
  margin-left: 20;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50;
  align-items: center;
`
export const TxtTitle = styled.Text `
  font-size: 15;
`
export const ViewIP = styled.View `
  flex-direction: row;
  width: 65%;
  align-items: center;
`
export const TxtIP = styled.TextInput `
  width: 60%;
`
export const Bt = styled.TouchableOpacity `
  margin-left: 10;
`
export const TxtBt = styled.Text `
  font-size: 15;
  color: ${Colors.blue_custom};
`
export const BtSave = styled.TouchableOpacity `
  width: 50%;
  height: 40;
  background-color: ${Colors.red_3};
  align-self: center;
  border-radius: 5;
  margin-top: 30;
  align-items: center;
  justify-content: center;
`
export const TxtSave = styled.Text `
  color: ${Colors.white_3};
  font-size: 17;
`