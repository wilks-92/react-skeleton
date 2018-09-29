import React, {Component} from 'react';
import {connect} from "react-redux";
import {Switch, Route, withRouter} from 'react-router-dom';
import Dashboard from './Dashboard';

class Main extends Component {

  constructor(props) {

      super(props);
      this.state = {};

  }

  render () {
    
    const { templateReducer } = this.props;
    
    return (

      <main>

        <Switch>
          <Route exact path = '/*' component = {Dashboard} />
        </Switch>
       
      </main>

    );

  }

}

const mapStateToProps = state => {

  const {templateReducer} = state;
 
  return {
    templateReducer
  }

};

export default withRouter(connect(mapStateToProps)(Main));