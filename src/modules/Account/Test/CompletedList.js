import React from 'react';
import { Text, View } from 'react-native'

import { useRecoilValue } from 'recoil';
import { completedListState } from '../../../app/recoil/selector';

function newList(props) {

  const dataCompletedListState = useRecoilValue(completedListState);	// ở đây chỉ hiện data, nên useRecoilValue là đủ.
  return (
    <View>
      <Text> completed list </Text>
      {
        dataCompletedListState.map((e, i) => (
          <Text key = {i}>{e.content}</Text>
        ))
      }
    </View>
  )
}

export default newList
