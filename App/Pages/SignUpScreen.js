// // #6 Email Authentication using Firebase Authentication in React Native App
// // https://aboutreact.com/react-native-firebase-authentication/

// // Import React and Component
// import React, { useState, createRef, useContext, useEffect } from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   Image,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from "react-native";

// // import auth from "@react-native-firebase/auth";
// import { auth } from "../config/FirebaseConfig.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { AuthContext } from "../Context/AuthContext.js";
// import { darkGreen } from "../Components/Constants.js";
// // import {setUserAuth} from "../Shared/Services.js"
// // import Services from '../Shared/Services';



// const SignUpScreen = ({ navigation }) => {
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [errortext, setErrortext] = useState("");
  
  
//   const {userData,setUserData}=useContext(AuthContext)
//   const emailInputRef = createRef();
//   const passwordInputRef = createRef();

  


//   const handleSubmitButton = async() => {
//     setErrortext("");
//     if (!userName) return alert("Please fill Name");
//     if (!userEmail) return alert("Please fill Email");
//     if (!userPassword) return alert("Please fill Address");
//      const auth = getAuth();
//      try {
//        await createUserWithEmailAndPassword(auth, userEmail, userPassword).then(async (userCredential) => {
//           const user = userCredential.user
//           // console.log("User as :", user)
//           const WelcomeMessage = `Welcome, ${user.email}! Visit the Login Page`;
//           setTimeout(()=>{
//             Alert.alert(WelcomeMessage);
//           },1000)

//           //  await setUserData(user)
//           //  console.log("Success:", userData)
//        }).catch((error)=>{
//         console.log("Please solve error:",error.message )
//        });
      
//      } catch (error) {
//       console.log("error in this region")
//      }
    
//   };

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: "#307ecc" }}
      
//     >
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           justifyContent: "center",
//           alignContent: "center",
//         }}
//       >
//         <KeyboardAvoidingView enabled>
//           <View style={styles.sectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserName) =>
//                 setUserName(UserName)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Name"
//               placeholderTextColor="#8b9cb5"
//               autoCapitalize="sentences"
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 emailInputRef.current &&
//                 emailInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.sectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserEmail) =>
//                 setUserEmail(UserEmail)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Email"
//               placeholderTextColor="#8b9cb5"
//               keyboardType="email-address"
//               ref={emailInputRef}
//               returnKeyType="next"
//               onSubmitEditing={() =>
//                 passwordInputRef.current &&
//                 passwordInputRef.current.focus()
//               }
//               blurOnSubmit={false}
//             />
//           </View>
//           <View style={styles.sectionStyle}>
//             <TextInput
//               style={styles.inputStyle}
//               onChangeText={(UserPassword) =>
//                 setUserPassword(UserPassword)
//               }
//               underlineColorAndroid="#f000"
//               placeholder="Enter Password"
//               placeholderTextColor="#8b9cb5"
//               ref={passwordInputRef}
//               returnKeyType="next"
//               secureTextEntry={true}
//               onSubmitEditing={Keyboard.dismiss}
//               blurOnSubmit={false}
//             />
//           </View>
//     <View style={{flex: 1, alignItems: 'center', marginTop:20}}>
//           <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             width: '78%',
//             paddingHorizontal: 76
//           }}>
//           <Text style={{color: 'black', fontSize: 16}}>
//             By signing in, you agree to our{' '}
//           </Text>
//           <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
//             Terms & Conditions
//           </Text>
//         </View>

//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent :"center",
//             width: '78%',
//             paddingRight: 16,
//             marginBottom: 10
//           }}>
//           <Text style={{color: 'black', fontSize: 16}}>
//             and {" "}
//           </Text>
//           <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
//             Privacy Policy
//           </Text>
//         </View>
//       </View>
//           {errortext != "" ? (
//             <Text style={styles.errorTextStyle}>
//               {" "}
//               {errortext}{" "}
//             </Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={handleSubmitButton}
//           >
//             <Text style={styles.buttonTextStyle}>
//               REGISTER
//             </Text>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </ScrollView>
//       <Text
//         style={{
//           fontSize: 18,
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         React Native Firebase Authentication
//       </Text>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         www.aboutreact.com
//       </Text>
//     </SafeAreaView>
//   );
// };
// export default SignUpScreen;

// const styles = StyleSheet.create({
//   sectionStyle: {
//     flexDirection: "row",
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: "#7DE24E",
//     borderWidth: 0,
//     color: "#FFFFFF",
//     borderColor: "#7DE24E",
//     height: 40,
//     alignItems: "center",
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: "#FFFFFF",
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: "white",
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: "#dadae8",
//     borderRadius: 100,
//     height:45,
//     fontSize: 20, 
//     color: "grey", 
//     paddingHorizontal: 20, 
//     width: '78%', 
//     backgroundColor: 'rgb(220,220, 220)', 
//     marginVertical: 15

//   },
//   errorTextStyle: {
//     color: "red",
//     textAlign: "center",
//     fontSize: 14,
//   },
// });






















import React, { createRef, useContext, useState } from 'react'
import {View, Text, Touchable, TouchableOpacity, Alert, StyleSheet, Keyboard, Dimensions} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import {darkGreen} from '../Components/Constants';
import Field from '../Components/Field';
import { KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native';
import { AuthContext } from '../Context/AuthContext';
// import auth from "@react-native-firebase/auth";
import { auth } from "../config/FirebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { darkGreen } from "../Components/Constants.js";
// import {setUserAuth} from "../Shared/Services.js"
// import Services from '../Shared/Services';


//Get the context Api and add userData

const SignUpScreen = props => {
  const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errortext, setErrortext] = useState("");
    const {userData,setUserData}=useContext(AuthContext)
    const emailInputRef = createRef();
    const passwordInputRef = createRef();
  
    
  
  
    const handleSubmitButton = async() => {
      setErrortext("");
      if (!userName) return alert("Please fill Name");
      if (!userEmail) return alert("Please fill Email");
      if (!userPassword) return alert("Please fill Address");
       const auth = getAuth();
       try {
         await createUserWithEmailAndPassword(auth, userEmail, userPassword).then(async (userCredential) => {
            const user = userCredential.user
            // console.log("User as :", user)
            const WelcomeMessage = `Welcome, ${user.email}! Visit the Login Page`;
            setTimeout(()=>{
              Alert.alert(WelcomeMessage);
            },1000)
  
            //  await setUserData(user)
            //  console.log("Success:", userData)
         }).catch((error)=>{
          console.log("Please solve error:",error.message )
         });
        
       } catch (error) {
        console.log("error in this region")
       }
      
    };
  

  return (
    <Background>
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          marginTop: 70,
        }}>
        Register
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Create a new account
      </Text>
      <Text
        style={{
          color: 'white',
          fontSize: 22,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Spread Cyber Awareness
      </Text>
      <View
        style={{
          // backgroundColor: 'white',
          backgroundColor: 'rgba(255,255,255, 0.3)',
          width: 596,
          height: 1120,
          // borderTopLeftRadius: 130,
          borderTopRightRadius: 100,
          borderTopLeftRadius:100,
          paddingTop: 80,
          alignItems: 'center',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
        }}>
        <KeyboardAvoidingView enabled>
          <View style={styles.sectionStyle}>
             <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) =>
                setUserName(UserName)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) =>
                setUserEmail(UserEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
 
  
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>
              {" "}
              {errortext}{" "}
            </Text>
          ) : null}
        </KeyboardAvoidingView>
          <View style={{marginTop:30}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '78%',
            paddingHorizontal: 76
          }}>
          <Text style={{color: 'black', fontSize: 16}}>
            By signing in, you agree to our{' '}
          </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Terms & Conditions
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent :"center",
            width: '78%',
            paddingRight: 16,
            marginBottom: 10
          }}>
          <Text style={{color: 'black', fontSize: 16}}>
            and {" "}
          </Text>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
            Privacy Policy
          </Text>
        </View>
        </View>
        <Btn
          textColor="white"
          bgColor={darkGreen}
          btnLabel="Signup"
          Press={handleSubmitButton}
        />
        {/* <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}

            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>
              REGISTER
            </Text>
          </TouchableOpacity> */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color:"black"}}>
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SignInScreen')}>
            <Text
              style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Background>
  )
}

export default SignUpScreen

 const styles = StyleSheet.create({
    sectionStyle: {
      flexDirection: "row",
      height: 40,
      width: Dimensions.get('screen').width*0.8,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: darkGreen,
      borderWidth: 0,
      color: "#FFFFFF",
      borderColor: "#7DE24E",
      height: 40,
      alignItems: "center",
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
      width:60
    },
    buttonTextStyle: {
      color: "#FFFFFF",
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: "white",
      borderWidth: 1,
      borderRadius: 30,
      borderColor: "#dadae8",
      // borderRadius: 100,
      height:45,
      fontSize: 20, 
      color: "grey", 
      paddingHorizontal: 20, 
      // width: Dimensions.get('screen').width, 
      backgroundColor: 'rgb(220,220, 220)', 
      marginVertical: 15
  
    },
    errorTextStyle: {
      color: "red",
      textAlign: "center",
      fontSize: 14,
    },
  });