import React from 'react';
import {StyleSheet, Text, View, Button, AppRegistry} from 'react-native;
import Voice from 'react-native-voice';
export default class VoiceNative extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           recognized: '',
           started: '',
           results: [],
       };

        Voice.onSpeechStart = this.onSpeechStart.bind(this)
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this)
        Voice.onSpeechResults = this.onSpeechResults.bind(this)
    }
  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  }
  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  }
  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }
}
AppRegistry.registerComponent('VoiceNative', () => VoiceNative);
