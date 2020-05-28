import styled from 'styled-components/native'
import Colors from '../../../../utils/Colors'
import Shadows from '../../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    margin: 5px;
`
export const WrapperItemFLRecentLy = styled.View `
    width: 100%;
    height: 300;
    ${'' /* margin-right: 10; */}
    margin-bottom: 10;
    border-radius: 15;
    border-color: #ddd;
    border-width: 1;
    background-color: ${Colors.white_3};
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 2;
`
export const ViewAccFL = styled.TouchableOpacity `
    height: 15%;
    padding: 10px;
    background-color: ${Colors.white_3};
    flex-direction: row;
    align-items: center;
    border-top-left-radius: 15;
    border-top-right-radius: 15;
`
export const ViewNameAcc = styled.View `
    height: 35;
`
export const TxtItemName = styled.Text `
    font-size: 13;
    color: ${Colors.black};
`
export const TxtItemTimeAgo = styled.Text `
    font-size: 11;
    color: ${Colors.gray_3};
`
export const Bt = styled.TouchableOpacity ``
export const TitleTourItem = styled.Text `
    font-size: 15;
    font-weight: bold;
    color: ${Colors.black};
    padding: 5px;
    padding-left: 17;
`
export const WrapContentTour = styled.View `
    height: 70;
    width: 100%;
    flex-direction: row;
    padding: 5px;
    align-items: center;
    padding-top: 10;
`
export const ViewChildContentTour = styled.View `
    flex-direction: row;
    align-items: center;
    margin-right: 10;
`
export const ViewAccChild = styled.View `
    width: 85%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
`
export const ViewIcon = styled.View `
    flex-direction: row;
`
export const BtAddTour = styled.TouchableOpacity `
    width: 55;
    height: 55;
    background-color: ${Colors.red};
    border-radius: 50;
    position: absolute;
    right: 5;
    top: 85%;
    align-items: center;
    justify-content: center;
    ${Shadows.shadow_2};
`
export const ViewEmpty = styled.View `
    padding: 10px;
`
export const TxtTitle = styled.Text `
    font-size: 14;
    color: ${Colors.black};
    text-align: center;
    margin-top: 10;
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
