import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AppRoutes} from '../navigation/types';

const Home = () => {
  const navigation = useNavigation<NavigationProp<AppRoutes>>();
  return (
    <View style={styles.container}>
      <Text>Mini app</Text>
      <Button
        title="Go Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
