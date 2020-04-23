import styled from 'styled-components/native'
import Fonts from '../../../utils/Fonts'
import Colors from '../../../utils/Colors'

export const Wraper = styled.View `
    flex: 1;
    align-items: center;
`
export const View = styled.View `
    flex-direction: row;
    align-items: center;
`
export const WraperTitle = styled.View `
    align-items: center;
    margin-top: 50;
    margin-bottom: 70;
`
export const TxtTitle = styled.Text `
    ${Fonts.subTitle_3};    
    color: ${Colors.primary_2};
`
export const TxtTitleMore = styled.Text `
    ${Fonts.subTitle_4};
    color: ${Colors.primary_2};
`
export const LoginBT = styled.TouchableOpacity `
    width: 70%;
    height: 40;
    background-color: ${Colors.gray_transparent};
    margin-bottom: 10;
    border-radius: 5;
    justify-content: center;
    padding-left: 7;
`
export const TxtLogin = styled.Text `
    color: ${Colors.white_5};
    font-size: 14px;
`