import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../../Shared/GlobalApi';
// import GlobalApi from '../../Services/GlobalApi';

const Slidera = () => {
  const [sliderList, setSliderList] = useState([]);

  const getSlider = async () => {
    try {
      const result = (await GlobalApi.getSlider())?.data;
      console.log(Array.isArray(result.data))
      if (result.data && Array.isArray(result.data)) {
        const resp = result.data.map((item) => (
        // console.log("Here:",item),
        {
          id: item.id,
          name: item.attributes.Name,
          image: item.attributes.Image.data[0].attributes.url,
        }));
        setSliderList(resp);
        // console.log("point2",resp)
      } else {
        console.error('Invalid API response:', result);
      }
    } catch (error) {
      console.error('Error fetching slider data:', error);
    }
  };
  

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.image }} // Use item.image instead of item.attributes.Image.data.attributes
            style={{
              width: Dimensions.get('screen').width * 0.9,
              height: 170,
              borderRadius: 10,
            }}
          />
        )}
      />
    </View>
  );
};

export default Slidera;
