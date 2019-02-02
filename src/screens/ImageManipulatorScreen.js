import React from 'react';
import { Alert, CameraRoll, DeviceEventEmitter } from 'react-native';
import { View } from '@shoutem/ui';
import ImageManipulator from '../components/ImageManipulator';
import HeaderBar from '../components/HeaderBar';

class ImageManipulatorScreen extends React.PureComponent {
  state = {
    isVisible: true,
    uri: this.props.navigation.getParam('uri', ''),
  };
  componentWillMount() {
    const { setParams } = this.props.navigation;
    setParams({ navigation: this.props.navigation, action: null });
  }
  componentWillUnmount() {
    DeviceEventEmitter.emit('goBackImageScreen', {});
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <HeaderBar
          title={'图片编辑'}
          method={''}
          query={''}
          navigation={navigation}
          action={null}
        />
      ),
    };
  };
  savePhoto(uri) {
    CameraRoll.saveToCameraRoll(uri, 'photo');
    Alert.alert('文件保存', '保存成功，可去相册应用设为壁纸～', [
      { text: 'OK', onPress: () => this.setState({ isVisible: false }) },
    ]);
  }
  render() {
    const { uri } = this.state;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageManipulator photo={{ uri }} onPictureChoosed={uriM => this.savePhoto(uriM)} />
      </View>
    );
  }
}

export default ImageManipulatorScreen;
