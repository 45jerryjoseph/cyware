import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import { useEffect, useState } from 'react';
import Home from './App/Pages/Home';
import Services from './App/Shared/Services';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/Navigations/HomeNavigation';
import SignInScreen from './App/Pages/SignInScreen';
import IntroNavigation from './App/Navigations/IntroNavigation';

export default function App() {

  const [userData,setUserData]=useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp=>{
      console.log(resp); 
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[]) 
  return (
    <View style={styles.container}>
      <AuthContext.Provider 
      value={{userData,setUserData}}>
      {userData?
      <NavigationContainer>
          <HomeNavigation/>
      </NavigationContainer>
      :
    
        <NavigationContainer>
          <IntroNavigation/>
        </NavigationContainer>
      
    }
    {/* <SignInScreen/> */}
    {/* <Login/> */}
      
      </AuthContext.Provider>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F8FC',
    
  },
});
