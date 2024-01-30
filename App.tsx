import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import BasicFunctionalComponent from './src/components/BasicFunctionalComponent';





function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
<BasicFunctionalComponent name='eysa' email='assa' age={10}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
