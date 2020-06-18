import React from 'react';
import { Text, View } from 'react-native'

import { useRecoilValue } from 'recoil';
import { newListState } from '../../../app/recoil/selector';

function newList(props) {

  const dataNewList = useRecoilValue(newListState);	// ở đây chỉ hiện data, nên useRecoilValue là đủ.
  return (
    <View>
      <Text> new list </Text>
      {
        dataNewList.map((e, i) => (
          <Text key = {i}>{e.content}</Text>
        ))
      }
    </View>
  )
}

export default newList
