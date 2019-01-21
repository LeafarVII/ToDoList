import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';
// estilos no arquivo styles.js
import styles from './Styles.js';

export default class Note extends React.Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.note}>
        
        {/* Data */}
        <Text style={styles.notetext}>
          {this.props.val.date}
        </Text>

        {/* Nota */}
        <Text style={styles.notetext}>
          {this.props.val.note}
        </Text>


        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.notedelete}>
          <Text style={styles.notedeletetext}>
            D
          </Text>
        </TouchableOpacity>

      </View>


    )
  }
}

