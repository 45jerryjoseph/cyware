import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation()
const setUserAuth=async(value)=>{
    await AsyncStorage.setItem('userData',JSON.stringify(value))
}

const getUserAuth=async()=>{
   const value=await AsyncStorage.getItem('userData');
   return JSON.parse(value)
}

const Logout=()=>{
    AsyncStorage.clear()
    // navigation.navigate()
    
}

export default{
    setUserAuth,
    getUserAuth,
    Logout,
}