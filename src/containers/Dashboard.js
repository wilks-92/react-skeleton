import React, { Component } from 'react';
import '../styles/index.css';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

class Dashboard extends Component {

    constructor(props) {
        
        super(props);
        
        this.state = {
          attr : '',
        }
        
      }
    
    functionStyle = (arg) => {
        this.setState({attr : arg})
    }  

    componentDidMount(){

        const {dispatch} = this.props;

        //do something with dispatch, or don't, your choice.

    }
      
    render() {
        
        return (
                <div className = 'dashboard'>
                    Welcome, to the Dashboard!
                </div>  
              )
              
      }


}

const mapStateToProps = state => {

    const {templateReducer} = state;
   
    return {
      templateReducer
    }
  
  };
  
  export default connect(mapStateToProps)(Boards);