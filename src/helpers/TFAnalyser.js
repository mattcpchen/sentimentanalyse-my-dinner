import "babel-polyfill";
import * as tf from "@tensorflow/tfjs";

class TFAnalyser {
  constructor() {
    this.model = null;
    this.indexFrom = null;
    this.maxLen = null;
    this.wordIndex = null;
  }

  async init(urls) {
    this.model = await this.loadModel(urls.model);
    await this.loadMetaData(urls.metadata);
    return this;
  }

  async loadModel(modelUrl) {
    try {
      var model = await tf.loadLayersModel(modelUrl);
      return model;
    } catch (err) {
      console.error(err);
    }
  }

  async loadMetaData(metadataUrl) {
    try {
      var metadataJson = await fetch(metadataUrl);
      var metadata = await metadataJson.json();
      this.indexFrom = metadata['index_from'];
      this.maxLen = metadata['max_len'];
      this.wordIndex = metadata['word_index'];
      return metadata;
    } catch(err) {
      console.error('Loading metadata failed.: ', err);
    }
  }

  predict(text) {
    var input_words = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
    var words_buffer = tf.buffer([1, this.maxLen], 'float32');
    var il = input_words.length;
    if(input_words.length > this.maxLen) {
      il = this.maxLen;
    }
    for(let i=0; i<il; ++i) {
      var word = input_words[i];
      if (word in this.wordIndex) {
        words_buffer.set(this.wordIndex[word] + this.indexFrom, 0, i);
      } else {
        // console.log('cannot find: ===> ', word);
      }
    }
    var input = words_buffer.toTensor();
    var output = this.model.predict(input);
    // console.log(output.dataSync());
    var score = output.dataSync()[0];
    output.dispose();
    return score;
  }
}



export default TFAnalyser;
