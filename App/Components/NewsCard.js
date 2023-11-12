import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

const darkThemeColors = {
  background: '#121212',
  text: '#FFFFFF',
  primary: '#00BFFF', // Deep Sky Blue
};

const initialCardData = [
  {
    id: '1',
    title: 'New Malware Threat Discovered',
    date: 'September 15, 2023',
    source: 'Cybersecurity News Network',
    category: 'Malware',
    description:
      'A new malware strain has been identified targeting government agencies. Learn how to protect your systems.',
    image: "https://media.istockphoto.com/id/1411786403/photo/blocking-spam-e-mail-warning-pop-up-for-phishing-mail-network-security-concept-business-woman.webp?s=1024x1024&w=is&k=20&c=zz9ZxewMQMeXqtHjON2oN59H_JCqXc1LThq5QRoqj9s=",
  },
  {
    id: '2',
    title: 'Cybersecurity Trends in 2023',
    date: 'September 10, 2023',
    source: 'Tech Security Insights',
    category: 'Trends',
    description: 'Stay ahead of the curve with the latest cybersecurity trends for 2023.',
    image: "https://media.istockphoto.com/id/1411786403/photo/blocking-spam-e-mail-warning-pop-up-for-phishing-mail-network-security-concept-business-woman.webp?s=1024x1024&w=is&k=20&c=zz9ZxewMQMeXqtHjON2oN59H_JCqXc1LThq5QRoqj9s=",
  },
  {
    id: '3',
    title: 'Data Breach Alert',
    date: 'September 5, 2023',
    source: 'Data Security Gazette',
    category: 'Data Breach',
    description: 'Major data breach reported at a leading social media platform. What you need to know.',
    image: "https://media.istockphoto.com/id/1411786403/photo/blocking-spam-e-mail-warning-pop-up-for-phishing-mail-network-security-concept-business-woman.webp?s=1024x1024&w=is&k=20&c=zz9ZxewMQMeXqtHjON2oN59H_JCqXc1LThq5QRoqj9s=",
  },
  // Add more card items as needed
];

const Card = ({ title, date, source, category, description, image }) => (
  <View style={styles.card}>
    <Image source={{uri:image}} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardMeta}>{date} • {source}</Text>
      <Text style={styles.cardMeta}>Category: {category}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
    </View>
  </View>
);

const NewsCard = () => {
  const [cardData, setCardData] = useState(initialCardData);
  const flatListRef = useRef(null);

  const cycleCardData = () => {
    const nextCardData = [...cardData.slice(1), cardData[0]];
    setCardData(nextCardData);
    flatListRef.current.scrollToIndex({ index: 0, animated: false });
  };

  return (
    <>
         <Text style={{ fontSize: 30,fontWeight: 'bold', marginBottom: 6, marginTop: 15 }}>
        Cybersecurity News & Updates
      </Text>
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
        <FlatList
            ref={flatListRef}
            data={cardData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Card
            title={item.title}
                date={item.date}
                source={item.source}
                category={item.category}
                description={item.description}
                image={item.image}
            />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={cycleCardData}
            />
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkThemeColors.background,
    marginTop:10,
    borderRadius: 12,
    height: 620,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0
  },
  card: {
    backgroundColor: darkThemeColors.background,
    borderRadius: 17,
    borderColor:"white",
    borderWidth:1,
    margin: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkThemeColors.text,
    marginBottom: 8,
  },
  cardMeta: {
    fontSize: 14,
    color: darkThemeColors.text,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 16,
    color: darkThemeColors.text,
    marginBottom: 8,
  },
});

export default NewsCard;
