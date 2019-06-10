import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import React, {Component} from 'react';
//import TabBarIcon from './app/components/TabBarIcon';

import Bookcase from './app/screens/Bookcase';
import AddBook from './app/screens/AddBook';
import EditBook from './app/screens/editBook';
import ReadTimer from './app/screens/readTimer';

const BookStack = createStackNavigator({
  Book: Bookcase,
  //EditBook: EditBook
});

const AddBookStack = createStackNavigator({
  AddBook: AddBook
}); 

const ReadTimerStack = createStackNavigator({
  ReadTimer: ReadTimer
}); 

export default createAppContainer(createBottomTabNavigator(
  {
    "Book": BookStack,
    "Add Book": AddBookStack,
    "Read Timer": ReadTimer 
  }
));