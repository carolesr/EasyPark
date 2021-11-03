import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import type {Node} from 'react';
import Navigator from './src/navigation/Navigator'

const App: () => Node = () => {
  
  useEffect(() => {
    console.log('a')
  })

  return (
    <Navigator />
  )
};

export default App;
