import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/Auth/SignIn';
// import SignUp from './pages/SignUp';

import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Albums from './pages/Albums';
import PostDetail from './pages/Posts/PostDetail';
import NewPost from './pages/NewPost';

// import Profile from './pages/Profile';

// import SelectProvider from './pages/New/SelectProvider';
// import SelectDateTime from './pages/New/SelectDateTime';
// import Confirm from './pages/New/Confirm';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          // SignUp,
        }),

        App: {
          screen: createStackNavigator(
            {
              Posts,
              Comments,
              PostDetail,
              NewPost,
              Albums,
            },
            {
              defaultNavigationOptions: {
                headerTransparent: true,
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                  marginLeft: 20,
                },
              },
            }
          ),
        },
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
