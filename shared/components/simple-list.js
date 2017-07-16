import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DemoList extends Component {
  rows() {
    return [
      "row 1",
      "row 2",
      "row 3",
      "row 4",
      "row 5",
    ];
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const rows = this.rows();
    this.state = {
      dataSource: ds.cloneWithRows(rows),
    };
  }

  render() {
    return (
      <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.rowItem}>{rowData}</Text>}
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
