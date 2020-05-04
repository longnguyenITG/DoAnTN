import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.white_4};
`
export const ScrollView = styled.ScrollView ``
export const View = styled.View ``
export const ViewHeader = styled.View `
    flex-direction: row;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    justify-content: space-between;
    ${'' /* ${Shadows.shadow_1};
    background: ${Colors.white_2}; */}
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
    width: 300;
    height: 300;
    margin-right: 10;
    border-radius: 15;
    border-color: #ddd;
    border-width: 1;
    background-color: ${Colors.white_3};
    shadow-color: #000;
    shadow-offset: {width: 0, height: 0};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 0;
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