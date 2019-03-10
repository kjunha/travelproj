import React from 'react';
import PropTypes from 'prop-types';
import './css/landing.css';

class Langing extends React.Component {
  render () {
    return(
      <div id="main"class="ui grid">
        <div id="login" class="eight wide column">
          <div class="ui placeholder segment">
            <div class="message" style={{textAlign:'center'}}>
              <h1>Adventure<br/>The Real World!</h1>
            </div>
            <form class="ui form" style={{marginTop:'1.5em', marginBottom:'1.5em'}}>
              <div class="field">
                <label>ID</label>
                <input type="text" name="ide" placeholder="ID"/>
              </div>
              <div class="field">
                <label>Password</label>
                <input type="text" name="pass" placeholder="Password"/>
              </div>
              <button id="bbtn" class="ui button" type="submit">Login</button>
            </form>
            <div class="ui horizontal divider">Or</div>
            <div class="signup" style={{textAlign:'center', marginTop:'1.5em'}}>
              <p>Welcome to the world traveler's community!</p>
              <button id="rbtn" class="ui button">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Langing;
