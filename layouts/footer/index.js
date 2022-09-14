import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Footer = (props) => {
  return (
    <View style={styles.footer}>
        {/* <Text>Convert</Text> */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CONVERT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        justifyContent:'flex-end',
    },
    button: {
        backgroundColor: '#2F66F6',
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        fontFamily: 'Readex Pro',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 18,
        color: 'white'
    }
})