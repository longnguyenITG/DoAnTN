import React from 'react'
import Modal from 'react-native-modal'
import Spinner from 'react-native-spinkit'
import Colors from '../../utils/Colors'
function index(props) {

  const {isVisible} = props

  return (
    <Modal
      isVisible={isVisible}
      style = {{maxHeight: '100%', maxWidth: '100%', alignItems: 'center', justifyContent: 'center'}}
      coverScreen
      backdropOpacity={0.5}
      useNativeDriver={true}>
      <Spinner isVisible={isVisible} size={60} type='FadingCircleAlt' color={Colors.white} />
  </Modal>
  )
}

export default index
