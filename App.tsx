import React, {useState} from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import {onboardingURL} from './src/utils/constants'
export default function App() {
  const [_, setResult] = useState<WebBrowser.WebBrowserResult | null>(null)

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(onboardingURL)
    setResult(result)
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={_handlePressButtonAsync}>
        <Text style={styles.textButton}>Open Onboarding</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 40,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00b2fd',
    padding: 10,
    width: Dimensions.get('window').width - 50,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
