import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {changeIcon} from 'rn-dynamic-app-icon';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import RNCalendarEvents from 'react-native-calendar-events';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text
            style={{fontSize: 30, color: 'white'}}
            onPress={() => {
              changeIcon('US');
            }}>
            Change to US
          </Text>
          <Text
            style={{fontSize: 30, color: 'white'}}
            onPress={() => {
              changeIcon('UK');
            }}>
            Change to UK
          </Text>
          <Text
            style={{fontSize: 30, color: 'white'}}
            onPress={async () => {
              await RNCalendarEvents.requestPermissions(false);
            }}>
            Request permission
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
