import 'reflect-metadata';

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DataSource} from 'typeorm';
import {Photo} from './Model';

const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'sqlite-demo',
  location: 'default',
  driver: require('react-native-quick-sqlite'),
  entities: [Photo],
  synchronize: true,
  logging: true,
});

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await AppDataSource.initialize();
        console.log('DB loaded successfully');

        const repo = AppDataSource.getRepository<Photo>('Photo');

        // uncomment to insert
        // await repo.insert({
        //   description: 'just a test',
        //   name: 'first',
        //   views: 0,
        //   filename: 'whatever.png',
        // });

        // Valid query. Returns rows
        const all = await repo.find();
        console.log(all);

        // Invalid query that should throw
        // but instead returns an empty array
        const manualQuery = await repo.query(`
        SELECT * From UnexistingTable
      `);
        console.log(manualQuery);
      } catch (err) {
        // No error is ever thrown with quick-sqlite driver
        console.error(err);
      }
    })();
  });

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
