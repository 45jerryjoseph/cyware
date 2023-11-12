import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, ScrollView } from 'react-native';

const dummyData = [
  {
    id: '1',
    title: 'Phishing Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '2',
    title: 'Zero-Day Vunerability Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '3',
    title: 'Malware Threat Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '4',
    title: 'IoT Security Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '5',
    title: 'US-CERT (United States Computer Emergency Readiness Team) Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '6',
    title: 'Social Engeneering Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '7',
    title: 'Supply Chain and Software Supply Chain Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '8',
    title: 'CVE (Common Vulnerabilities and Exposures) Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
  {
    id: '9',
    title: 'Mobile Security Alerts',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rxXk6k-HqZSKT-bg9X65qcvr-VWa2fBFiMHuW9uvw&s",
  },
];

const GridView = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{uri:item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <>
        <Text style={{fontSize:30,fontWeight:'bold',marginBottom:3, marginTop:15}}>Cyber Threat Alerts</Text>
        <ScrollView style={{height:350}} nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >

            <FlatList
            data={dummyData}
            numColumns={3}
            
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
        </ScrollView>
      </>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    marginRight:10
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default GridView;
