import React from 'react';
import { Permissions, FileSystem } from 'expo';
import Modal from 'react-native-modal';
import { View, Spinner } from '@shoutem/ui';
import { CameraRoll, Alert, DeviceEventEmitter } from 'react-native';
import { ProgressDialog, ConfirmDialog } from 'react-native-simple-dialogs';
import ImageViewer from 'react-native-image-zoom-viewer';
import { deviceWidth, deviceHeight } from '../styles/SliderEntry.style';

class ImageScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    ImageScreen.onPress = ImageScreen.onPress.bind(this);
    this.state = {
      errors: [],
      visibleModal: false,
      progressVisible: false,
      dialogVisible: false,
      localUri: null,
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    };
  };
  componentWillMount() {
    DeviceEventEmitter.addListener('goBackImageScreen', e => {
      this.setState({ visibleModal: true });
      console.log(e);
    });
  }
  componentWillUnmount() {
    this.setState({ visibleModal: false });
    DeviceEventEmitter.removeAllListeners('goBackImageScreen');
  }
  componentDidMount() {
    this.setState({ visibleModal: true });
    this.checkPermission()
      .then(data => {
        if (!data) {
          Alert.alert('授权', '授权失败，将无法保存图片！');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  }
  checkPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    return status === 'granted';
  };
  static onPress(uri) {
    let router = 'ImageManipulator';
    this.props.navigation.navigate(router, {
      uri,
    });
  }
  savePhoto(imageUrl) {
    this.setState({ progressVisible: true });
    const fileUri = FileSystem.documentDirectory + ((Math.random() * 10000) | 0) + '.jpg';
    FileSystem.downloadAsync(imageUrl, fileUri)
      .then(({ uri }) => {
        this.setState({ progressVisible: false });
        FileSystem.getInfoAsync(uri)
          .then(res => {
            CameraRoll.saveToCameraRoll(uri, 'photo');
            this.setState({ localUri: uri });
            this.setState({ dialogVisible: true });
          })
          .catch(error => {
            Alert.alert('异常', error.toString(), [
              { text: 'OK', onPress: () => this.setState({ progressVisible: false }) },
            ]);
          });
      })
      .catch(error => {
        Alert.alert('异常', error.toString(), [
          { text: 'OK', onPress: () => this.setState({ progressVisible: false }) },
        ]);
      });
  }
  render = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Modal
          isVisible={this.state.visibleModal}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          animationIn="fadeInRight"
          animationOut="fadeOutLeft"
          animationInTiming={1000}
          animationoutTiming={1000}
          backdropOpacity={1}
          onBackdropPress={() => {
            // this.props.navigation.dispatch(NavigationActions.back());
            this.props.navigation.goBack();
          }}
          onRequestClose={() => {
            // this.props.navigation.dispatch(NavigationActions.back());
            this.props.navigation.goBack();
          }}>
          <ImageViewer
            imageUrls={[
              { url: this.props.navigation.getParam('url', '') },
              { url: this.props.navigation.getParam('originalUrl', '') },
            ]}
            enableSwipeDown={false}
            menuContext={{ saveToLocal: '保存图片', cancel: '取消' }}
            onSave={url => {
              this.savePhoto(url);
            }}
            loadingRender={() => <Spinner size="large" color="#fff" />}
            enablePreload
          />
          <ProgressDialog
            visible={this.state.progressVisible}
            title="文件保存"
            message="保存中，请稍后..."
          />
          <ConfirmDialog
            title="文件保存"
            message="文件保存成功！"
            visible={this.state.dialogVisible}
            onTouchOutside={() => this.setState({ dialogVisible: false })}
            positiveButton={{
              title: '编辑',
              onPress: () => {
                this.setState({ dialogVisible: false, visibleModal: false });
                ImageScreen.onPress(this.state.localUri);
              },
            }}
            negativeButton={{
              title: '取消',
              onPress: () => this.setState({ dialogVisible: false }),
            }}
          />
        </Modal>
      </View>
    );
  };
}

export default ImageScreen;
