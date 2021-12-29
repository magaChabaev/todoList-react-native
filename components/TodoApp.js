import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import * as toDoActions from '../redux/tasksAction';
import * as filterActions from '../redux/filterActions';
import select from '../redux/select';

import Task from './Task';

const TodoApp = ({
  tasks,
  addTodo,
  deleteTodo,
  completeTodo,
  showAll,
  showCompleted,
  showUncompleted,
  tasksToCount,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedPicker, setSelectedPicker] = useState('all');
  const deleteTask = taskIndex => {
    deleteTodo(taskIndex);
  };
  const completeTask = taskIndex => {
    completeTodo(taskIndex);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Tasks</Text>
          <Picker
            style={styles.picker}
            itemStyle={{height: 50}}
            selectedValue={selectedPicker}
            onValueChange={itemValue => {
              setSelectedPicker(itemValue);
              if (itemValue === 'done') return showCompleted(tasks);
              else if (itemValue === 'notDone') return showUncompleted(tasks);
              else return showAll();
            }}>
            <Picker.Item label="All" value="all" />
            <Picker.Item
              label={`${
                tasksToCount.filter(el => el.completed).length
              } Completed`}
              value="done"
            />
            <Picker.Item
              label={`${
                tasksToCount.filter(el => !el.completed).length
              } Uncompleted`}
              value="notDone"
            />
          </Picker>
        </View>
        <View style={styles.tasks}>
          <ScrollView>
            {tasks.map(el => (
              <Task
                completed={el.completed}
                text={el.text}
                taskIndex={el.id}
                deleteTask={deleteTask}
                key={el.id}
                completeTask={completeTask}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.inputContainer} behavior="padding">
        <TextInput
          value={inputValue}
          maxLength={35}
          onChangeText={text => setInputValue(text)}
          style={styles.input}
          onSubmitEditing={e => {
            if (inputValue === '') return;
            addTodo({
              text: inputValue,
              id: tasks.length,
            });
            setInputValue('');
          }}
          placeholder={'Write a task ( max length 35 )'}></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(214, 217, 224)',
  },
  content: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    width: 150,
  },
  tasks: {
    marginTop: 20,
    height: 550,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    padding: 20,
    borderRadius: 30,
    marginBottom: 10,
  },
});

const mapState = state => {
  return {
    tasks: select(state.tasks, state.filter),
    tasksToCount: state.tasks,
  };
};

const mapDispatch = {
  addTodo: toDoActions.addTodo,
  deleteTodo: toDoActions.deleteTodo,
  completeTodo: toDoActions.completeTodo,
  showAll: filterActions.showAll,
  showCompleted: filterActions.showCompleted,
  showUncompleted: filterActions.showUncompleted,
};

export default connect(mapState, mapDispatch)(TodoApp);
