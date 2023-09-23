import React from 'react'
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import {darkGreen} from '../Components/Constants';
import Field from '../Components/Field';


const SignUpScreen = props => {
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
          borderTopRightRadius: 130,
          borderBottomLeftRadius: 130,
          paddingTop: 80,
          alignItems: 'center',
        }}>
        <Field placeholder="First Name" />
        <Field placeholder="Last Name" />
        <Field
          placeholder="Email / Username"
          keyboardType={'email-address'}
        />
        <Field placeholder="Contact Number" keyboardType={'number-pad'} />
        <Field placeholder="Password" secureTextEntry={true} />
        <Field placeholder="Confirm Password" secureTextEntry={true} />
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
        <Btn
          textColor="white"
          bgColor={darkGreen}
          btnLabel="Signup"
          Press={() => {
            alert('Accoutn created');
            props.navigation.navigate('Login');
          }}
        />
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