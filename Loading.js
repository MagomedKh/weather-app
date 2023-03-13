import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
   return (
      <View style={styles.container}>
         <StatusBar barStyle={'dark-content'} />
         <Text style={styles.text}>Получение погоды...</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: '#fdf6aa'
   },
   text: {
      color: '2c2',
      fontSize: 20
   }
})

export default Loading;

