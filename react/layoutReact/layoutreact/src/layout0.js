import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default App = () => {
    return( 
      <View style= {styles.container} >
        <View style= {styles.top} >
        </View>
        <View style= {styles.center }>
        </View> 
        <View style= {styles.bottom} >
        </View> 
      </View>
    );  
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#989872",
  },
  top: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1',
  },
  center: {
    flex: 0,
    backgroundColor: '#880000',
  },
  bottom: {
    flex: 0,
    backgroundColor: "#61dafb",
  },
});

