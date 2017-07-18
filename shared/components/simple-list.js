import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

export default class DemoList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2}
    );

    const foo = [
      "Item A",
      "Item B",
      "Item C",
      "Item D",
      "Item E",
    ];

    const stuff = props.foo ? props.foo : foo;
    this.state = {
      dataSource: ds.cloneWithRows(stuff),
    };
  }

  render() {
 const width = Dimensions.get('window').width; //full width
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={
          (rowData) => {
            return (
              <View>
                <Image
                    style={{width: 100, height: 100}}
                    source={{uri: rowData}}
                />
              </View>
            );
          }
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  rowItem: {
    fontSize: 15,
    margin: 10,
  },
  listView: {
    marginTop: 0,
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
