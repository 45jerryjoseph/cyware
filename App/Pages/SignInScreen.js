import React, { useContext, useState } from 'react'
import {View, Text, Touchable, TouchableOpacity, Alert, Dimensions} from 'react-native';
import Background from '../Components/Background';
import Btn from '../Components/Btn';
import {darkGreen} from '../Components/Constants';
import Field from '../Components/Field';
// import auth from '@react-native-firebase/auth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../Context/AuthContext';
import Services from '../Shared/Services';



const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const {userData, setUserData} = useContext(AuthContext)
  const auth = getAuth()

  const login = async() => {
    setShowLoading(true);
    
    try {
        await signInWithEmailAndPassword(auth,email,password).then(async(userCredential) => {
          
          const user =userCredential.user
          // setShowLoading(true)
          await setUserData(user)
          await Services.setUserAuth(user)
          props.navigation.navigate('home',{ user });
          // setShowLoading(false);
        }).catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message
          console.log("error:",{errorCode,errorMessage})
        })
        
    } catch (e) {
        setShowLoading(false);
        Alert.alert(
            e.message
        );
    }
};
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
          borderWidth:2,
        }}>
        Login
      </Text>
      {/* <View style={{borderWidth:2,backgroundColor: 'inherit',height:60, width:60, borderRadius:99,marginBottom:-30,backgroundColor:'black',zIndex:20}} ></View> */}
      <View
        style={{
          // height: 700,
          // width: 460,
          paddingTop: 100,
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.4)',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          // borderTopLeftRadius: 130,
          borderTopRightRadius: 100,
          borderTopLeftRadius:100
          // borderBottomLeftRadius: 0,
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
          value={email}
          onChangeText={setEmail}
        />
        <Field placeholder="Password" 
          secureTextEntry={true} 
          value={password}
          onChangeText={setPassword}
        />
        <View
          style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
          <Btn style={{color: "black", fontWeight: 'bold', fontSize: 16}} onPress={()=> props.navigation.navigate("reset")}>
            Forgot Password ?
          </Btn>
        </View>
        <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => login()} />
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