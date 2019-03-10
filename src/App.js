import React from 'react'
import PropTypes from 'prop-types'
import Menubar from './components/menubar';
import Landing from './components/landing';

class App extends React.Component {
  render () {
    return(
      <div>
        <Menubar />
        <Landing />
      </div>
    );
  }
}

export default App;
