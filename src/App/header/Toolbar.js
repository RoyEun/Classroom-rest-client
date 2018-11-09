import React from 'react';
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
          <li><a href="/classroom">Classrooms</a></li>
          <li><a href="/lecturer">Lecturers</a></li>
          <li><a href="/student">Students</a></li>
          <li><a href="/course">Courses</a></li>
        </ul>
      </div>
    </nav>
  </header>
);
}

export default toolbar;
