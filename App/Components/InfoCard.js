import { View, Text, Dimensions, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const InfoCard = () => {
    const {userData}= useContext(AuthContext)
    console.log(userData)
  return (
    <View style={{width:Dimensions.get('screen').width*0.87
    ,height:150,borderRadius:10,marginRight:15, marginTop: 10, 
    flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:10, borderWidth:1, borderStyle:"dashed",
    backgroundColor:"#E2E8ED"
    }}>
        <View style={{height:"100%"}}>
        <Image source={{uri:userData?.picture}} style={{width:90
                    ,height:130,borderRadius:10}}/>
        </View>
      <View style={{backgroundColor:'transparent',borderRadius:10, height:"100%", flex:2, margin: 10, padding:10}}>
        <Text style={{fontSize:30, color:"black"}}>Name: John Doe</Text>
        <Text style={{fontSize:30, color:"black"}}>Email: JohnDoe@gmail.com</Text>
        {/* <Text>Name: John Doe</Text> */}
      </View>
    </View>
  )
}

export default InfoCard