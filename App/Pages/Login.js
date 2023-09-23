import React, { useContext, useEffect, useState } from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons'; 
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AuthContext } from '../Context/AuthContext';
import Services from '../Shared/Services';
import {View, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import { darkGreen, green } from '../Components/Constants';
import { AntDesign } from "@expo/vector-icons";
// import { StatusBar } from 'expo-status-bar';

export default function Login(props) {
    WebBrowser.maybeCompleteAuthSession();
    const [accessToken,setAccessToken]=useState();
    const [userInfo,setUserInfo]=useState();
    const {userData,setUserData}=useContext(AuthContext)
    const [request, response, promptAsync] = Google.useAuthRequest({
        
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

    <Background>
    {/* <Image 
      source={require("../assets/logo.jpg")}
      style={{height: 150, width:150, marginHorizontal: 220,marginVertical: 200, objectFit:"cover", borderRadius: 60}}
    /> */}
    <View style={{ marginHorizontal: 120, marginVertical: 350 }}>
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
  </Background>

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
    }
})