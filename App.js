import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import SecondScreen from './screens/SecondScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomApplicationBar from './components/CustomApplicationBar';
import HomeScreen from './screens/HomeScreen.js';
import { PaperProvider } from 'react-native-paper';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
  <PaperProvider >
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={({ navigation, route, options, back}) => ({
          header: (props) =>
             <CustomApplicationBar 
              navigation={navigation}
              route={props.route} 
              options={props.options}
              back={props.back} />
        })}>
        {/* style={styles.container}> */}
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            title: "Home",
            headerTitle: "MD nav demo",
          }}
        />
        <Stack.Screen 
          name='Second'
          component={SecondScreen}
          options={{
            title: "Second",
            headerTitle: "MD nav demo",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
