import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi'
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VideoCourseList() {

    const [videoList,setVideoList]=useState([]);
    const navigation=useNavigation();

    useEffect(()=>{
        getVideoCourse();
    },[])
    const getVideoCourse=async()=>{
        const resp=(await GlobalApi.getVideoCourse()).data;
        const result=resp.data.map((item)=>({
            id:item.id,
            name:item.attributes.title,
            description:item.attributes.description,
            image:item.attributes.image.data.attributes.url,
            Topic:item.attributes.VideoTopic
        }))
        setVideoList(result);
        console.log(result) 
    }
    const onPressCourse=(course)=>{
        
        navigation.navigate('course-detail',{courseData:course,
        courseType:'video'})
    }
  return (
    <>
      <Text style={{fontSize:30,fontWeight:'bold',marginBottom:3, marginTop:15}}>Educational Content</Text>
      <ScrollView horizontal={true} style={{marginTop:12}}>
     <FlatList
     data={videoList}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     
     renderItem={({item})=>(
        <TouchableOpacity onPress={()=>onPressCourse(item)}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
        </TouchableOpacity>
     )}
     
     />
     
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onPressCourse("item")}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s"}} 
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
            <Text style={{fontSize:20}}>Cybersecurity Basics</Text>
        </TouchableOpacity>
    </ScrollView>
     </>
  )
}