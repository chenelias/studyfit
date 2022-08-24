import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider, Text } from 'native-base'
import NavigationContain from './NavigationContain'

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContain />
        </NativeBaseProvider>
    )
}

