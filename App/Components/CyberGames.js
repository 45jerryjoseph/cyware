import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import GlobalApi from '../Shared/GlobalApi';

const CybersecurityGameCard = ({ game }) => {
    // console.log("Game area here:", game)
  return (
    <TouchableOpacity>
      <View style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: 'gray' }}>
        <Image
          source={{ uri: game.featuredImage }}
          style={{ width: 200, height: 100 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{game.gameTitle}</Text>
        <Text>{game.description}</Text>
        <Text>Category: {game.category}</Text>
        <Text>Platform: {game.platform || 'N/A'}</Text>
        {/* <Text>Platform: {game.platform?.join(', ') || 'N/A'}</Text> */}
        <Text>Difficulty: {game.difficultyLevel}</Text>
        <View style={{ flexDirection: 'row' }}>
          {game.tags?.map((tag, index) => (
            <View
              key={index}
              style={{
                backgroundColor: tag.color || 'gray',
                padding: 5,
                margin: 2,
                borderRadius: 5,
              }}
            >
              <Text>{tag.name}</Text>
            </View>
          ))}
        </View>
        {game.gameUrl && (
          <TouchableOpacity
            onPress={() => {
              // Implement navigation or link handling here
            }}
          >
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Play Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const CyberGames = () => {
  const [cyberGames, setCyberGames] = useState([]);

  useEffect(() => {
    getCyberGames();
  }, []);

  const getCyberGames = async () => {
    try {
      const result = (await GlobalApi.getCyberGames())?.data;
      const res = result?.data.map((item) => ({
        id: item.id,
        gameTitle: item.attributes.GameTitle,
        description: item.attributes.Description,
        category: item.attributes.Category,
        gameUrl: item.attributes.GameUrl,
        downloadLink: item.attributes.DownloadLink,
        platform: item.attributes.Platform,
        difficultyLevel: item.attributes.DifficultyLevel,
        tags: item.attributes.Tags,
        featuredImage: item.attributes.FeaturedImage.data.attributes.url,
      }));
      // console.log("There is data response:", res);
      setCyberGames(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={cyberGames}
        keyExtractor={(item) => item.gameTitle}
        renderItem={({ item }) => <CybersecurityGameCard game={item} />}
      />
      <Text>Here is a region that is not showing</Text>
    </View>
  );
};

export default CyberGames;
