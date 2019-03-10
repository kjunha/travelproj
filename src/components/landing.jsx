import React from 'react';
import PropTypes from 'prop-types';
import './css/landing.css';
import SigninMod from'./signinModal'

class Langing extends React.Component {
  constructor(){
    super();
    this.state={
      onoff:'none'
    };
  }
  modalTurnOn() {
    this.setState({onoff:'block'});
  }
  modalTurnOff() {
    this.setState({onoff:'none'});
  }

  render () {
    return(
      <div id="main"className="ui grid">
        <SigninMod modalTurnOn={this.modalTurnOn.bind(this)} modalTurnOff={this.modalTurnOff.bind(this)} status={this.state.onoff}/>
        <div id="login" className="eight wide column">
          <div id="login-pane"className="ui segment">
            <div className="message" style={{textAlign:'center'}}>
              <h1>Adventure<br/>The Real World!</h1>
            </div>
            <form className="ui form" style={{marginTop:'1.5em', marginBottom:'1.5em'}}>
              <div className="field">
                <label>ID</label>
                <input type="text" name="ide" placeholder="ID"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="text" name="pass" placeholder="Password"/>
              </div>
              <div id="lgbtn">
                <button id="bbtn" className="ui button" type="submit">Login</button>
              </div>
            </form>
            <div className="ui horizontal divider">Or</div>
            <div className="signup" style={{textAlign:'center', marginTop:'1.5em'}}>
              <p>Welcome to the world traveler's community!</p>
              <button id="rbtn" className="ui button" onClick={this.modalTurnOn.bind(this)}>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Langing;
