import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'dva-no-router';
import { Image, TouchableOpacity } from '@shoutem/ui';
import { getColumnWidth, getColumnNum } from '../styles/SliderEntry.style';
import HeaderBar from '../components/HeaderBar';

const NUM_ROWS = 36;

@connect(({ acgn }) => ({
  acgn,
}))
class ImageListScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    ImageListScreen.onPress = ImageListScreen.onPress.bind(this);
    this.fromImageListScreen = this.fromImageListScreen.bind(this);
    this.state = {
      mediaList: [],
      loading: false,
      page: 1,
      error: null,
      refreshing: false,
    };
  }
  componentWillMount() {
    const { setParams } = this.props.navigation;
    setParams({ navigation: this.props.navigation, action: this.fromImageListScreen });
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <HeaderBar
          title={navigation.state.params.title}
          method={navigation.state.params.method}
          query={navigation.state.params.query}
          navigation={navigation}
          action={navigation.state.params.action}
        />
      ),
    };
  };
  fromImageListScreen() {
    let router = 'Carousel';
    this.props.navigation.navigate(router, {
      mediaList: this.state.mediaList,
    });
  }
  makeRemoteRequest = () => {
    const { page } = this.state;
    this.getData(page);
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  getData(value) {
    this.setState({ loading: true });
    let method = '';
    let response = '';
    let payload = {};
    if (this.props.navigation.state.params.title === '最热') {
      method = 'curatedPhotoListFetch';
      response = 'curatedPhotoList';
      payload = {
        per_page: NUM_ROWS,
        page: value,
      };
    } else {
      method = 'searchPhotoListFetch';
      response = 'searchPhotoList';
      payload = {
        per_page: NUM_ROWS,
        page: value,
        query: this.props.navigation.state.params.query,
      };
    }
    const { dispatch } = this.props;
    dispatch({
      type: 'acgn/' + method,
      payload,
    })
      .then(() => {
        const { acgn } = this.props;
        this.setState({
          mediaList:
            value === 1
              ? acgn[response].photos
              : [...this.state.mediaList, ...acgn[response].photos],
          error: 'error' || null,
          loading: false,
          refreshing: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  static onPress(url, original) {
    let router = 'Image';
    this.props.navigation.navigate(router, {
      url,
      originalUrl: original,
    });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <FlatList
          data={this.state.mediaList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => ImageListScreen.onPress(item.src.portrait, item.src.original)}>
              <Image
                source={{ uri: item.src.tiny }}
                style={{
                  width: getColumnWidth(),
                  height: (getColumnWidth() * 5) / 7,
                }}
              />
            </TouchableOpacity>
          )}
          resizeMode={'cover'}
          {...(getColumnNum() > 1 ? { columnWrapperStyle: { alignItems: 'center' } } : {})}
          keyExtractor={(item, index) => 'list-item-' + index}
          // ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          numColumns={getColumnNum()}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0.2}
        />
      </View>
    );
  }
}

export default ImageListScreen;
