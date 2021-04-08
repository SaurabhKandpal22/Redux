import React from 'react'
// import { View } from 'react-native'
import { Provider } from 'react-redux'
import LoginScreen from './src/screens/LoginScreen'
import { store } from './src/redux'

const App = () => {
  return (
  <Provider store={store}>
    <LoginScreen/>
  </Provider>
  );
  
    
  
  }

export default App
