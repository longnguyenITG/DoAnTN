import React from 'react'
import { View } from 'react-native'
import NewList from './newList'
import InProcess from './InProgressList'
import Completed from './CompletedList'

function index(props) {
  return (
    <View  style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <View>
        <NewList/>
      </View>
      <View>
        <InProcess/>
      </View>
      <View>
        <Completed/>
      </View>
    </View>
  )
}

export default index
