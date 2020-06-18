import React from 'react';
import { Text, View } from 'react-native'

import { useRecoilValue } from 'recoil';
import { inprogressListState } from '../../../app/recoil/selector';

function newList(props) {

  const dataInprogressListState = useRecoilValue(inprogressListState);	// ở đây chỉ hiện data, nên useRecoilValue là đủ.
  return (
    <View>
      <Text> inprocess list </Text>
      {
        dataInprogressListState.map((e, i) => (
          <Text key = {i}>{e.content}</Text>
        ))
      }
    </View>
  )
}

export default newList
