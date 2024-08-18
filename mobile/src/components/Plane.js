import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";

export default function Plane() {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const movingPlane = () => {
    let i = 0
    setInterval(() => {
      if (i < Dimensions.get('window').height) {
        setPosition({
          top: i++,
          left: i++
        });
      } else {
        i = 0
      }
    }, 50);
  }

  useEffect(() => {
    movingPlane();
  }, []);

  return (
    <Image source={require('../assets/images/plane.gif')} style={{ position: 'absolute', top: position.top, left: position.left, width: 120, height: 120 }} />
  )
}