import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { GIPHY_API_KEY } from 'react-native-dotenv';
import DemoList from '../shared/components/simple-list';

export default class DataScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      message: "Loading...",
      gifLinks: [],
    };
  }

  componentDidMount() {
    this.setState({message: "started request..."});
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          loading: false,
          message: "Loaded!",
          gifLinks: json.data.map((gifResult) => {
            return gifResult.images.fixed_height.url;
          }),
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          message: error.message
        });
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text> { this.state.message } </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <DemoList foo={this.state.gifLinks} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
