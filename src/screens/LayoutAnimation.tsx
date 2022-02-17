/* eslint-disable @typescript-eslint/no-unused-vars */
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  ZoomIn,
  ZoomInDown,
  ZoomOut,
  Layout,
} from 'react-native-reanimated';
// import {Animated as} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileIcon from '../icons/ProfileIcon';
import {ScrollView} from 'react-native-gesture-handler';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

// create dummy 5 TODO_ITEMS
const TODO_ITEMS = [
  {id: 1, title: 'Buy milk'},
  {id: 2, title: 'Buy eggs'},
  {id: 3, title: 'Buy bread'},
  {id: 4, title: 'Buy cheese'},
  {id: 5, title: 'Buy milk'},
];

const LayoutAnimation = () => {
  // useSharedValue gives you a value that can be controllled from ui thread
  const buttonScale = useSharedValue(1);
  const [todos, setTodos] = useState<
    {
      id: number;
      title: string;
    }[]
  >(TODO_ITEMS);
  const initialMode = useRef<boolean>(true);
  useEffect(() => {
    initialMode.current = false;
  }, []);

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: buttonScale.value,
        },
      ],
    };
  });

  const addItem = () => {
    const item = {
      id: Math.floor(Math.random() * 10000),
      title: 'New task',
    };
    setTodos(prevTodos => [...prevTodos, item]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {todos.map((todo, index) => (
          <Animated.View
            key={todo.id}
            style={[styles.todoItem]}
            entering={initialMode.current ? ZoomIn.delay(100 * index) : ZoomIn}
            exiting={ZoomOut}
            layout={Layout.delay(50)}>
            <Text style={styles.buttonText}>{todo.title}</Text>
            <Pressable onPress={() => deleteTodo(todo.id)}>
              <ProfileIcon size={20} color={'red'} />
            </Pressable>
          </Animated.View>
        ))}
      </View>
      {/* <Animated.FlatList
        itemLayoutAnimation={Layout.springify()}
        // itemLayoutAnimation={Layout.delay(100)}
        data={todos}
        keyExtractor={todo => todo.id.toString()}
        renderItem={({item: todo, index}) => {
          return (
            <Animated.View
              key={todo.id}
              style={[styles.todoItem]}
              entering={
                initialMode.current ? ZoomIn.delay(100 * index) : ZoomIn
              }
              exiting={ZoomOut}
              layout={Layout.delay(100)}>
              <Text style={styles.buttonText}>{todo.title}</Text>
              <Pressable onPress={() => deleteTodo(todo.id)}>
                <ProfileIcon size={20} color={'red'} />
              </Pressable>
            </Animated.View>
          );
        }}
      /> */}
      <AnimatedPressable
        style={[styles.addButton, animatedButtonStyle]}
        onPress={addItem}
        onPressIn={() => {
          buttonScale.value = withTiming(0.85);
        }}
        onPressOut={() => {
          buttonScale.value = withTiming(1);
        }}>
        <ProfileIcon size={30} color={'red'} />
      </AnimatedPressable>
    </SafeAreaView>
  );
};

export default LayoutAnimation;

// function TodoItem(todo,initialMode) {
//   return (
//     <Animated.View
//       style={[styles.todoItem]}
//       entering={initialMode.current ? ZoomIn.delay(100 * index) : ZoomIn}
//       exiting={ZoomOut}
//       layout={Layout.delay(50)}>
//       <Text style={styles.buttonText}>{todo.title}</Text>
//       <Pressable onPress={() => deleteTodo(todo.id)}>
//         <ProfileIcon size={20} color={'red'} />
//       </Pressable>
//     </Animated.View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  todoItem: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    marginVertical: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'red',
  },
  addButton: {
    width: 80,
    aspectRatio: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,

    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});
