import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';
import Logo from './assets/imgFree2.png';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [openSearch, setOpenSearch] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          options={{
            headerLeft: () => <Image source={Logo} style={styles.logo}/>,
            headerRight: () => 
              <Text style={styles.search} onPress={()=>setOpenSearch(!openSearch)}>
                {openSearch ? 'Close' : 'Search'}
              </Text>,
            title: 'ImgFree',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#2c292c',
            }
          }}
          >
            {(props) => <HomeScreen {...props} openSearch={openSearch} />}

          </Stack.Screen>
        <Stack.Screen name="Image" component={ImageScreen} 
          options={{
            title: 'ImgFree',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#2c292c',
            }
          }}
        />
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
