import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Shadows from '../../../../utils/Shadow'

export const Wrapper = styled.View `
  flex: 1;
`
export const ViewTitle = styled.View `
  width: 97.4%;
  height: 29%;
  margin: 5px;
  border-radius: 10;
  ${Shadows.shadow_3};
  background-color: ${Colors.floralwhite};
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`
export const TxtNamePlace = styled.Text `
  color: ${Colors.white};
  font-size: 20;
  margin-top: 10;
  margin-left: 10;
  margin-right: 10;
  margin-bottom: 5;
`
export const ViewIcon = styled.View `
  flex-direction: row;
  margin-left: 10;
`
export const TxtLabel = styled.Text `
  color: ${Colors.black};
  font-size: 16;
  margin-top: 105;
  margin-left: 10;
  font-weight: bold;
`
export const ViewDetailPlace = styled.View `
  flex-direction: row;
  margin-top: 5;
  margin-left: 20;
  align-items: center;
`
export const ViewDot = styled.View `
  width: 7;
  height: 7;
  background-color: ${Colors.green_primary};
  border-radius: 7;
  margin-right: 7;
`
export const TxtDetailLabel = styled.Text `
  color: ${Colors.gray_3};
  font-size: 13;
`