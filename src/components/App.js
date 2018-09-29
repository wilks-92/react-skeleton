import React, {Component} from 'react';
import Main from '../containers/Main';

export default class App extends Component {
  
  constructor(props) {

    super(props);
    this.state = {};

  }

  render () {

    return (
      <div className = "app">
            <Main />
      </div>
    );

  }
}

