import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function WelcomeHeader() {
    const {userData,setUserData}=useContext(AuthContext)
    // console.log("analyse:",userData)
  return (
    <View style={styles.container}>
        <View>
        <Text>Hello,</Text>
         <Text style={{fontSize:20,fontWeight:'bold'}}>{userData?.name || userData?.email}</Text>
        </View>
        <Image source={{uri:userData?.picture}}
        style={{width:40,height:40,borderRadius:100}}
        />
    
    </View>
  )
}

const styles = StyleSheet.create({
        container:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
})