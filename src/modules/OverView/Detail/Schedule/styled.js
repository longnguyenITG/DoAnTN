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