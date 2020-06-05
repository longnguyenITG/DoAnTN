import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
  flex: 1;
`
export const TxtUserName = styled.Text `
  font-size: 18;
  align-self: center;
  margin-top: 10;
`
export const BtEditProfile = styled.TouchableOpacity `
  width: 50%;
  height: 35;
  background-color: ${Colors.blue_custom};
  margin-top: 10;
  align-self: center;
  border-radius: 5;
  justify-content: center;
  margin-top: 10;
`
export const TxtBt = styled.Text `
  font-size: 16;
  align-self: center;
  color: ${Colors.white_3};
`
export const ViewChild = styled.View `
  width: 100%;
  height: 70;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10;
`
export const BtChild = styled.TouchableOpacity `
  width: 33.4%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
export const TxtNumber = styled.Text `
  font-size: 16;
  color: ${Colors.gray_2};
`
export const TxtTitle = styled.Text `
  font-size: 13;
  color: ${Colors.gray_3};
  margin-top: 3;
`
export const ViewFlex = styled.View `
  flex: 1;
  background-color: ${Colors.gray_4};
`