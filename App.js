import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import Logo from './assets/sinfondo2.png';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerLeft: () => <Image source={Logo} style={styles.logo}/>,
            headerRight: () => 
              <Text style={styles.search} onPress={()=>console.log('searching')}>
                Search
              </Text>,
            title: 'ImgFree',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#2c292c',
            }
          }}
          />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5,
  },
  search:{
    color: '#fff',
  }
});
