import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../../utils/Routes'
import {SflashScreen, Login, LoginApp, RegisTration} from '../../modules/Login'
import {Home, Detail, Schedule, WebView} from '../../modules/OverView'
import {ListMytour} from '../../modules/MyTour'
import {CreateTour} from '../../modules/Create'
import {ListNotifycation} from '../../modules/Notifycation'
import {HomeSetting, Setting, Profile, EditProfile, ChangePass} from '../../modules/Account'
import Ionicons from 'react-native-vector-icons/Ionicons';

const {
  sflashscreen,
  login,
  loginapp,
  registration,
  home,
  detail,
  listmytour,
  createtour,
  listnotifycation,
  homesetting,
  schedule,
  setting,
  profile,
  editprofile,
  changepass,
  webview
} = Routes

const StackAll = createStackNavigator();
const OverViewStack = createStackNavigator();
const MyTourStack = createStackNavigator();
const CreateStack = createStackNavigator();
const NotifycationStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

function OverviewStackScreen() {
  return (
      <OverViewStack.Navigator>
        <OverViewStack.Screen name={home} component={Home}
          options = {{headerShown: false}}
        />  
      </OverViewStack.Navigator>
  );
}
function MyTourStackScreen() {
  return (
      <MyTourStack.Navigator>
        <MyTourStack.Screen name={listmytour} component={ListMytour}
          options = {{headerShown: false}}
        />  
      </MyTourStack.Navigator>
  );
}
function CreateStackScreen() {
  return (
      <CreateStack.Navigator>
        <CreateStack.Screen name={createtour} component={CreateTour}
          options = {{headerShown: false}}
        />  
      </CreateStack.Navigator>
  );
}
function NotifycationStackScreen() {
  return (
      <NotifycationStack.Navigator>
        <NotifycationStack.Screen name={listnotifycation} component={ListNotifycation}
          options = {{headerShown: false}}
        />  
      </NotifycationStack.Navigator>
  );
}
function AccountStackScreen() {
  return (
      <AccountStack.Navigator>
        <AccountStack.Screen name={homesetting} component={HomeSetting}
          options = {{headerShown: false}}
        />  
      </AccountStack.Navigator>
  );
}

function NavigationTab() {
  return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Khám phá') {
              iconName = 'md-search'
            } else if (route.name === 'Lịch trình của tôi') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Tạo') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Thông báo') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            } else if (route.name === 'Khác') {
              iconName = 'ios-more';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name = 'Khám phá' component = {OverviewStackScreen} />
        <Tab.Screen name = 'Lịch trình của tôi' component = {MyTourStackScreen} />
        <Tab.Screen name = 'Tạo' component = {CreateStackScreen} />
        <Tab.Screen name = 'Thông báo' component = {NotifycationStackScreen} />
        <Tab.Screen name = 'Khác' component = {AccountStackScreen} />
      </Tab.Navigator>
  )
}

function index() {
    return (
      <NavigationContainer>
        <StackAll.Navigator>
          <StackAll.Screen name={home} component={NavigationTab}
            options = {{headerShown: false}}
          />  
          <StackAll.Screen
            name={sflashscreen}
            component={SflashScreen}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={registration} component={RegisTration}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={loginapp} component={LoginApp}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={login} component={Login}
            options={{
              animationEnabled: false,
              headerShown: false
            }}/>   
          <StackAll.Screen name={detail} component={Detail}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={schedule} component={Schedule}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={createtour} component={CreateTour}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={listmytour} component={ListMytour}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={setting} component={Setting}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={profile} component={Profile}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={editprofile} component={EditProfile}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={changepass} component={ChangePass}
            options = {{headerShown: false}}
          />
          <StackAll.Screen name={webview} component={WebView}
            options = {{headerShown: false}}
          />
        </StackAll.Navigator>
      </NavigationContainer>
    );
}



export default index
