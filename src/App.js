import React, { Component } from 'react';
import { Button, OrangeButton, TomatoButton } from './styledComponents/buttons'

class App extends Component {
  render() {
    console.log(`api url: `, process.env.REACT_APP_API_URL)
    console.log(`node env: `, process.env.NODE_ENV)
    return (
      <div className={`container`}>
        <div className='row'>
          <div className='col-sm-3 col-xs-12'><OrangeButton >I'm a super button</OrangeButton></div>
          <div className='col-sm-3 col-xs-12'><TomatoButton>I'm a super button</TomatoButton></div>
          <div className='col-sm-3 col-xs-12'><Button selected >I'm a super button</Button></div>
          <div className='col-sm-3 col-xs-12'><Button>I'm a super button</Button></div>
        </div>

      </div>

    );
  }
}

export default App;
