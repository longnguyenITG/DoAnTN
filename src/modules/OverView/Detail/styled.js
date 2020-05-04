import styled from 'styled-components/native'
import Colors from '../../../utils/Colors'
import Fonts from '../../../utils/Fonts'
import Shadows from '../../../utils/Shadow'

export const Wrapper = styled.View `
    flex: 1;
    background-color: ${Colors.white_4};
   position: relative;

`
export const ScrollView = styled.ScrollView `
   background: blue;
`
export const ViewTitleDetail = styled.View `
    position: absolute;
    width: 200;
    height: 100;
    background-color: red;
    z-index: 999;    
    top: 70%;
    left: 25%;
`
