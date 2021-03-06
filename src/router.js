import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Floripa from './pages/Floripa';
import Salvador from './pages/Salvador';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" 
                              component={Home}
                              options={{
                                  title: 'ALUGUE',
                                  headerTitleStyle: {
                                      fontFamily: 'Montserrat_700Bold'
                                  },
                                  headerRight: () => (
                                    <TouchableOpacity style={{marginRight: 15}}>
                                        <Feather
                                        name="shopping-bag"
                                        size={24}
                                        color="#000000" />
                                    </TouchableOpacity>
                                  )
                              }} 
                              />

                <Stack.Screen name="Detail" 
                              component={Detail}
                              options={{
                                title: 'CASA NA PRAIA',
                                headerTitleStyle: {
                                    fontFamily: 'Montserrat_700Bold'
                                },
                                headerRight: () => (
                                  <TouchableOpacity style={{marginRight: 15}}>
                                      <Feather
                                      name="shopping-bag"
                                      size={24}
                                      color="#000000" />
                                  </TouchableOpacity>
                                )
                            }}  
                              />

                <Stack.Screen name="Floripa" 
                              component={Floripa}
                              options={{
                                title: 'CASA EM FLORIPA',
                                headerTitleStyle: {
                                    fontFamily: 'Montserrat_700Bold'
                                },
                                headerRight: () => (
                                  <TouchableOpacity style={{marginRight: 15}}>
                                      <Feather
                                      name="shopping-bag"
                                      size={24}
                                      color="#000000" />
                                  </TouchableOpacity>
                                )
                            }}  
                              />

                <Stack.Screen name="Salvador"
                              component={Salvador}
                              options={{
                                  title: 'CASA SALVADOR',
                                  headerTitleStyle: {
                                      fontFamily: 'Montserrat_700Bold'
                                  },
                                  headerRight: () => (
                                      <TouchableOpacity>
                                          <Feather 
                                          name="shopping-bag"
                                          size={24}
                                          color="#000000" />
                                      </TouchableOpacity>
                                  )
                              }}
                              />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;