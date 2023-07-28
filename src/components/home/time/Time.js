import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Time = ({date}) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const startDate = new Date(date);

    const calculateElapsedTime = () => {
      const currentDate = new Date();
      const timeDifference = currentDate - startDate;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const year = Math.floor(days / 365);

      setElapsedTime(`${year} an`);
    };

    calculateElapsedTime();

    const interval = setInterval(() => {
      calculateElapsedTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text style={{fontWeight: 500, color: "gray"}}>il y a {elapsedTime}</Text>
    </View>
  );
};

export default Time


