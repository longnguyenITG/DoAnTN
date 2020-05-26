import React, {} from 'react'
import {Header} from '../../../components'
import {
    Wrapper,
    View,
    ViewComponent
} from './styled'
function index(props) {

    const {navigation} = props
    return(
        <Wrapper>
            <Header navigation = {navigation} title = 'Cài đặt' />
            <ViewComponent></ViewComponent>
        </Wrapper>
    )
}
export default index