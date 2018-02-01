import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from '../Screens/AuthScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import UserFeedScreen from '../Screens/UserFeedScreen';
import UploadVideoScreen from '../Screens/UploadVideoScreen';
import JudgeSelectScreen from '../Screens/JudgeSelectScreen';
import ConfirmScreen from '../Screens/ConfirmScreen';
import UserAccount from '../Screens/UserAccountScreen';
import SelectPaymentScreen from '../Screens/SelectPaymentScreen';

const MainNavigator = StackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    AuthScreen: { screen: AuthScreen },
    Main: {
      screen: TabNavigator(
        {
          UserFeedScreen: { screen: UserFeedScreen },
          UploadVideo: {
            screen: StackNavigator({
              UploadVideoScreen: { screen: UploadVideoScreen },
              JudgeSelectScreen: { screen: JudgeSelectScreen },
              ConfirmScreen: { screen: ConfirmScreen },
              SelectPaymentScreen: { screen: SelectPaymentScreen }
            })
          },
          UserAccount: { screen: UserAccount }
        },
        {
          tabBarPosition: 'bottom',
          swipeEnabled: true,
          animationEnabled: true,
          tabBarOptions: {
            activeTintColor: '#ef5350',
            labelStyle: {
              marginBottom: 3
            },
            style: {
              backgroundColor: '#f5f5f6'
            }
          }
        }
      )
    }
  },
  {
    lazy: true,
    navigationOptions: {
      tabBarVisible: false,
      tabBarOnPress: console.log('tabBarPressed')
    }
  }
);

export default MainNavigator;
