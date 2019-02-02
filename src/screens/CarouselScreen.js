import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native'; // 3.1.6
import Carousel from 'react-native-snap-carousel'; // 3.6.0
import { View } from '@shoutem/ui';
import { KeepAwake, ScreenOrientation } from 'expo';
import {
  landscapeSliderHeight,
  landscapeItemHeight,
  deviceHeight,
  deviceWidth,
} from '../styles/SliderEntry.style';
import { scrollInterpolators, animatedStyles } from '../utils/animations';

class CarouselScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
    this.props = props;
    this._carousel = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };
  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }
  componentWillUnmount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
  }

  static handleSnapToItem(index) {}

  _renderItem = ({ item, index }) => {
    return (
      <ThumbnailBackgroundView>
        <CurrentVideoTO
          onPress={() => {
            this._carousel.snapToItem(index);
          }}>
          <CurrentVideoImage source={{ uri: item.src.landscape }} />
        </CurrentVideoTO>
      </ThumbnailBackgroundView>
    );
  };
  _getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  render = () => {
    alert(deviceWidth);
    alert(deviceHeight);
    const interIndex = this._getRandomIntInclusive(1, 4);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar hidden />
        <KeepAwake />
        <CarouselBackgroundView>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.props.navigation.getParam('mediaList', [])}
            renderItem={this._renderItem}
            slideStyle={{ alignItems: 'center' }}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            onSnapToItem={CarouselScreen.handleSnapToItem}
            sliderWidth={deviceHeight}
            itemWidth={(landscapeItemHeight * 1200) / 627}
            sliderHeight={landscapeSliderHeight}
            itemHeight={landscapeItemHeight}
            layout={'tinder'}
            firstItem={0}
            activeSlideOffset={0}
            autoplayDelay={5000}
            autoplay
            autoplayInterval={10000}
            activeAnimationType={'spring'}
            activeAnimationOptions={{
              friction: 4,
              tension: 40,
            }}
            scrollInterpolator={scrollInterpolators['scrollInterpolator' + interIndex]}
            slideInterpolatedStyle={animatedStyles['animatedStyles' + interIndex]}
            loop
          />
        </CarouselBackgroundView>
      </View>
    );
  };
}

export default CarouselScreen;

const CurrentVideoImage = styled.Image`
  box-shadow: 5px 10px;
  width: ${(landscapeItemHeight * 1200) / 627};
  height: ${landscapeItemHeight};
  border-radius: 10;
`;

const ThumbnailBackgroundView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CurrentVideoTO = styled.TouchableOpacity``;
const CarouselBackgroundView = styled.View`
  justify-content: center;
  background-color: #101010;
  height: ${landscapeItemHeight};
  align-items: center;
  width: 100%;
`;
