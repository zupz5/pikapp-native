import * as React from 'react';
import Background from '../components/Background'
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { Ionicons } from '@expo/vector-icons';

const FirstRoute = () => (
  <Background>
  <View>
  <Header>Welcome, To Home page </Header>
  </View>
    </Background>
);

const SecondRoute = () => (
  <Background>
  <View>
  <Header>Welcome, To my trips </Header>
  </View>
    </Background>
);
const ThirdRoute = () => (
  
   <Background>
<View>
<Header>Welcome, To profiles </Header>
</View>
  </Background>
  

);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Home' },
    { key: 'second', title: 'Bidding' },
    { key: 'third', title: 'requests' },
  ]);

  return (
    <TabView
     
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      tabBarPosition="bottom"
      style={styles.tabbar}
      initialLayout={{ width: layout.width }}
    />
  );
}
const styles = StyleSheet.create({
  tabbar: {
    
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});