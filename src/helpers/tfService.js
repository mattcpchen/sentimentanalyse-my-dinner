import TFAnalyser from './TFAnalyser';

const CNN_URLS = {
  model: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json',
  metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json'
};

const LSTM_URLS = {
  model: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_lstm_v1/model.json',
  metadata: 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_lstm_v1/metadata.json'
};

async function setup_analyser() {
  const urls = CNN_URLS;
  try {
    await fetch(urls.model, {method: 'HEAD'});
    var analyser = await new TFAnalyser().init(urls);
    return analyser;
  } catch (err) {
    return err;
  }
}

const analyzeReview = (text, callback) => {
  const textData = text.replace(/(\r\n|\n|\r)/gm, "");
  const analyser = setup_analyser();
  analyser.then(function(a) {
    const result = a.predict(textData);
    const score = result.toFixed(2)*100;
    callback(a, score);
  });
}


export default analyzeReview;
