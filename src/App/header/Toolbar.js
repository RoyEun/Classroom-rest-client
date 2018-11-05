import React from 'react';
import SideDrawer from './SideDrawer';
import DrawerToggleButton from './DrawerToggleButton';

import './Toolbar.css';

const toolbar = props => {
  return (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"><a href="/">School Directory</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Classrooms</a></li>
          <li><a href="/">Lecturers</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
}

export default toolbar;
