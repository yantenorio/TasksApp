import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* today's task */}
      <View style={styles.tasksWrapper}>
        
        <Text style = {styles.sectionTitle}>Tarefas de Hoje</Text>
        
        <View style = {styles.items}>
          {/* tasks will go here */}
          <Task text= {'Task 1'}/>
          <Task text= {'Task 2'}/>
        
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  tasksWrapper : {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle  : {
    fontSize: 21,
    fontWeight: 'bold'
  },
  
  items : {
    marginTop : 30,
     
  },

});
