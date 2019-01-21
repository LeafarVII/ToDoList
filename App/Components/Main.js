import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
// estilos no arquivo styles.js
import styles from './Styles.js';
import Note from './Note.js';

export default class Main extends React.Component {

// parte funcional como variaveis
constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
}

// Parte grafica do app
  render() {

    // Baguio loco das funcoes
    let notes = this.state.noteArray.map((val, key) => {
      return <Note 
        key={key}
        keyval={key} val={val}
        deleteMethod={() => this.deleteNote(key)}
      />
    });


    return (
      <View style={styles.container}>

        {/* Cabecario */}
        <View style={styles.header}>
          <Text style={styles.headertext}>- NOTER -</Text>
        </View>

        {/* Scroll */}
        <ScrollView style={styles.scrollcontainer}>
          {notes}
        </ScrollView>

        {/* Rodapé */}
        <KeyboardAvoidingView behavior="padding" enabled style={styles.footer}>
          <TextInput
            style={styles.textinput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder='>note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>
          </TextInput>
        </KeyboardAvoidingView>

        {/* Botao de adicionar nota */}
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addbutton}>
          <Text style={styles.addbuttomtext}>
          +
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  addNote() {
    
    if (this.state.noteText) {
      var D = new Date();
      this.state.noteArray.push({
        'date': D.getFullYear() + "/" + (D.getMonth() + 1) + "/" + D.getDate(),
        'note': this.state.noteText
      });

      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })

    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key,1);
    this.setState({ noteArray: this.state.noteArray })
  }

}