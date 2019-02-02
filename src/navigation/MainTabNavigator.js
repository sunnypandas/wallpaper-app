import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import ImageListScreen from '../screens/ImageListScreen';
import ImageScreen from '../screens/ImageScreen';
import CarouselScreen from '../screens/CarouselScreen';
import ImageManipulatorScreen from '../screens/ImageManipulatorScreen';

const CuratedStack = createStackNavigator({
  CuratedList: { screen: ImageListScreen, params: { title: '最热', method: 'curated', query: '' } },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

CuratedStack.navigationOptions = {
  drawerLabel: '最热',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

const FashionStack = createStackNavigator({
  FashionList: {
    screen: ImageListScreen,
    params: { title: '时尚', method: 'search', query: 'fashion' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

FashionStack.navigationOptions = {
  drawerLabel: '时尚',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const NatureStack = createStackNavigator({
  NatureList: {
    screen: ImageListScreen,
    params: { title: '自然', method: 'search', query: 'nature' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

NatureStack.navigationOptions = {
  drawerLabel: '自然',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const BackgroundsStack = createStackNavigator({
  BackgroundsList: {
    screen: ImageListScreen,
    params: { title: '背景', method: 'search', query: 'backgrounds' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

BackgroundsStack.navigationOptions = {
  drawerLabel: '背景',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const ScienceStack = createStackNavigator({
  ScienceList: {
    screen: ImageListScreen,
    params: { title: '科学', method: 'search', query: 'science' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

ScienceStack.navigationOptions = {
  drawerLabel: '科学',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const EducationStack = createStackNavigator({
  EducationList: {
    screen: ImageListScreen,
    params: { title: '教育', method: 'search', query: 'education' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

EducationStack.navigationOptions = {
  drawerLabel: '教育',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const PeopleStack = createStackNavigator({
  PeopleList: {
    screen: ImageListScreen,
    params: { title: '人物', method: 'search', query: 'people' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

PeopleStack.navigationOptions = {
  drawerLabel: '人物',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const FeelingsStack = createStackNavigator({
  FeelingsList: {
    screen: ImageListScreen,
    params: { title: '情感', method: 'search', query: 'feelings' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

FeelingsStack.navigationOptions = {
  drawerLabel: '情感',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const ReligionStack = createStackNavigator({
  ReligionList: {
    screen: ImageListScreen,
    params: { title: '宗教', method: 'search', query: 'religion' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

ReligionStack.navigationOptions = {
  drawerLabel: '宗教',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const HealthStack = createStackNavigator({
  HealthList: {
    screen: ImageListScreen,
    params: { title: '健康', method: 'search', query: 'health' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

HealthStack.navigationOptions = {
  drawerLabel: '健康',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const PlacesStack = createStackNavigator({
  PlacesList: {
    screen: ImageListScreen,
    params: { title: '地点', method: 'search', query: 'places' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

PlacesStack.navigationOptions = {
  drawerLabel: '地点',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const AnimalsStack = createStackNavigator({
  AnimalsList: {
    screen: ImageListScreen,
    params: { title: '动物', method: 'search', query: 'animals' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

AnimalsStack.navigationOptions = {
  drawerLabel: '动物',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const IndustryStack = createStackNavigator({
  IndustryList: {
    screen: ImageListScreen,
    params: { title: '行业', method: 'search', query: 'industry' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

IndustryStack.navigationOptions = {
  drawerLabel: '行业',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const FoodStack = createStackNavigator({
  FoodList: {
    screen: ImageListScreen,
    params: { title: '美食', method: 'search', query: 'food' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

FoodStack.navigationOptions = {
  drawerLabel: '美食',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const ComputerStack = createStackNavigator({
  ComputerList: {
    screen: ImageListScreen,
    params: { title: '计算机', method: 'search', query: 'computer' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

ComputerStack.navigationOptions = {
  drawerLabel: '计算机',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const SportsStack = createStackNavigator({
  SportsList: {
    screen: ImageListScreen,
    params: { title: '运动', method: 'search', query: 'sports' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

SportsStack.navigationOptions = {
  drawerLabel: '运动',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const TransportationStack = createStackNavigator({
  TransportationList: {
    screen: ImageListScreen,
    params: { title: '交通工具', method: 'search', query: 'transportation' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

TransportationStack.navigationOptions = {
  drawerLabel: '交通工具',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const TravelStack = createStackNavigator({
  TravelList: {
    screen: ImageListScreen,
    params: { title: '旅游', method: 'search', query: 'travel' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

TravelStack.navigationOptions = {
  drawerLabel: '旅游',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const BuildingsStack = createStackNavigator({
  BuildingsList: {
    screen: ImageListScreen,
    params: { title: '建筑', method: 'search', query: 'buildings' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

BuildingsStack.navigationOptions = {
  drawerLabel: '建筑',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const BusinessStack = createStackNavigator({
  BusinessList: {
    screen: ImageListScreen,
    params: { title: '商业', method: 'search', query: 'business' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

BusinessStack.navigationOptions = {
  drawerLabel: '商业',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const MusicStack = createStackNavigator({
  MusicList: {
    screen: ImageListScreen,
    params: { title: '音乐', method: 'search', query: 'music' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

MusicStack.navigationOptions = {
  drawerLabel: '音乐',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const ArtStack = createStackNavigator({
  ArtList: {
    screen: ImageListScreen,
    params: { title: '艺术', method: 'search', query: 'art' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

ArtStack.navigationOptions = {
  drawerLabel: '艺术',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

const CultureStack = createStackNavigator({
  CultureList: {
    screen: ImageListScreen,
    params: { title: '文化', method: 'search', query: 'culture' },
  },
  Image: ImageScreen,
  ImageManipulator: ImageManipulatorScreen,
  Carousel: CarouselScreen,
});

CultureStack.navigationOptions = {
  drawerLabel: '文化',
  drawerIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-photos' : 'md-photos'} />
  ),
};

export default createDrawerNavigator({
  CuratedStack,
  FashionStack,
  NatureStack,
  BackgroundsStack,
  ScienceStack,
  EducationStack,
  PeopleStack,
  FeelingsStack,
  ReligionStack,
  HealthStack,
  PlacesStack,
  AnimalsStack,
  IndustryStack,
  FoodStack,
  ComputerStack,
  SportsStack,
  TransportationStack,
  TravelStack,
  BuildingsStack,
  BusinessStack,
  MusicStack,
  ArtStack,
  CultureStack,
});
