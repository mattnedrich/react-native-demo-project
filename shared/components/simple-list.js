import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DemoList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2}
    );

    const foo = [
      "A",
      "A",
      "A",
      "A",
      "A",
    ];

    const stuff = props.foo ? props.foo : foo;
    this.state = {
      dataSource: ds.cloneWithRows(stuff),
    };
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={
          (rowData) => {
            const rd = rowData ? rowData : "foo"
            return <Text style={styles.rowItem}>{rd}</Text>
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
    marginTop: 50,
  }
});
