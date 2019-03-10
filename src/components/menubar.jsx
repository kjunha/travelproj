import React from 'react'
import PropTypes from 'prop-types'
import'./css/menubar.css';

class Menubar extends React.Component {
  render () {
    return(
      <div id="menubar" className="ui inverted divided grid">
        <div className="four wide column">
          Logo and Business Name
        </div>
        <div id="menu_comp" className="twelve wide column">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Start Guide</a>
          <a href="#">Help Desk</a>
        </div>
      </div>
    );
  }
}

export default Menubar;
