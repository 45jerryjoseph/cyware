import React from 'react'
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import {darkGreen} from '../Components/Constants';
import Field from '../Components/Field';


const SignInScreen = (props) => {
  return (
    <Background>
    <View style={{alignItems: 'center'}}>
      <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          marginTop: 80,
          marginBottom: 40,
        }}>
        Login
      </Text>
      <View
        style={{
          // height: 700,
          // width: 460,
          paddingTop: 100,
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.4)',
          width: 586,
          height: 1150,
          // borderTopLeftRadius: 130,
          borderTopRightRadius: 130,
          borderBottomLeftRadius: 130,
        }}>
        <Text style={{fontSize: 40, color: "black", fontWeight: 'bold'}}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login to your account
        </Text>
        <Field
          placeholder="Email / Username"
          keyboardType={'email-address'}
        />
        <Field placeholder="Password" secureTextEntry={true} />
        <View
          style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
          <Text style={{color: "black", fontWeight: 'bold', fontSize: 16}}>
            Forgot Password ?
          </Text>
        </View>
        <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
        <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
          <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUpScreen")}>
          <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Background>
  )
}

export default SignInScreen