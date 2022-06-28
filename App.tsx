import 'reflect-metadata';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Testing TypeORM connection</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
