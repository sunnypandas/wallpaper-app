import React from 'react';
import { Header } from 'react-native-elements';
import { View } from '@shoutem/ui';

class HeaderBar extends React.PureComponent {
  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: this.props.title, style: { color: '#fff' } }}
          rightComponent={
            this.props.title === '最热' ||
            this.props.title === '时尚' ||
            this.props.title === '自然' ||
            this.props.title === '背景' ||
            this.props.title === '科学' ||
            this.props.title === '教育' ||
            this.props.title === '人物' ||
            this.props.title === '情感' ||
            this.props.title === '宗教' ||
            this.props.title === '健康' ||
            this.props.title === '地点' ||
            this.props.title === '动物' ||
            this.props.title === '行业' ||
            this.props.title === '美食' ||
            this.props.title === '计算机' ||
            this.props.title === '运动' ||
            this.props.title === '交通工具' ||
            this.props.title === '旅游' ||
            this.props.title === '建筑' ||
            this.props.title === '商业' ||
            this.props.title === '音乐' ||
            this.props.title === '艺术' ||
            this.props.title === '文化'
              ? {
                  icon: 'airplay',
                  color: '#fff',
                  onPress: () => {
                    this.props.action();
                  },
                }
              : null
          }
        />
      </View>
    );
  }
}

export default HeaderBar;
