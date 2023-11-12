// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/

// Import React and Component
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

import auth from "@react-native-firebase/auth";

const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if currentUser is set or not
      // If not then send for Authentication
      // else send to Home Screen
      navigation.replace(
        auth().currentUser ? "HomeScreen" : "Auth"
      );
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#307ecc" }}
    >
      <View style={styles.container}>
        <Image
          source={require("../Image/aboutreact.png")}
          style={{
            width: "90%",
            resizeMode: "contain",
            margin: 30,
          }}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "white",
        }}
      >
        React Native Firebase Authentication
      </Text>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "white",
        }}
      >
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
















// import React, { useState, useEffect } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { Button, Icon } from 'react-native-elements';
// import auth from '@react-native-firebase/auth';

// const SplashScreen = ({navigation}) => {
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//     }, []);
//     if (initializing) return null;

//     if (!user) {
//         return navigation.navigate('Login');
//     }
//     Home.navigationOptions = ({ navigation }) => ({
//         title: 'Home',
//         headerRight: () => <Button
//                 buttonStyle={{ padding: 0, marginRight: 20, backgroundColor: 'transparent' }}
//                 icon={
//                     <Icon
//                         name="cancel"
//                         size={28}
//                         color="white"
//                     />
//                 }
//                 onPress={() => {auth().signOut()}} />,
//             });
//   return (
//         <ScrollView>SplashScreen</ScrollView>
    
//   )
// }

// export default SplashScreen