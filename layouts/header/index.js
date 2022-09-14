import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Vector_Left from './../../assets/img/Vector.png'
import Help_Btn from './../../assets/img/Info_light.png'
import ExchangeCrypto from './../../assets/img/ExchangeCrypto.png'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={Vector_Left}/>
      {/* <Text style={styles.screenTitle}>Exchange Crypto</Text> */}
      <Image source={ExchangeCrypto} />
      <Image source={Help_Btn} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    screenTitle: {
        fontFamily: 'Readex Pro',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 20
    }
})