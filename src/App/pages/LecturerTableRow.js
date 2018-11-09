import React from 'react';

const LecturerTableHeader = ({item}) => {
  return (
    <div className="table_row">
      <div className="table_small">
        <div className="table_cell">Lecturer ID</div>
        <div id={item.id} className="table_cell">{item.id}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Lecturer Name</div>
        <div className="table_cell">{item.lecturer_name}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Course ID</div>
        <div id={item.course.id} className="table_cell">{item.course.id}</div>
      </div>
      <div className="table_small">
        <div className="table_cell">Course Name</div>
        <div className="table_cell">{item.course.course_name}</div>
      </div>
    </div>
  );
};

export default LecturerTableHeader;
