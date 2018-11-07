import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses ='side-drawer';

  console.log(props, 'props for side drawer');
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><a href="/classroom">Classrooms</a></li>
        <li><a href="/lecturer">Lecturers</a></li>
        <li><a href="/course">Courses</a></li>
        <li><a href="/student">Students</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
