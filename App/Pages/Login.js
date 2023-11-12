import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AuthContext } from '../Context/AuthContext';
import Services from '../Shared/Services';
import {View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import { darkGreen, green } from '../Components/Constants';
import { AntDesign } from "@expo/vector-icons";
import dome from '../Assets/Images/circuit.jpg'
// import { StatusBar } from 'expo-status-bar';

export default function Login(props) {
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken,setAccessToken]=useState();
    const [userInfo,setUserInfo]=useState();
    const {userData,setUserData}=useContext(AuthContext)
    const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: '885118015985-tcsqtr922i2gvfp18qh6pv4euo00q3nl.apps.googleusercontent.com',
      expoClientId:'885118015985-gloqoa2bil267f23ab59rsgv22663llj.apps.googleusercontent.com'
    });

      useEffect(()=>{
        if(response?.type=='success')
        {
            setAccessToken(response.authentication.accessToken);
           
            getUserData();
        }
      },[response]);

      const getUserData=async()=>{
        try {
            const resp = await fetch(
              "https://www.googleapis.com/userinfo/v2/me",
              {
                headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
              }
            );
      
            const user = await resp.json();
            console.log("user Details",user) 
            setUserInfo(user); 
            setUserData(user);
            await Services.setUserAuth(user);
          } catch (error) {
            // Add your own error handler here
          }
      }
  return (
    <>
    <View style={{alignItems:'center',backgroundColor:Colors.LIGHT_GRAY }}>
      <Image source={dome} style={styles.appImage}/>
      <View style={{backgroundColor:Colors.white
            ,padding:15,
            alignItems:'center',
            marginTop:-90,
            width:'100%',
            minHeight:'100%',
            // elevation:2,
            borderTopLeftRadius:50,
            borderTopRightRadius:50,
        }}>
        <Text style={styles.heading}>Explore the Cyber Space</Text>
        <Text style={styles.heading}>Unite to Spread Cyber Awareness.</Text>
        <Text style={{textAlign:'center',marginTop:20}}>You're only as strong as your Weakest link</Text>
        <View style={{paddingTop:10}}>
            <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("SignInScreen")} />
            <Btn bgColor='#D3D3D3' textColor={darkGreen} btnLabel="Signup" s Press={() => props.navigation.navigate("SignUpScreen")} />
            <Text style={{ color: 'black', fontSize: 34, marginVertical: 20, textAlign:'center' }}>or Continue with</Text>
            <View style={{flexDirection: "row",justifyContent:"space-between"}}>
              <TouchableOpacity style={styles.icons} onPress={()=>promptAsync()}>
                <AntDesign name="google" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
                <AntDesign name="twitter" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
                  <AntDesign name="github" size={40} color="black" />
              </TouchableOpacity>

      </View>

            </View>
      </View>
    </View>

    {/* <Background> */}
    {/* <Image 
      source={require("../assets/logo.jpg")}
      style={{height: 150, width:150, marginHorizontal: 220,marginVertical: 200, objectFit:"cover", borderRadius: 60}}
    /> */}
    {/* <View style={{ marginHorizontal: 120, marginVertical: 350 }}>
      <Text style={{ color: 'white', fontSize: 34, marginBottom: 40, marginHorizontal: 20 }}>Explore the Cyber-Space</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("SignInScreen")} />
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("SignUpScreen")} />
      <Text style={{ color: 'white', fontSize: 34, marginHorizontal: 70, marginVertical: 30 }}>or Continue with</Text>
      <View style={{flexDirection: "row", marginHorizontal: 65, marginVertical: 15 ,justifyContent:"space-between"}}>
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=>promptAsync()}>
          <AntDesign name="google" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}}>
          <AntDesign name="twitter" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 10}}>
            <AntDesign name="github" size={40} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  </Background> */}

    </>



   
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText:{
        fontSize:35,
        textAlign:'center',
        fontWeight:'bold' 
    },
    button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    appImage:{
      width:500,
      height:800,
      objectFit: 'cover',
      marginTop:50,
      borderRadius:20,
      borderWidth:6,
      borderColor:'#000'
  },
  heading:{
      fontSize:28,
      fontWeight:'bold'
  },
  icons:{
    paddingHorizontal:2,
    borderWidth:0.5,
    // backgroundColor:Colors.gray,
    height:60,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:60,
    borderRadius:100
  }
})