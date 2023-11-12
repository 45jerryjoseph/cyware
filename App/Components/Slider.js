import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi';
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function Slider() {
    const [slider,setSlider]=useState([])
    useEffect(()=>{
        getSlider();
      },[])
  
      const getSlider=async()=>{
        const result=(await GlobalApi.getSlider())?.data;
       
        const resp=result.data.map((item)=>({
            id:item.id,
            name:item.attributes.Name,
            image:item.attributes.image.data.attributes.url
        }))
        //  console.log(resp)
        setSlider(resp)
      }
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        key={slider.id}
        renderItem={({item})=>(
            <View style={{position:'relative'}}>
                <Image source={{uri:item.image}} 
                style={{width:Dimensions.get('screen').width*0.9
                    ,height:170,borderRadius:10,marginRight:15}}
                />
                <Text style={{fontSize:54,fontWeight:'bold',color: "gold", position:'absolute', bottom:0, margin:10}}>{item.name}</Text>
            </View>
        )}
      />
    </View>

  )
}