import React from 'react';
import PropTypes from 'prop-types';
import './css/landing.css';

class SigninMod extends React.Component {
  handleChange(e){
    this.props.modalTurnOff();
    //TODO add if statement to pass the form according to the value of the button
    //traveler button, tour guide button, x button (null value).
  }
  render () {
    return(
      <div id="modovf" style={{display:this.props.status}}>
        <div id="signin-mod"className="ui segment">
          <form className="ui form">
            <div class="ui grid">
              <div class="fourteen wide column">
                <h4 class="ui dividing header">[Logo] Welcome to the companyname!</h4>
              </div>
              <div class="two wide column" style={{textAlign:'right', fontSize:'20px'}}>
                <i id="closebtn" class="window close outline icon" onClick={this.handleChange.bind(this)}></i>
              </div>
            </div>

            <div className="field">
              <label>Name</label>
              <div className="two fields">
                <div className="field">
                  <input type="text" name="shipping[first-name]" placeholder="First Name"/>
                </div>
                <div className="field">
                  <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                </div>
              </div>
            </div>

            <div className="field">
              <label>Email Address (User ID)</label>
              <div className="fields">
                <div className="fourteen wide field">
                  <input type="text" name="email" placeholder="example@example.com"/>
                </div>
                <div className="two wide field">
                  <button id="bbtn" className="ui button" name="button"> Verify</button>
                </div>
              </div>
            </div>

              <div className="two fields">
                <div className="field">
                  <label>Password</label>
                  <input type="text" name="password" placeholder="Your Password"/>
                </div>
                <div className="field">
                  <label>Confirm Password</label>
                  <input type="text" name="password_c" placeholder="Confirmation"/>
                </div>
              </div>

              <div className="two fields">
                <div className="field">
                  <label>Country</label>
                  <input type="text" name="country" placeholder="Country"/>
                </div>
                <div className="field">
                  <label>City/Region</label>
                  <input type="text" name="region" placeholder="Region"/>
                </div>
              </div>
              <div className="field" style={{textAlign:'right'}}>
                <div className="ui checkbox">
                  <input id="tccheck" type="checkbox" value="agree"/>
                  <label>I agree to the <a href="#">Privacy Policy, Terms & Conditions</a></label>
                </div>
              </div>
              <div className="ui grid">
                <div className="eight wide column" style={{textAlign:'left'}}>
                  <button id="rbtn" className="ui button" onClick={this.handleChange.bind(this)}>Sign in as a Tour guide</button>
                </div>
                <div className="eight wide column" style={{textAlign:'right'}}>
                  <button id="bbtn" className="ui button" onClick={this.handleChange.bind(this)}>Sign in as a Traveler</button>
                </div>
              </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninMod;
