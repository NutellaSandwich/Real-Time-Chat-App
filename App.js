import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify } from 'aws-amplify'
import awsconfig from '/Users/rohit/Documents/Work/chatApp/Users/rohit/Documents/Work/chatApp/aws-exports.js'
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig)


function App() {
  return (
    <View style={styles.container}>
     
      <Navigator />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);