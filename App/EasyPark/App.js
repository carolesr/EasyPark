import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {Node} from 'react';
import Navigator from './src/navigation/Navigator'
import OneSignal from 'react-native-onesignal';

const App: () => Node = () => {

  useEffect(() => {
    configureOneSignal()
  }, [])

  const configureOneSignal = () => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId("22df9c75-9510-49b0-8dd7-17e7cd50ab5b");

    OneSignal.setNotificationOpenedHandler(notification => {
      console.log("OneSignal: notification opened:", notification);
    });
  }


  return (
    <Navigator />
  )
};

export default App;
