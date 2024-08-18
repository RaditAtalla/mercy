import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Place from "../Place";
import axios from '../../../apis/Axios';
import Style from "../../../styles/Style";

export default function Salon({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios.get('/api/category/salon').then(result => {
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
      <Place data={data} navigation={navigation} section={'salon'} />
    </View>
  );
}