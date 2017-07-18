import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Image
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class DemoList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2}
    );

    this.state = {
      dataSource: ds.cloneWithRows(props.foo),
    };
  }

  render() {
    const width = Dimensions.get('window').width; //full width
    return (
      <ListView
      dataSource={this.state.dataSource}
      enableEmptySections={true}
      renderRow={
        (rowData) => {
          return (
            <Image
                style={styles.imageRow}
                source={{uri: rowData}}
            />
          );
        }
      }
      />
    );
  }
}

const styles = StyleSheet.create({
  imageRow: {
    width: .8 * window.width,
    height: 200
  }
});
