import 'reflect-metadata';
import 'react-native-sqlite-storage';

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DataSource} from 'typeorm';
import {Photo} from './Model';

const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'sqlite-demo',
  location: 'default',
  // driver: require('react-native-quick-sqlite'),
  entities: [Photo],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('DB loaded successfully');
    // here you can start to work with your database
  })
  .catch(error => console.error(error));

const App = () => {
  // useEffect(() => {
  //   (async () => {
  //     const connection = await createConnection({
  //       type: 'react-native',
  //       database: 'test',
  //       location: 'default',
  //       logging: ['error', 'query', 'schema'],
  //       synchronize: true,
  //       entities: [Photo],
  //     });

  //     console.log(connection);
  //   })();
  // });

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
