import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './weather';

const API_KEY = '4300b4080c2790f45c9b8c768ef220af'

export default function App() {
  const [weather, setWeather] = useState({ temp: null, condition: null })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw null
        }

        const { latitude, longitude } = (await Location.getCurrentPositionAsync({})).coords
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
        setWeather((pr) => ({ ...pr, temp: data.main.temp, condition: data.weather[0].main }))
        setIsLoaded(true)
        console.log(data)
      } catch (error) {
        Alert.alert('Не могу определить местоположение', 'Очень грустно :(')
      }
    })()
  }, []);
  return (
    isLoaded ? <Weather temp={Math.round(weather.temp)} condition={weather.condition} /> :
      <Loading />
  );
}


