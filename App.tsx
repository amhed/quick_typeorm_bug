import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text>Testing TypeORM connection</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
