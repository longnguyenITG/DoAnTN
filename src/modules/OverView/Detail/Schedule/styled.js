import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Shadows from '../../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.white_4};
`
export const ScrollView = styled.ScrollView `
    padding: 20px;
`
export const ViewItem = styled.View `
    width: 100%;
    height: 130;
    margin-bottom: 10;
    flex-direction: row;
    border-width: 0.5;
`
export const ViewChildrenImage = styled.View `
    width: 30%;
    background: ${Colors.secondary_22};
    margin-right: 10;
`
export const ViewChildrenTitle = styled.View `
    width: 65%;
    background: ${Colors.white_4};
`
export const TxtTimeStart = styled.Text `
    font-size: 17;
    color: ${Colors.white};
    align-self: center;
    padding-top: 3;
`
export const TxtTitle = styled.Text `
    font-size: 16;
    color: ${Colors.black};
    font-weight: bold;
    padding-top: 15;
`
export const TxtPlace = styled.Text `
    font-size: 15;
    color: ${Colors.gray_3};
    padding-top: 20;
`
export const ViewRowChild = styled.View `
    flex-direction: row;
    justify-content: space-between;
    width: 200;
    height: 52;
    align-items: flex-end;
    padding-bottom: 15;
`
export const BtDetail = styled.TouchableOpacity `
    flex-direction: row;
`
export const TxtDocument = styled.Text `
    font-size: 14;
    color: ${Colors.primary_3};
`
export const ViewFatherItem = styled.View `
    width: 100%;
    height: 257;
    background: ${Colors.white_4};
    margin-bottom: 10;
`
export const Line = styled.View `
    width: 1.5;
    height: 23;
    background: ${Colors.secondary_21};
    margin-bottom:5;
    margin-left: 30;
`
export const ViewCar = styled.View ``
export const ViewGoTime = styled.View `
    width: 65;
    align-items: center;
    justify-content: center;
    margin-top: 5;
`
export const TxtGoTime = styled.Text `
    font-size: 17;
    color: ${Colors.black};
`
export const ViewModal = styled.View `
    width: 300;
    height: 40%;
    background: ${Colors.white_4};
    border-radius: 10;
`
export const BtModal = styled.TouchableOpacity ``
export const TxtBtModal = styled.Text `
    color: ${Colors.red};
    font-size: 18;
    padding-top: 205;
    padding-right: 30;
    align-self: flex-end;
`
export const TxtReport = styled.Text `
    font-size: 16;
    color: ${Colors.black};
    margin-top: 5;
    margin-bottom: 5;
`