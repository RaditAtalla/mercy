import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Schedule from "../Schedule";
import axios from 'axios';
import Style from "../../../styles/Style";

export default function KAI({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('https://dummyjson.com/products').then(result => {
      setData(result.data.products)
    });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <View style={Style.container}>
      <Schedule data={data} navigation={navigation} />
    </View>
  );
}