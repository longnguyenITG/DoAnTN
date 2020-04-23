import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/stack'
import Routes from '../../utils/Routes'
import Colors from '../../utils/Colors'
import {SflashScreen, Login, LoginApp} from '../../modules/Login'

const {
  sflashscreen,
  login,
  loginapp
} = Routes

const Stack = createStackNavigator();

function index (){

    return (
      <NavigationContainer>
        <Stack.Navigator
          // screenOptions={{
          //   headerShown: false,
          // }}
          >
          <Stack.Screen name={loginapp} component={LoginApp}
            options = {{headerShown: false}}
          />
          <Stack.Screen
            name={sflashscreen}
            component={SflashScreen}
            options = {{headerShown: false}}
          />
          <Stack.Screen name={login} component={Login}  
            options={{
                animationEnabled: false,
                headerShown: false
            }}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default index
