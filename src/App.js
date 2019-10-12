import React, { Component } from 'react';
import Router from './Router';
import Homepage from './components/Homepage';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'




class App extends Component {
  constructor(props)
  {
    super(props)
    this.state ={
    }
  }


  static getDerivedStateFromProps(props, state)
  {
    if(props.app_arr !== state.nhanvien)
    {
      return{...state,nhanvien:props.app_arr}
    }
    else{
      return {...state}
    }
  
  }

  render() {
    return (
      <Router>
          <div className="App-quanlysp">
            <Homepage></Homepage>
          </div>
      </Router>
    )
  }
}


function mapStateToProps(state) {
  return{
   app_arr : state.rootReducer.testArr
  }
} 


export default withRouter(connect(mapStateToProps,null)(App));

