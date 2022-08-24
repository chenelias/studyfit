import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'

// screens
import TimerScreen from './screens/TimerScreen'
import HistoryScreen from './screens/HistoryScreen'

const Tab = createBottomTabNavigator()
export default function NavigationContain() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false}}>
                <Tab.Screen
                    name="Timer"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={focused ? 'timer' : 'timer-outline'} color={color} size={30} />
                        ),
                    }}
                    component={TimerScreen}
                />
                <Tab.Screen
                    name="History"
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Ionicons name={focused ? 'recording' : 'recording-outline'} color={color} size={30} />
                        ),
                    }}
                    component={HistoryScreen}
                />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    )
}