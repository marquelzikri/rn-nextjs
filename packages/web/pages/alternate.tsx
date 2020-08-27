import { StyleSheet, Text, View } from 'react-native'

import Link from "../../shared/components/Link"

export default function Alternate() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      <Link route="/" componentType="web">
        <Text style={styles.link}>
          Go Back
        </Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})
