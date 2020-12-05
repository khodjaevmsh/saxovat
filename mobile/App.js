import 'react-native-gesture-handler'
import React from 'react'
import { GlobalProvider } from './src/contexts/GlobalContext'
import Navigation from './src/Navigation'

export default function App() {
    return (
        <GlobalProvider>
            <Navigation />
        </GlobalProvider>
    )
}
