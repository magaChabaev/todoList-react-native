import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({text, completed, taskIndex, deleteTask, completeTask}) => {
  return (
    <View style={styles.task}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => completeTask(taskIndex)}>
          <Text style={{textDecorationLine: completed ? 'line-through' : null}}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => deleteTask(taskIndex)}>
          <Text style={styles.deleteIcon}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 5,
    height: 15,
    width: 15,
    marginHorizontal: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  deleteIcon: {
    fontSize: 20,
    transform: [{rotateX: '45deg'}],
  },
});

export default Task;
