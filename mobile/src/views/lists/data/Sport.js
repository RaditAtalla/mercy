import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Place from "../Place";
import axios from '../../../apis/Axios';
import Style from "../../../styles/Style";

export default function Sport({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('/api/category/sport').then(result => {
      if (result.data.data) {
        setData(result.data.data.data)
      }   
    });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={Style.container}>
      <Place data={data} navigation={navigation} section={'sport'} />
    </View>
  );
}