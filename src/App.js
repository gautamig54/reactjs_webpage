import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import Results from './components/Results';
import Sidemenu from './components/Sidemenu';


class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {show: false};
      this.handleClick = this.handleClick.bind(this);
    }


  handleClick()
  {
      this.setState(prevState => ({show: !prevState.show}));
    }


  render() {
    return (
      <div className ="mainpage">
      < Navigation />
      <h5 style ={{textAlign:'right', marginTop:'20px'}}><span style={{color:'blue'}}>4023</span> results found</h5>


      <div className ="wrapper">
      <button type="button" class="btn btn-info" style={{height:'37px'}} onClick={this.handleClick}>
        {this.state.show ? 'Close' : 'Menu'}
      </button>
        {
          this.state.show?
          <div>
            <Sidemenu />
          </div>
          :null
        }

        <Results />
      </div>
        </div>


    );
  }

}





export default App;
