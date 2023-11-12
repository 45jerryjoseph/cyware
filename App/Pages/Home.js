import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext'
import WelcomeHeader from '../Components/WelcomeHeader'
import SearchBar from '../Components/SearchBar'
import GlobalApi from '../Shared/GlobalApi'
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList'
import CourseList from '../Components/CourseList'
import { ScrollView } from 'react-native'
import InfoCard from '../Components/InfoCard'
import GridView from './GridView'
import AccordionList from '../Components/AccordionList'
import SecurityScore from '../Components/SecurityScore'
import NewsCard from '../Components/NewsCard'
import CyberGames from '../Components/CyberGames'
import Slidera from '../Components/compon/Slider'



export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
    
   
  return (
    <ScrollView style={{padding:20}}>
        <WelcomeHeader/>
        <SearchBar/>
        {/* <InfoCard/> */}
        <Slider/>
        <Slidera />
        <GridView />
        <AccordionList />  
        <VideoCourseList/>
        <SecurityScore />
        <NewsCard />
        <CyberGames />
        {/* <CourseList type={'basic'} />
        <CourseList type={'advance'} /> */}
        <View style={{height:100}}> 
           <Button title='Logout' onPress={()=>{Services.Logout(); setUserData(null)}} />
        </View>
    </ScrollView> 
  )
}