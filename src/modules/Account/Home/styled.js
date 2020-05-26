import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.gray_6};
`
export const ViewHeader = styled.View `
    width: 100%;
    height: 75;
    align-items: center;
    justify-content: center;
    padding-top: 23;
    background-color: ${Colors.white_4};
    ${Shadows.shadow_3}
    border-bottom-width: 0.2;
    border-color: ${Colors.gray_5};
`
export const TxtTitle = styled.Text `
    font-size: 20;
`
export const ViewProfile = styled.TouchableOpacity `
    flex-direction: row;
    padding-top: 10;
    padding-bottom: 10;
    padding-right: 20;
    padding-left: 20;
    margin-top: 32;
    margin-bottom: 32;
    width: 100%;
    height: 80;
    background: ${Colors.white};
    border-width: 0.2;
    border-color: ${Colors.gray_5};
    align-items: center;
    justify-content: space-between;
`
export const TxtProfile = styled.Text `
    font-size: 17;
    margin-left: 20;
`
export const View = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ViewComponent = styled.TouchableOpacity `
    width: 100%;
    height: 50;
    padding-left: 20;
    flex-direction: row;
    align-items: center;
    background-color: ${Colors.white};
`
export const ViewChild = styled.View `
    width: 90%;
    height: 100%;
    justify-content: space-between;
    margin-left: 20;
    padding-right: 25;
    border-bottom-width: 0.2;
    border-color: ${Colors.gray_4};
    flex-direction: row;
    align-items: center;
`
export const TxtComponent = styled.Text `
    font-size: 15;
`
export const WarpperComponent = styled.View `
    background-color: ${Colors.white};
`
export const ScrollView = styled.ScrollView ``