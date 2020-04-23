import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props) {
  const {navigation} = props
  return (
    <TouchableOpacity style = {{width: 100, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}
      onPress = {()=> navigation.push('Details')} 
    >
      <Text style = {{color: '#fff'}}>Home Screen</Text>
    </TouchableOpacity>
  );
}
function DetailsScreen(props) {
  const {navigation} = props
  return (
    <TouchableOpacity style = {{width: 100, height: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}
      onPress = {()=> navigation.goBack()}  
    >
      <Text style = {{color: '#fff'}}>Details Screen</Text>
    </TouchableOpacity>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;