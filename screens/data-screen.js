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
      gifLinks: ["one", "two"],
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
          message: json.data[0].url,
          gifLinks: json.data.map((x) => {return x.url;}),
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          message: error.message + GIPHY_API_KEY
        });
      })
  }

  render() {
    if (this.state.loading) {
      const loadingMarkup = (
        <Text style={styles.welcome}>
          { this.state.message }
        </Text>
      );
      return (
        <View style={styles.container}>
          { loadingMarkup }
        </View>
      );
    } else {
      const dataMarkup = (
        <DemoList foo={this.state.gifLinks} />
      );
      return (
        <View style={styles.container}>
          { dataMarkup }
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
