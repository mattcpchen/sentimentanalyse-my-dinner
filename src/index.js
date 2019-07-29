import React from 'react';
import ReactDOM from 'react-dom';
import appStore from './store';
import { Provider } from 'react-redux';
import { App } from './components';


class AppContainer extends React.Component{
  render(){
    return(
      <Provider store={ appStore }>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'))
