import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../layouts/header'
import Footer from '../../layouts/footer'

const Exchange = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <View style={styles.methodfunc}>
            <TouchableOpacity style={styles.methodNoneActive}>
                <Text>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.methodNoneActive}>
                <Text>Sell</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.methodActive}>
                <Text>Exchange</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.convertCost}>
            <Text style={styles.convertCostTitle}>You Convert</Text>
            <Text>$1.000</Text>
        </View>
        <View></View>
      </View>
      <Footer />
    </View>
  )
}

export default Exchange

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    mainContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        padding: 10
    },
    methodfunc: {
        height: 32,
        padding: 2,
        backgroundColor: 'rgba(118, 118, 128, 0.12)',
        borderRadius: 8.91,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
    },
    methodNoneActive: {
        flex: 1,
        borderRightWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    methodActive: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.04)',
        shadowColor: 'rgba(0, 0, 0, 0.12)',
        borderRadius: 6.93,
        height: 28,
    },
    convertCost: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    convertCostTitle: {
        fontFamily: 'Readex Pro',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18
    },

})