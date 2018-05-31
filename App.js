/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          We ddddd

        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



//
// NativeBase theme has been copied at /Users/zhangjian/Desktop/RN/image_identification/native-base-theme               │
// │ Here's how to theme your app                                                                                         │
// │                                                                                                                      │
// │ import getTheme from './native-base-theme/components';                                                               │
// │ export default class ThemeExample extends Component {                                                                │
// │ render() {                                                                                                           │
//     │   return (                                                                                                           │
//     │     <StyleProvider  style={getTheme()}>                                                                              │
//             │       <Container>                                                                                                    │
//                 │         <Content>                                                                                                    │
//                     │           ...                                                                                                        │
//                     │         </Content>                                                                                                   │
//                 │       </Container>                                                                                                   │
//             │     </StyleProvider>                                                                                                 │
//     │   );                                                                                                                 │
//     │ }                                                                                                                    │
// │                                                                                                                      │
// │ Head over to the docs (http://docs.nativebase.io/Customize.html#Customize) for detailed information on customization